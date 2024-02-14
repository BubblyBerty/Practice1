CREATE DATABASE UnionDB;
USE UnionDB;
CREATE TABLE Instructor(
	instructorId INT PRIMARY KEY,
    instructorName VARCHAR(15) NOT NULL);
CREATE TABLE Trainer(
	trainerId INT PRIMARY KEY,
    trainerName VARCHAR(20) NOT NULL,
    trainerAge INT);
INSERT INTO Instructor VALUES(2,'Mark'),(1,'Abdul'),(3,'Matt'),(4,'Sandra');
INSERT INTO Trainer(trainerId, trainerName, trainerAge) VALUES 
	(1,'Abdul',35),(2,'Zak',28),(3,'Waqas',38);
SELECT instructorName FROM Instructor
union ALL
SELECT trainerName FROM Trainer;
/* SELECT * FROM JanOrder 
UNION ALL
SELECT * FROM FebOrder;   - WON'T WORK */

SELECT CONCAT(e.FNAME,' ',e.LNAME) AS 'Employee', CONCAT(m.FNAME,' ',m.LNAME) AS 'Manager'
FROM Employee e LEFT JOIN Employee m ON m.SSN=e.SUPERSSN;



-- ----------------------------------------


-- -----------------------------------------------

-- display all employees names and their department names
/*
SELECT Employee.FNAME, Employee.LNAME, department.DNAME 
	FROM Employee INNER JOIN department ON employee.DNO=department.DNUMBER;
 
SELECT Employee.FNAME, Employee.LNAME, department.DNAME 

	FROM Employee INNER JOIN department ON employee.DNO=department.DNUMBER;
 
-- ----------------------

SELECT * FROM Trainer RIGHT JOIN instructor

	ON instructorName=trainerName; 
    */
    
    
 
 
 
 
 
 
