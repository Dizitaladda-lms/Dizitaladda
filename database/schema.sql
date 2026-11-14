-- Fresh-install schema for the Next.js backed website.
-- Existing production databases are connected through DB_* environment variables;
-- this file is intended for a new database and does not alter existing tables.
CREATE TABLE IF NOT EXISTS admin (
  admin_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  admin_email VARCHAR(254) NOT NULL UNIQUE,
  admin_pass VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS student (
  stu_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  stu_name VARCHAR(200) NOT NULL,
  stu_email VARCHAR(254) NOT NULL UNIQUE,
  stu_pass VARCHAR(255) NOT NULL,
  stu_occ VARCHAR(200) NOT NULL DEFAULT '',
  stu_img VARCHAR(500) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS course (
  course_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  course_name VARCHAR(255) NOT NULL,
  course_desc TEXT NOT NULL,
  course_author VARCHAR(200) NOT NULL DEFAULT '',
  course_img VARCHAR(500) NOT NULL DEFAULT '',
  course_duration VARCHAR(100) NOT NULL DEFAULT '',
  course_price DECIMAL(10,2) NOT NULL DEFAULT 0,
  course_original_price DECIMAL(10,2) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS lesson (
  lesson_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  lesson_name VARCHAR(255) NOT NULL,
  lesson_desc TEXT NOT NULL,
  lesson_link VARCHAR(1000) NOT NULL DEFAULT '',
  course_id INT NOT NULL,
  course_name VARCHAR(255) NOT NULL DEFAULT '',
  INDEX lesson_course_id (course_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS feedback (
  f_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  f_content TEXT NOT NULL,
  stu_id INT NOT NULL,
  INDEX feedback_student_id (stu_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS courseorder (
  co_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  order_id VARCHAR(100) NOT NULL UNIQUE,
  stu_email VARCHAR(254) NOT NULL DEFAULT '',
  course_id INT NOT NULL DEFAULT 0,
  status VARCHAR(40) NOT NULL,
  respmsg TEXT NOT NULL,
  amount DECIMAL(10,2) NOT NULL DEFAULT 0,
  order_date VARCHAR(40) NOT NULL,
  INDEX courseorder_student (stu_email),
  INDEX courseorder_course (course_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS course_payments (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  email VARCHAR(200) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  course_name VARCHAR(300) NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  razorpay_order_id VARCHAR(100) NOT NULL UNIQUE,
  razorpay_payment_id VARCHAR(100) NOT NULL UNIQUE,
  payment_status VARCHAR(20) NOT NULL DEFAULT 'Success',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS form_submissions (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  phone VARCHAR(32) NOT NULL,
  email VARCHAR(254) NOT NULL,
  course VARCHAR(160) NOT NULL,
  submission_time DATETIME NOT NULL,
  UNIQUE KEY form_submission_email (email),
  UNIQUE KEY form_submission_phone (phone)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS inquiries (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  phone VARCHAR(32) NOT NULL,
  email VARCHAR(254) NOT NULL,
  course VARCHAR(160) NOT NULL,
  class_mode VARCHAR(60) NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS posts (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(300) NOT NULL,
  meta_title VARCHAR(300) NOT NULL DEFAULT '',
  meta_description VARCHAR(500) NOT NULL DEFAULT '',
  alt_tag VARCHAR(300) NOT NULL DEFAULT '',
  image VARCHAR(1000) NOT NULL DEFAULT '',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  slug VARCHAR(300) NOT NULL UNIQUE,
  category VARCHAR(120) NOT NULL DEFAULT '',
  author VARCHAR(200) NOT NULL DEFAULT 'Dizital Adda',
  description TEXT NOT NULL,
  content LONGTEXT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
