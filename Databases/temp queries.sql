-- all departments and their locations
-- display all projects and their department name
-- display all employees and their dependent names

-- ----------------------
SELECT * FROM Trainer RIGHT JOIN instructor
	ON instructorName=trainerName;
 
 
-- display all countries and thier capital city name
use world;
SELECT c.Name 'Country Name', ci.Name FROM 
Country c INNER JOIN City  ci
ON c.Capital=ci.ID ORDER BY c.Name;
 
 
SELECT Country.Name 'Country Name', City.Name FROM Country INNER JOIN City 
ON Capital=ID ORDER BY Country.Name;
 
-- all departments and thier locations
-- display all projects and thier department name
-- display all employees and their dependent names