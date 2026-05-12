CREATE DATABASE company_db1;
use company_db1;

CREATE TABLE employee_detail (
employee_id INT PRIMARY KEY auto_increment,
employee_name varchar(200) NOT NULL,
employee_email varchar(200) NOT NULL,
employee_dept varchar(200) NOT NULL,
employee_salary float NOT NULL,
employee_city varchar(200) NOT NULL,
id_created_at datetime NOT NULL
);

INSERT INTO employee_detail (employee_name,employee_email,employee_dept,employee_salary,employee_city,id_created_at) VALUES (upper("magesh"),lower("MAGESH123@gmail.com"),upper("python developer"),round(45000),lower("CHENNAI"),now()),(upper("aakash"),lower("AAKASH321@gmail.com"),upper("JAVA developer"),round(40000),lower("MADURAI"),now()),(upper("Lokesh"),lower("LOKESH789@gmail.com"),upper("SOFTware developer"),round(85000),lower("KANCHIPURAM"),now());

