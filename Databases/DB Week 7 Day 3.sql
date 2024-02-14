CREATE DATABASE newWorld;
USE newWorld;
CREATE TABLE Country
	(
		Code INT PRIMARY KEY,
        Name VARCHAR(25) NOT NULL,
        Continent VARCHAR(20),
        Population INT NULL,
        Capital INT
	);
CREATE TABLE City
	(
		ID INT PRIMARY KEY,
        Name VARCHAR(10) NOT NULL,
        CountryCode INT,
        Population INT
	);
CREATE TABLE CountryLanguage
	(
		CountryCode INT,
        Language VARCHAR(20) NOT NULL,
        IsOfficial BOOLEAN, 
        Percentage DECIMAL(4,2),
        PRIMARY KEY(CountryCode,Language)
	);
ALTER TABLE Country ADD FOREIGN KEY(Capital)
	REFERENCES City(ID);
ALTER TABLE City ADD FOREIGN KEY(CountryCode)
	REFERENCES Country(Code);
ALTER TABLE CountryLanguage ADD FOREIGN KEY(CountryCode)
	REFERENCES Country(Code);
describe schema newWorld;








create database Publishings;
use Publishings;
create table Article
	(
		ID int primary key not null auto_increment,
        Title varchar(30) not null,
        Text varchar(120),
        PublishStatus varchar(10) not null,
        Topic varchar(15),
        Author varchar(30) not null,
        PublicationDate date
	);
create table Topic
	(
		name varchar(15) primary key,
        Description varchar(120)
	);
create table Author
	(
		UserName varchar(10) primary key,
        DisplatName varchar(30)
	);
create table Course
	(
		ShortName varchar(20) primary key,
        FullName varchar(40)
	);
create table Relevant_For
	(
		ArticleID int not null,
        Course varchar(20),
        primary key(ArticleID,Course)
	);
ALTER TABLE Article ADD FOREIGN KEY(Topic)
	REFERENCES Topic(Name);
ALTER TABLE Article ADD FOREIGN KEY(Author)
	REFERENCES Author(UserName);
ALTER TABLE Relevant_For ADD FOREIGN KEY(ArticleID)
	REFERENCES Article(ID);
ALTER TABLE Relevant_For ADD FOREIGN KEY(Course)
	REFERENCES Course(ShortName);
    
    use NewWorld;
    drop tables article, author, course, relevant_for, topic;
    use Publishings;
    drop table countryLanguage;
    
    
    
create database Human_Resources;
use Human_Resources;

create table Employee
	(
		FName varchar(10) not null,
        Minit varchar(2),
        Lname varchar(30) not null,
        Ssn varchar(9) primary key not null, -- I am expecting alphanumeral characters
        Bdate date not null,
        Address varchar(50) not null,
        Sex varchar(6),
        Salary int check(Salary>=0),
        Super_ssn varChar(20) not null, -- I am expecting alphanumeral characters for international employees which must be inputted
        Dno int
	);
create table Department
	(
		Dname varchar(30) not null,
        Dnumber int primary key not null,
        Mgr_Ssn varchar(20),
        Mgr_start_date date
	);
create table Dept_Locations
	(
		Dnumber int,
        Dlocation varchar(50),
        primary key(Dnumber, Dlocation)
	);
create table Project
	(
		Pname varchar(20),
        Pnumber int primary key not null,
        Plocation varchar(30),
        Dnum int
	);
create table Works_On
	(
		Essn int primary key,
        Pno int,
        hours decimal(4,2)
	);
create table Dependent
	(
		Essn varchar(20),
        Dependent_Name varchar(30),
        primary key(Essn, Dependent_Name),
        Sex Varchar(6),
        Bdate date,
        Relationship varchar(20)
	);

ALTER TABLE Employee ADD FOREIGN KEY(Super_ssn)
 	REFERENCES Employee(Ssn);  
ALTER TABLE Employee ADD FOREIGN KEY(Dno)
 	REFERENCES Department(Dnumber);  
ALTER TABLE Department ADD FOREIGN KEY(Mgr_Ssn)
 	REFERENCES Employee(Ssn);  
ALTER TABLE Dept_Locations ADD FOREIGN KEY(Dnumber)
 	REFERENCES Department(Dnumber);
ALTER TABLE Project ADD FOREIGN KEY(Dnum)
 	REFERENCES Department(Dnumber);
ALTER TABLE Works_On ADD FOREIGN KEY(Essn)
 	REFERENCES Employee(Ssn);  
ALTER TABLE Works_On drop column Essn;
drop TABLE Works_On;
create table Works_On
	(
		Essn varchar(20),
        Pno int,
		primary key (Essn, Pno),
        hours decimal(4,2)
	);
ALTER TABLE Works_On ADD FOREIGN KEY(Essn)
 	REFERENCES Employee(Ssn); 
ALTER TABLE Works_On ADD FOREIGN KEY(Pno)
 	REFERENCES Project(Pnumber);
ALTER TABLE Dependent ADD FOREIGN KEY(Essn)
 	REFERENCES Employee(Ssn); 
    
    
