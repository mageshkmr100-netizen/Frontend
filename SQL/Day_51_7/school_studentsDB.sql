CREATE DATABASE students_marksDB;
use students_marksDB;

CREATE TABLE students(
student_id int primary key auto_increment,
student_name varchar(200),
student_age int,
student_class int
);

INSERT INTO students (student_name, student_age, student_class) VALUES
("Magesh", 17, 12),
("Arun", 16, 11),
("Kavin", 15, 10),
("Priya", 17, 12),
("Sneha", 16, 11),
("Rahul", 15, 10),
("Divya", 17, 12),
("Aakash", 16, 11),
("Meena", 15, 10),
("Varun", 17, 12);

CREATE TABLE subjects(
subject_id int primary key auto_increment,
subject_name varchar(200),
subject_mark int,
student_id int,

foreign key (student_id) references students(student_id)
);

INSERT INTO subjects (subject_name, subject_mark, student_id) VALUES

-- Magesh (Topper)
("Tamil",95,1),
("English",92,1),
("Maths",99,1),
("Computer Science",100,1),
("Physics",97,1),
("Chemistry",94,1),

-- Arun (Good Student)
("Tamil",80,2),
("English",85,2),
("Maths",78,2),
("Computer Science",88,2),
("Physics",82,2),
("Chemistry",79,2),

-- Kavin (15 yrs - Average)
("Tamil",65,3),
("English",70,3),
("Maths",72,3),
("Science",68,3),
("Social",75,3),

-- Priya (Topper)
("Tamil",98,4),
("English",97,4),
("Maths",100,4),
("Computer Science",99,4),
("Physics",96,4),
("Chemistry",95,4),

-- Sneha (Failed One Subject)
("Tamil",72,5),
("English",81,5),
("Maths",28,5),
("Computer Science",75,5),
("Physics",70,5),
("Chemistry",69,5),

-- Rahul (15 yrs - Just Pass)
("Tamil",40,6),
("English",38,6),
("Maths",35,6),
("Science",42,6),
("Social",39,6),

-- Divya (Excellent)
("Tamil",91,7),
("English",89,7),
("Maths",94,7),
("Computer Science",92,7),
("Physics",90,7),
("Chemistry",88,7),

-- Aakash (Average)
("Tamil",60,8),
("English",55,8),
("Maths",62,8),
("Computer Science",58,8),
("Physics",64,8),
("Chemistry",61,8),

-- Meena (15 yrs - Fail)
("Tamil",25,9),
("English",30,9),
("Maths",22,9),
("Science",40,9),
("Social",28,9),

-- Varun (Good Student)
("Tamil",85,10),
("English",88,10),
("Maths",90,10),
("Computer Science",87,10),
("Physics",84,10),
("Chemistry",89,10);

CREATE TABLE marks(
marks_id int primary key auto_increment,
total_mark int,
subject_status varchar(200),
student_id int,
subject_id int,

foreign key (student_id) references stud(student_id),
foreign key (subject_id) references subs(subject_id)

);


INSERT INTO marks (total_mark, subject_status, student_id) VALUES
(577,'Pass',1),
(492,'Pass',2),
(350,'Pass',3),
(585,'Pass',4),
(395,'Fail',5),
(194,'Pass',6),
(544,'Pass',7),
(360,'Pass',8),
(145,'Fail',9),
(523,'Pass',10);

SELECT students.student_name, marks.total_mark from students INNER JOIN marks ON students.student_id = marks.student_id ORDER BY marks.total_mark DESC LIMIT 1, 1;

SELECT students.student_name, marks.total_mark from students INNER JOIN marks ON students.student_id = marks.student_id ORDER BY marks.total_mark DESC LIMIT 3;

SELECT students.student_name, marks.total_mark from students INNER JOIN marks ON students.student_id = marks.student_id ORDER BY marks.total_mark DESC;

SELECT students.student_name, marks.total_mark from students INNER JOIN marks ON students.student_id = marks.student_id WHERE marks.total_mark < (SELECT AVG(total_mark) from marks);

SET @rank = 0;
 
SELECT
 @rank := @rank + 1 as Rank_,
 students.student_name,
 SUM(subjects.subject_mark) as Total,
 ROUND(AVG(subjects.subject_mark), 2) as Average,
 marks.subject_status as Status
 
 FROM students
 INNER JOIN subjects
 ON students.student_id = subjects.student_id
 INNER JOIN marks
 ON students.student_id = marks.student_id
 GROUP BY 
 students.student_id,
 students.student_name,
  marks.subject_status
  ORDER BY Total DESC;