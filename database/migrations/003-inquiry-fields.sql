ALTER TABLE inquiries
  ADD COLUMN appointment_date VARCHAR(100) NOT NULL DEFAULT '' AFTER class_mode,
  ADD COLUMN message TEXT NOT NULL AFTER appointment_date,
  ADD COLUMN source VARCHAR(1000) NOT NULL DEFAULT '' AFTER message;
