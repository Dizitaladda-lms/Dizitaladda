CREATE TABLE IF NOT EXISTS form_submissions (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  phone VARCHAR(32) NOT NULL,
  email VARCHAR(254) NOT NULL,
  course VARCHAR(160) NOT NULL,
  submission_time DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY form_submission_email (email),
  UNIQUE KEY form_submission_phone (phone)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
