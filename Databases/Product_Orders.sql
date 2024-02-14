create database Product_Orders;
use Product_Orders;
create table Orders
	(
		order_id int primary key,
        product varchar(20),
        total int,
        customer_id int,
        foreign key (customer_id) references Customers(id) on delete set null,
		foreign key (customer_id) references Customers(id) on delete cascade
	);
create table Customers
	(
		id int primary key,
        first_name varchar(15),
        last_name varchar(20),
        age int,
        country varchar(10)
	);    
show warnings;
describe Orders;

insert into Orders values
(1, 'Paper', 500, 5),
(2, 'Pen', 10, 2),
(3, 'Marker', 120, 3),
(4, 'Books', 1000, 1),
(5, 'Erasers', 20, 4);

insert into Customers values
	(1, 'John', 'Doe', 31, 'USA'),
	(2, 'Robert', 'Luna', 22, 'USA'),
	(3, 'David', 'Robinson', 22, 'UK'),
	(4, 'John', 'Reinhardt', 25, 'UK'),
	(5, 'Betty', 'Doe', 28, 'UAE');
    
DELETE FROM Customers WHERE id=2;
select * from Orders;
