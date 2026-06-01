CREATE DATABASE school_db;
use school_db;

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

-- Student 1
("Maths", 87, 1),
("English", 80, 1),
("Tamil", 79, 1),
("Computer Science", 85, 1),
("Physics", 83, 1),
("Chemistry", 80, 1),

-- Student 2
("Maths", 76, 2),
("English", 72, 2),
("Tamil", 74, 2),
("Computer Science", 81, 2),
("Physics", 78, 2),
("Chemistry", 75, 2),

-- Student 3
("Maths", 91, 3),
("English", 88, 3),
("Tamil", 84, 3),
("Computer Science", 95, 3),
("Physics", 90, 3),
("Chemistry", 89, 3),

-- Student 4
("Maths", 69, 4),
("English", 73, 4),
("Tamil", 71, 4),
("Computer Science", 77, 4),
("Physics", 70, 4),
("Chemistry", 68, 4),

-- Student 5
("Maths", 82, 5),
("English", 79, 5),
("Tamil", 81, 5),
("Computer Science", 88, 5),
("Physics", 84, 5),
("Chemistry", 80, 5),

-- Student 6
("Maths", 95, 6),
("English", 92, 6),
("Tamil", 90, 6),
("Computer Science", 98, 6),
("Physics", 94, 6),
("Chemistry", 93, 6),

-- Student 7
("Maths", 74, 7),
("English", 70, 7),
("Tamil", 72, 7),
("Computer Science", 78, 7),
("Physics", 75, 7),
("Chemistry", 73, 7),

-- Student 8
("Maths", 86, 8),
("English", 84, 8),
("Tamil", 82, 8),
("Computer Science", 89, 8),
("Physics", 87, 8),
("Chemistry", 85, 8),

-- Student 9
("Maths", 65, 9),
("English", 68, 9),
("Tamil", 70, 9),
("Computer Science", 72, 9),
("Physics", 67, 9),
("Chemistry", 66, 9),

-- Student 10
("Maths", 88, 10),
("English", 85, 10),
("Tamil", 83, 10),
("Computer Science", 91, 10),
("Physics", 89, 10),
("Chemistry", 87, 10);

CREATE TABLE marks(
marks_id int primary key auto_increment,
total_mark int,
subject_status varchar(200),
student_id int,
subject_id int,

foreign key (student_id) references students(student_id),
foreign key (subject_id) references subjects(subject_id)

);


INSERT INTO marks (total_mark, subject_status, student_id) VALUES
(494, "Pass", 1),
(456, "Pass", 2),
(537, "Pass", 3),
(428, "Pass", 4),
(494, "Pass", 5),
(562, "Pass", 6),
(442, "Pass", 7),
(513, "Pass", 8),
(408, "Pass", 9),
(523, "Pass", 10);

SELECT students.student_name, subjects.subject_mark as Maths_mark from students INNER JOIN subjects on subjects.student_id = students.student_id where subjects.subject_name = "Maths";

SELECT students.student_name, subjects.subject_mark as Physics_Mark from students INNER JOIN subjects on subjects.student_id = students.student_id where subjects.subject_name = "Physics";

SELECT 
students.student_id as 'S.No',
students.student_name as 'Student Name',

MAX(CASE WHEN subjects.subject_name = 'Maths'
THEN subjects.subject_mark END) as Maths,

MAX(CASE WHEN subjects.subject_name = 'Physics'
THEN subjects.subject_mark END) as Physics,

MAX(CASE WHEN subjects.subject_name = 'Chemistry'
THEN subjects.subject_mark END) as Chemistry,

MAX(CASE WHEN subjects.subject_name = 'Computer Science'
THEN subjects.subject_mark END) as 'Computer Science',

MAX(CASE WHEN subjects.subject_name = 'Tamil'
THEN subjects.subject_mark END) as Tamil,

MAX(CASE WHEN subjects.subject_name = 'English'
THEN subjects.subject_mark END) as English,

SUM(subjects.subject_mark) as 'Student Total',

600 as 'Overall Total',

CASE WHEN MIN(subjects.subject_mark) >= 35 THEN 'Pass'
ELSE 'Fail'
END as 'Status'

FROM students INNER JOIN subjects on students.student_id = subjects.student_id 	
GROUP BY students.student_id, students.student_name ORDER BY students.student_id;