CREATE DATABASE elections;
use elections;

CREATE TABLE constitution (

constitution_id int primary key auto_increment,
district_name varchar(200) not null,
constitution_name varchar(200) not null,
constitution_dis_id varchar(200) not null

);

CREATE TABLE parties (

party_id int primary key auto_increment,
party_symbol varchar(200) not null,
party_name varchar(200) not null,
party_dis_number varchar(200) not null

);


CREATE TABLE candidates (

candidate_id int primary key auto_increment,
candidate_name varchar(200) not null,
candidate_age varchar(200) not null,
candidate_mobile_number varchar(200) not null,
candidate_party_name varchar(200) not null,
candidate_constitution varchar(200) not null


);





-- Insert Data

INSERT INTO constitution (district_name,constitution_name,constitution_dis_id) VALUES ("CHENNAI","PERAMBUR","12"),("CHENNAI","PERAMBUR","12");

-- Cnadidates Info

INSERT INTO candidates (candidate_name,candidate_age,candidate_mobile_number,candidate_party_name,candidate_constitution) VALUES ("	C.JOSEPH VIJAY","52","9876543456","TAMILAGA VETTRI KAZHAGAM","PERUMBUR");
INSERT INTO candidates (candidate_name,candidate_age,candidate_mobile_number,candidate_party_name,candidate_constitution) VALUES ("	N.MARIE WILSON","46","9376587656","TAMILAGA VETTRI KAZHAGAM","R.K.NAGAR");
INSERT INTO candidates (candidate_name,candidate_age,candidate_mobile_number,candidate_party_name,candidate_constitution) VALUES ("	V.S.BABU","75","8765456569","TAMILAGA VETTRI KAZHAGAM","KOLATHUR");
INSERT INTO candidates (candidate_name,candidate_age,candidate_mobile_number,candidate_party_name,candidate_constitution) VALUES ("	R.SABARINATH","30","7654345687","TAMILAGA VETTRI KAZHAGAM","VIRUKAMPAKKAM");
INSERT INTO candidates (candidate_name,candidate_age,candidate_mobile_number,candidate_party_name,candidate_constitution) VALUES ("	N. ANAND","61","6356743456","TAMILAGA VETTRI KAZHAGAM","THIYAGARAYA NAGAR");
INSERT INTO candidates (candidate_name,candidate_age,candidate_mobile_number,candidate_party_name,candidate_constitution) VALUES ("	AADHAV ARJUNA","44","6567743456","TAMILAGA VETTRI KAZHAGAM","VILLIVAKKAM");
INSERT INTO candidates (candidate_name,candidate_age,candidate_mobile_number,candidate_party_name,candidate_constitution) VALUES ("	K.V.VIJAY DAMU","46","9600043456","TAMILAGA VETTRI KAZHAGAM","ROYAPURAM");
INSERT INTO candidates (candidate_name,candidate_age,candidate_mobile_number,candidate_party_name,candidate_constitution) VALUES ("	N.SENTHIL KUMAR","46","8186543454","TAMILAGA VETTRI KAZHAGAM","THIRUVOTTIYUR");
INSERT INTO candidates (candidate_name,candidate_age,candidate_mobile_number,candidate_party_name,candidate_constitution) VALUES ("	ECR P.SARAVANAN","45","8235434561","TAMILAGA VETTRI KAZHAGAM","SHOZHINGANALLUR");
INSERT INTO candidates (candidate_name,candidate_age,candidate_mobile_number,candidate_party_name,candidate_constitution) VALUES ("	M.L.VIJAYPRABHU","52","9456743456","TAMILAGA VETTRI KAZHAGAM","MADAVARAM");


UPDATE constitution SET constitution_name = "Solinganallur",constitution_dis_id="27" where constitution_id = 2;

