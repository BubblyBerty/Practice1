/* What is CRUD? CRUD is an acronym that comes from the world of computer programming and refers to the four functions that are considered necessary to implement a persistent storage application: create, read, update and delete.*/
use company;
select * from employee;

select * from company.employee; -- Can be used without the USE command
select * from publishings.article; -- Can be used to access a different schema

SELECT * FROM Employee WHERE Fname='Jennifer';
SELECT * FROM Employee WHERE SEX='F' AND Salary>25000;
SELECT * FROM employee
	WHERE SEX = 'F' AND Salary > 25000 LIKE "jen_"; -- LIKE isn't working here
    
-- display all employees who receive more than 30000 salary;
-- display all male employees who receive less than 30000 salary;
-- display all male and female employees who receive less than 30000 salary;

select * from employee where salary>30000;
select * from employee where sex='m' and salary<30000;
select * from employee where salary<30000;

[10:29 AM] Zakirullah Pardis
-- LIMIT
-- limit number of row to be displayed
-- OFFSET 
-- skip rows
SELECT * FROM Employee LIMIT 3;
SELECT * FROM Employee LIMIT 3 OFFSET 4;
-- Sorting data in MySQL
-- By default data will be sorted by Primary key column in MySQL
	-- from A-Z or from lowest value to highest value
-- Ascending - from A - Z = lowest to highest value
-- Descending -from Z - A = highest to lowest value
-- ORDER BY -- is used to sort data
SELECT * FROM Employee ORDER BY FNAME ASC;
SELECT * FROM Employee ORDER BY Salary DESC;
SELECT * FROM Employee ORDER BY FNAME ASC, LNAME ASC;
SELECT * FROM Employee ORDER BY FNAME ASC, LNAME DESC;

-- select an employee who is receiving highest salary
-- select an employee who is receiving  lowest salary
-- select top five employees who are receiving highest salary
-- select female employee who is receiving highest salary
-- select male employee who is receiving lowest salary

select * from employee;
/*
SELECT fname, lname FROM employee where max(salary);
SELECT max(salary) FROM employee;
WHERE condition;*/

SELECT * FROM Employee WHERE SALARY IS NOT NULL ORDER BY SALARY ASC LIMIT 1; -- NULLS are listed higher than values

select * from employee where fname='john' or fname='franklin' or fname='ahmad';
select * from employee where fname in('john','franklin','ahmad');


-- ------ Aggregate Functions --------------------------
/*
AVG(), MAX(), MIN(), SUM(), COUNT()
*/

select count(*) as 'Female Employees' from employee where sex='f';
-- MySQL Alias
SELECT AVG(SALARY) AS 'Average Salary' FROM Employee;
SELECT MAX(SALARY) AS 'Max Salary' FROM Employee;
SELECT Fname AS 'First Name', Lname AS 'Last Name' FROM Employee;


-- Display total number of employees
-- display maximum and minimum salary that you pay to your employee
-- display maximum, minimum salary for female employees
-- count how many male employees do you have in employee table
  
SELECT COUNT(*) as 'Number of Employees' FROM Employee;
select max(salary) as 'Maximum Salary' from employee;
select min(salary) as 'Minimum Salary' from employee;
select max(salary) as 'Female Maximum Salary' from employee where sex='f';
select min(salary) as 'Female Minimum Salary' from employee where sex='f';
select count(sex) as 'Total Male Employees' from employee where sex='m';

-- Research DISTINCT command (removes duplicated data)

select salary from employee;
select distinct salary from employee;


-- !Recap
USE Company;
-- 1. To find How many records are in Employee table. -- Erica
	SELECT  COUNT(*) FROM Company.Employee;
-- 2. To find the minimum salary an employee is receiving. --  Tanzina
	SELECT MIN(Salary) FROM Employee WHERE Salary IS NOT NULL;
-- 3. To find the total of all salaries in Employee table. -- James
	SELECT SUM(salary) AS total_salary FROM employee;
-- 4. To find the total of salary for those Employees who's SEX is M. -- Jason
	SELECT SUM(Salary) FROM Employee WHERE SEX='M';
-- 5. To find minimum and maximum salary in Employee table. -- Nikita
	SELECT MIN(Salary) AS 'Min Salary', MAX(Salary) AS 'Max Salary' FROM Employee;
-- 6. To find all the employees sort it from lowest to highest salary. -- Robert
	SELECT * FROM Employee ORDER BY Salary ASC;
-- 7. To find all the employee ordered by Sex and then by first Name. -- Fatinah
	SELECT * FROM Employee ORDER BY SEX ASC, Fname ASC;
-- 8. To find the first two employees. -- Fisayo
	SELECT * FROM Employee LIMIT 2;
-- 9. To find the first Name and Last Name for all employee. -- Nirmala
	SELECT Fname, Lname FROM Employee;
