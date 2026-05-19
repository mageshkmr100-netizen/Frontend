CREATE DATABASE marks_db;
use marks_db;

CREATE TABLE students(
student_id int primary key auto_increment,
student_name varchar(200),
student_std varchar(200),
student_total int
);

INSERT INTO students(student_name, student_std, student_total) VALUES
("Varun", "6th", 78),
("Arjun", "7th", 85),
("Kavin", "8th", 91),
("Rahul", "6th", 67),
("Sneha", "7th", 88),
("Priya", "8th", 95),
("Aakash", "6th", 73),
("Divya", "7th", 81),
("Nithin", "8th", 76),
("Meena", "6th", 89);

CREATE TABLE subjects(
subject_id int primary key auto_increment,
subject_name varchar(200),
subject_total int,
student_id int,

foreign key (student_id) references students(student_id)
);

ALTER TABLE subjects RENAME COLUMN subject_total TO subject_pass_mark; 

INSERT INTO subjects(subject_name, subject_pass_mark, student_id) VALUES
("Maths", 75, 1),
("Science", 75, 2),
("English", 75, 3),
("Social", 75, 4),
("Physics", 75, 5),
("Chemistry", 75, 6),
("Biology", 75, 7),
("Computer", 75, 8),
("Tamil", 75, 9),
("History", 75, 10);

select subject_name,subject_id from subjects;

select AVG(subject_pass_mark) from subjects;

select student_name,student_total,subject_pass_mark from students INNER JOIN subjects on students.student_id = subjects.student_id;