-- University Lab System Database Schema
-- تم إنشاء المنظومة بواسطة طلاب من كلية الهندسة جامعة طنطا

CREATE DATABASE IF NOT EXISTS university_lab;
USE university_lab;

-- Students table
CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    studentId VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    faculty VARCHAR(100) NOT NULL,
    department VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    registrationDate DATETIME NOT NULL,
    lastLogin DATETIME NULL,
    accessCount INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Activities log table
CREATE TABLE IF NOT EXISTS activities (
    id INT AUTO_INCREMENT PRIMARY KEY,
    studentId VARCHAR(50) NOT NULL,
    action TEXT NOT NULL,
    timestamp DATETIME NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (studentId) REFERENCES students(studentId) ON DELETE CASCADE
);

-- System access logs table
CREATE TABLE IF NOT EXISTS system_access (
    id INT AUTO_INCREMENT PRIMARY KEY,
    studentId VARCHAR(50) NOT NULL,
    systemId VARCHAR(100) NOT NULL,
    systemName VARCHAR(100) NOT NULL,
    actionType ENUM('connect', 'download_rdp') NOT NULL,
    timestamp DATETIME NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (studentId) REFERENCES students(studentId) ON DELETE CASCADE
);

-- Insert sample data for testing
INSERT IGNORE INTO students (studentId, name, faculty, department, password, registrationDate) VALUES
('2023001', 'Ahmed Mohamed', 'Engineering', 'Electronics and Communications Engineering', '$2a$10$examplehashedpassword', NOW()),
('2023002', 'Mona Ali', 'Medicine', 'General Medicine', '$2a$10$examplehashedpassword', NOW()),
('2023003', 'Omar Hassan', 'Computers', 'Computer Science', '$2a$10$examplehashedpassword', NOW());

-- Create indexes for better performance
CREATE INDEX idx_students_studentId ON students(studentId);
CREATE INDEX idx_activities_studentId ON activities(studentId);
CREATE INDEX idx_activities_timestamp ON activities(timestamp);
CREATE INDEX idx_system_access_studentId ON system_access(studentId);
CREATE INDEX idx_system_access_timestamp ON system_access(timestamp);