-- 10. To find all the different Salary from the Employee tables. -- Johanna
	SELECT DISTINCT Salary FROM Employee;
  -- ------------------------------------------------  
--  -- ------- BETWEEN operator  ---------------------------
/* selects values within a given range. The values can be numbers, text, or 
dates. The BETWEEN operator is inclusive: begin and end values are included */
select * from employee where salary between 25000 and 40000;
select * from employee where salary>25000 and salary<40000;

-- --- GROUP BY ------------------------------------------------------------------------
	-- groups rows that have the same values into summary rows
-- How many employees are working in each department
	-- Group based on the same department
-- How many male and female employees are working in your organization
SELECT COUNT(*) AS 'Num of Employees', SEX FROM Employee 
	WHERE SEX IS NOT NULL GROUP BY SEX;
    
    -- Display all employeess who are borne on/between 1960-01-01 and 1980-01-01;
-- Display all employeess who are not borne on/between 1960-01-01 and 1980-01-01;
-- Display all salaries and number of employees who are receiving that salary.
-- Write a query which select highest salary for each gender
-- Display total amount of salaries for both male and female employees.

select * from employee where bdate between '1960-01-01' and '1980-01-01';
select * from employee where year(bdate) between 1960 and 1980; -- using year function (note quote marks not required
select * from employee where bdate<='1960-01-01' and bdate<='1980-01-01';
select * from employee where year(bdate) not between 1960 and 1980; -- using year function (note quote marks not required
SELECT distinct salary AS 'Salaries Grouped', count(*) as 'Num Employees' FROM Employee 
	WHERE salary IS NOT NULL GROUP BY salary;
    

SELECT distinct max(salary) AS 'Max Salaries', count(*) as 'Num Employees' FROM Employee 
	WHERE salary IS NOT NULL GROUP BY salary;
    
-- Display all employeess who are borned on/between 1960 and 1980;
	SELECT * FROM Employee WHERE BDATE BETWEEN '1960-01-01' AND '1980-01-01';
    SELECT * FROM Employee WHERE YEAR(BDATE) BETWEEN 1960 AND 1980;
-- Display all employeess who are not borned on/between 1960-01-01 and 1980-01-01;
SELECT * FROM Employee WHERE YEAR(BDATE) NOT BETWEEN 1960 AND 1980;
-- Display all salaries and number of employees who are receiving that salary.
	SELECT COUNT(*), SALARY FROM Employee WHERE SALARY IS NOT NULL GROUP BY SALARY;
-- Write a query which select highest salary for each gender
	SELECT MAX(SALARY), SEX FROM Employee WHERE SEX IS NOT NULL GROUP BY SEX;
-- Display total amount of salaries for both male and female employees.
    SELECT SUM(SALARY), SEX FROM Employee WHERE SEX IS NOT NULL GROUP BY SEX;
    
-- SELECT all the Employees whose Name start with 'J'  
SELECT * FROM Employee WHERE FNAME LIKE 'J%';
SELECT * FROM Employee WHERE FNAME LIKE 'J%n';
 
SELECT * FROM Employee WHERE FNAME LIKE 'j____%';

-- full name of employee
-- CONCAT() -- concatenate two or more columns

SELECT CONCAT(FNAME,' ',LNAME) AS 'Employee', Salary FROM Employee;
SELECT CONCAT(FNAME,' ',LNAME) AS 'Employee', CONCAT('£ ',Salary,' Per year') AS 'Salary'
	FROM Employee;
    
select * from employee where fname like binary 'j%'; -- will find any lower case j's

-- Display full Name of employee which has 'Rames' and the last character can be anything.
select concat(fname,' ',lname) as 'Full Name' from employee where concat(fname,' ',lname) like '%Rames%';

-- Select record of Employee who is born in 1965.
select * from employee where bdate between '1965-01-01' and '1965-12-31';

-- Display all employees who's first Name starts with A and ends with d.
select * from employee where fname like 'a%d';

-- Display all employees who's first Name start with J and does not ends with n.
select * from employee where fname like 'a%' and fname not like '%n';

-- display all employees who's first Name start with J and should be at least 5 characters 
select * from employee where fname like 'j____';

-- SELECT Employee who's full name start with 'Jennifer W';
select concat(fname,' ',lname) as 'Full Name' from employee where concat(fname,' ',lname) like 'jennifer w%';

-- Select an employee who's first name is 'Jennifer' but last name does not start with 'W' in lenght.
select fname from employee where fname='jennifer' and lname not like 'w%';
select fname, lname from employee order by fname asc; -- verifying visually that no records meet the conditions

-- SELECT Employee who's full name start with 'Jennifer W';
select concat(fname,' ',lname) as 'Employee' from employee where fname='jennifer' and lname like 'w%';

-- Select an employee who's first name is 'Jennifer' but last name does not start with 'W' // I obviously copied this line above with the typo "in lenght" added
    
