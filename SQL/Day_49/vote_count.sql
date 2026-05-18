CREATE DATABASE votesdb;
use votesdb;

CREATE TABLE constituency (

const_id int primary key auto_increment,
const_name varchar(200),
created_by varchar(200) default "admin",
created_at datetime,
updated_by varchar(200) default "employee",
updated_at datetime
);

CREATE TABLE district (

dist_id int primary key auto_increment,
dist_name varchar(200),
const_id int,
created_by varchar(200) default "admin",
created_at datetime,
updated_by varchar(200) default "Returning officer",
updated_at datetime,

foreign key (const_id)
references constituency(const_id)
);


CREATE TABLE party (

party_id int primary key auto_increment,
party_name varchar(200),
party_symbol varchar(200),
const_id int,
dist_id int,
created_by varchar(200) default "admin",
created_at datetime,
updated_by varchar(200) default "employee",
updated_at datetime,

foreign key (const_id)
references constituency(const_id),

foreign key (dist_id)
references district(dist_id)
);


CREATE TABLE result (

party_id int primary key auto_increment,
party_name varchar(200),
party_symbol varchar(200),
const_id int,
dist_id int,
created_by varchar(200) default "admin",
created_at datetime,
updated_by varchar(200) default "employee",
updated_at datetime,

foreign key (const_id)
references constituency(const_id),

foreign key (dist_id)
references district(dist_id)
);