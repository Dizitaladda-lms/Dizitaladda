-- Run once against the existing BLOG_DB database before enabling the new editor.
DELIMITER $$
CREATE PROCEDURE migrate_blog_post_content()
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'posts' AND COLUMN_NAME = 'meta_description') THEN
    ALTER TABLE posts ADD COLUMN meta_description VARCHAR(500) NOT NULL DEFAULT '';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'posts' AND COLUMN_NAME = 'description') THEN
    ALTER TABLE posts ADD COLUMN description TEXT NULL;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'posts' AND COLUMN_NAME = 'content') THEN
    ALTER TABLE posts ADD COLUMN content LONGTEXT NULL;
  END IF;
END$$
CALL migrate_blog_post_content()$$
DROP PROCEDURE migrate_blog_post_content$$
DELIMITER ;
