CREATE DATABASE students_db;
use students_db;

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
("Maths", 90, 1),
("English", 95, 1),
("Tamil", 91, 1),
("Computer Science", 85, 1),
("Physics", 93, 1),
("Chemistry", 89, 1),

-- Student 2
("Maths", 86, 2),
("English", 92, 2),
("Tamil", 94, 2),
("Computer Science", 91, 2),
("Physics", 98, 2),
("Chemistry", 85, 2),

-- Student 3
("Maths", 91, 3),
("English", 98, 3),
("Tamil", 94, 3),
("Computer Science", 95, 3),
("Physics", 100, 3),
("Chemistry", 99, 3),

-- Student 4
("Maths", 99, 4),
("English", 93, 4),
("Tamil", 91, 4),
("Computer Science", 97, 4),
("Physics", 89, 4),
("Chemistry", 100, 4),

-- Student 5
("Maths", 82, 5),
("English", 99, 5),
("Tamil", 91, 5),
("Computer Science", 89, 5),
("Physics", 88, 5),
("Chemistry", 90, 5),

-- Student 6
("Maths", 95, 6),
("English", 92, 6),
("Tamil", 90, 6),
("Computer Science", 98, 6),
("Physics", 94, 6),
("Chemistry", 93, 6),

-- Student 7
("Maths", 94, 7),
("English", 90, 7),
("Tamil", 92, 7),
("Computer Science", 89, 7),
("Physics", 87, 7),
("Chemistry", 83, 7),

-- Student 8
("Maths", 86, 8),
("English", 87, 8),
("Tamil", 89, 8),
("Computer Science", 89, 8),
("Physics", 90, 8),
("Chemistry", 86, 8),

-- Student 9
("Maths", 75, 9),
("English", 88, 9),
("Tamil", 89, 9),
("Computer Science", 92, 9),
("Physics", 87, 9),
("Chemistry", 96, 9),

-- Student 10
("Maths", 98, 10),
("English", 95, 10),
("Tamil", 93, 10),
("Computer Science", 91, 10),
("Physics", 99, 10),
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
(543, "Pass", 1),
(546, "Pass", 2),
(577, "Pass", 3),
(569, "Pass", 4),
(539, "Pass", 5),
(562, "Pass", 6),
(535, "Pass", 7),
(527, "Pass", 8),
(527, "Pass", 9),
(563, "Pass", 10);


SELECT student_name, total_mark from marks INNER JOIN students on students.student_id = marks.student_id;

SELECT students.student_name, marks.total_mark from marks INNER JOIN students on students.student_id = marks.student_id where marks.total_mark = (SELECT MAX(total_mark) from marks);

SELECT students.student_name, marks.total_mark from marks INNER JOIN students on students.student_id = marks.student_id where marks.total_mark = (SELECT MIN(total_mark) from marks);

SELECT students.student_name, AVG(subjects.subject_mark) as subject_average from students INNER JOIN subjects on students.student_id = subjects.student_id GROUP BY students.student_id, students.student_name;

SELECT students.student_name, COUNT(subjects.subject_name) as No_of_subjects from students INNER JOIN subjects on students.student_id = subjects.student_id GROUP BY students.student_id, students.student_name;

SELECT students.student_name, MAX(subjects.subject_mark) as Highest_mark from students INNER JOIN subjects on students.student_id = subjects.student_id GROUP BY students.student_id, students.student_name;

