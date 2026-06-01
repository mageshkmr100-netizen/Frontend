CREATE DATABASE soap_db;
use soap_db;
CREATE TABLE flavour(
flavour_id int primary key auto_increment,
flavour_name varchar(200)
);

INSERT INTO flavour (flavour_name) values ("luxury perfume"),
 ("sandal"),
 ("mint cool"),
 ("neam"),
 ("glycerine");

CREATE TABLE soaps(
soap_id int primary key auto_increment,
soap_brand varchar(200),
soap_color varchar(200),
soap_price int,
flavour_id int,

foreign key (flavour_id) references flavour(flavour_id)
);

INSERT INTO soaps (soap_brand, soap_color, soap_price, flavour_id) values 
("Dettol","Blue",60,3),
("Lux","Pink",55,1),
("Mysore Sandal","Sandal",80,2),
("Hamam","Green",60,4),
("Pears","Orange",75,5);

select soap_brand, flavour_name from soaps INNER JOIN flavour on soaps.flavour_id = flavour.flavour_id;