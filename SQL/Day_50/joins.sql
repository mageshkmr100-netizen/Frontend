CREATE DATABASE ecommerce_db;
use ecommerce_db;

CREATE TABLE customer (

customer_id int primary key auto_increment,
customer_name varchar(200),
customer_city varchar(200)
);

insert into customer (customer_name, customer_city) values ("john","australia"),
("jack","london"),
("jackie","beijing"),
("ram","mumbai"),
("arjun","ahmedabad"),
("ravan","colombo");

CREATE TABLE orders (

orders_id int primary key auto_increment,
prod_name varchar(200),
amount int,
customer_id int,

foreign key (customer_id) references orders(customer_id)

);

insert into orders (prod_name, amount, customer_id) values ("Laptop", 45000, 1),
("Mobile", 35000, 2),
("Keyboard", 2000, 1),
("Mouse", 1000, 1),
("TV", 120000, 3),
("AC remote", 1000, 4);

select customer_name, customer_city, prod_name, amount from orders inner join customer on customer.customer_id = orders.customer_id;