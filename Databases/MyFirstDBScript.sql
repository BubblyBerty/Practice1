create database FirstDatabase;

-- This is a single line comment
/*
This is a multi-line comment
MySQL is not case sensitive
To execute a query highlight it and click the lightning icon to the right of the save icon

*/

show databases; -- this will list all available DBs
use firstDatabase; -- this will slsect the firstdatabase DB
select database(); -- this will show you the selected DB

create table student(
	studentId int,
    studentName varchar(15), -- 15 characters is the maximum
    studentDOB date,
    studentMarks decimal(4,1)
    );
    
show tables;
use commandlinedb;
describe country;


/* tasks - 
1. Create three databases (test1, test2, test3)
2. delete the test2 database
3. list all tables in the test1 database
4. create course table with below columns and datatypes
    -courseID
    -courseSubject
    -startDate
    -time
*/
create database test1;
create database test2;
create database test3;
delete database test2;
drop database test2;
describe test1;
use test1;
show tables; -- this will display no tables because none were created
create table course(
	courseID int,
    courseSubject varchar(20),
    startDate date,
    time time
);
describe course;    