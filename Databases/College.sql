-- ERD is the Entity Relational Diagram
-- Constraints ensure that data entered is valid
create database College;
use College;

create table Student(
	studentID int primary key auto_increment,
    studentName varchar(20) not null,
    studentAge int check(studentAge>=18),
    studentLocation varchar(15) default 'London'
    );

DESCRIBE Student;
 
-- Inserting data 
-- Syntax
-- INSERT INTO tableName (column1, column2, ...) VALUES (value1, value2 ,.. );
INSERT INTO Student(studentName, studentAge, studentLocation) VALUES
	('Mark',30, 'Manchester');
 
SELECT * FROM Student;
INSERT INTO Student(studentName, studentAge, studentLocation) VALUES
	('Bob',26,default); 
SELECT * FROM Student;

INSERT INTO Student(studentName, studentAge, studentLocation) VALUES
	('Paul',16,default); 
SELECT * FROM Student;

INSERT INTO Student(studentName, studentAge, studentLocation) VALUES
	('Paul',20,default); 
SELECT * FROM Student;

INSERT INTO Student(studentName, studentAge) VALUES
	('Eric',20); 
SELECT * FROM Student;

INSERT INTO Student(studentName, studentAge, studentLocation) VALUES
	('Peter',26,default),
    ('Kate',19,'Leeds'),
    ('Fred',39,'Bolton');
SELECT * FROM Student;

create database Grades;
use Grades;
create table stuGrades(
	studentID int primary key auto_increment,
    studentName varchar(20) not null,
    studentAge int check(studentAge>=18),
    studentGender varchar(6) not null,
    studentGrade int check(studentGrade>100) not null 
    );
    update table studentGrade int check(studentGrade<=100) not null;
    drop table stuGrades;
    
   
    create table stuGrades(
	studentID int primary key auto_increment,
    studentName varchar(20) not null,
    studentAge int check(studentAge>=18),
    studentGender varchar(6) not null,
    studentGrade int check(studentGrade<=100) not null 
    );
    
        insert into stuGrades(studentName, studentAge, studentGender, studentGrade) values
		('Paul Jill',18,'Male',75),
        ('Remi Happy',19,'Female',70),
        ('Mary Idris',18,'Female',83),
        ('Carol Browne',19,'Female',65),
        ('Femi Frank',18,'Male',80);
        
SELECT * FROM StuGrades;

create table StudentsTable;
use StudentsTable;

CREATE DATABASE World;
USE World;
 
CREATE TABLE Country(
	id INT PRIMARY KEY,
    name VARCHAR(10) NOT NULL
    );
 
CREATE TABLE City(
	cityId INT PRIMARY KEY,
    cityName VARCHAR(10) NOT NULL,
    countryId INT,
    FOREIGN KEY(countryId) REFERENCES Country(id)
);
use Country;
use City;

USE College;
SELECT * FROM Student;
 
UPDATE Student SET studentName='Matt' WHERE studentName='Bob';
 
SELECT * FROM Student;
 /* -- update any student record whose name is Mark but is younger than 40
-- change the student name to 'Henry' and age to '35' for any student whose Name is 'Matt'
		-- and location is not 'Manchester'*/
        
UPDATE Student SET StudentName='Oscar'
	WHERE studentName='Mark' AND studentAge>19;
 
SELECT * FROM Student;
set sql_safe_updates=0;

UPDATE Student SET StudentName='Henry', studentAge=35
	where studentName='Matt' and studentLocation<>'Manchester';

SELECT * FROM Student;

/* ALTER TABLE Command,
DELETE, DROP, Truncate -*/