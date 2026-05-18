CREATE DATABASE tnvotedb;
use tnvotedb;

CREATE TABLE voter (
voter_id INT PRIMARY KEY auto_increment,
voter_name varchar(200) NOT NULL,
voter_age INT NOT NULL,
voter_gender varchar(200) NOT NULL,
voter_district varchar(200) NOT NULL,
voter_constituency varchar(200) NOT NULL,
party_name varchar(200) NOT NULL,
voter_count INT NOT NULL
);

INSERT INTO voter (voter_name,voter_age,voter_gender,voter_district,voter_constituency,party_name,voter_count) VALUES ("MAGESH","23","Male","Chennai","Perambur","TVK","124569"),
("NARESH","43","Male","Chennai","Perambur","TVK","124569"),
("MANOJ","37","Male","Chennai","Kolathur","DMK","74569"),
("RITHISH","41","Male","Chennai","Madavaram","TVK","194058"),
("RAMYA","32","	Female","Madurai","Thiruparankunram","DMK","64967"),
("VIJAY","52","Male","TRICHY","Trichy East","TVK","156998"),
("NARESH","43","Male","Chennai","Perambur","TVK","124569"),
("PREMMANO","37","Male","Chennai","Kolathur","DMK","74569"),
("RESHMA","41","Female","Chennai","Madavaram","TVK","194058"),
("SELVARAJ","32","Male","Madurai","Thiruparankunram","DMK","64967"),
("VIJAYDAMU","52","Male","TRICHY","Trichy East","TVK","156998"),
("RASHMIKA","43","Female","Chennai","Perambur","TVK","124569"),
("MANOKAR","37","Male","Chennai","Kolathur","DMK","74569"),
("ANJALI","41","Female","Chennai","Madavaram","TVK","194058"),
("RAJESH","32","Male","Madurai","Thiruparankunram","DMK","64967"),
("RAM","52","Male","TRICHY","Trichy East","TVK","156998");


UPDATE voter SET voter_name = NULL,
voter_age = NULL,
voter_gender = NULL,
voter_district = NULL,
voter_constituency = NULL,
party_name = NULL,
voter_count = NULL
where voter_id = ;
 
 SELECT voter_name, AVG(voter_count) FROM voter group by voter_name;
 
 SELECT * FROM voter;
 
 SELECT * FROM 