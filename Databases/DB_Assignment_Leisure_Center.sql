-- Leisure_Centre_Swimming_Pool

create database Leisure_Centre_Swimming_Pool;
use Leisure_Centre_Swimming_Pool;

/* Create the tables

•	Course (CourseID, Level, Sessions, Instructor, startDate, LessonTime)
•	Lessons (LessonID, CourseID, MemberID) 
•	Members (MemberID, Firstname, Surname, DOB, Address, City)
*/

create table Course
	(
		CourseID int primary key not null auto_increment,
        _Level int not null,
        Sessions varchar(2), -- I have worked on the basis of either 'AM' or 'PM' entities
        Instructor varchar(20),
        startDate date,
        LessonTime time
	);
create table Lessons
	(
		LessonID int primary key not null auto_increment,
        CourseID int, 
        MemberID int        
	);
create table Members
	(
		MembersID int primary key not null auto_increment,
        Firstname varchar(15),
        Surname varchar(20),
        DOB date,
        Address varchar(30),
        City varchar(15)
	);
 -- FOREIGN KEY REFERENCES Course(CourseID),   
 -- FOREIGN KEY (MemberID) REFERENCES Members(MembersID)       
use Leisure_Centre_Swimming_Pool;
ALTER TABLE Lessons ADD FOREIGN KEY  (CourseID)
	REFERENCES Course(CourseID);
ALTER TABLE Lessons ADD FOREIGN KEY (MemberID)
	REFERENCES Members(MemberID);
ALTER TABLE Lessons ADD FOREIGN KEY (MemberID)
	REFERENCES Members(MemberID);
alter table Members drop column MembersID;
alter table Members add column MemberID int primary key not null auto_increment;
select * from Course;
alter table Lessons drop column MemberID;
alter table Members add column MemberID int primary key not null auto_increment;
drop table Lessons;
create table Lessons
	(
		LessonID int primary key not null auto_increment,
        CourseID int, 
        MemberID int        
	);
INSERT INTO Course
VALUES	(CourseID, 1, 'AM', 'Bob Fleming', '2024-02-06', '09:00:00');
select * from Course;


INSERT INTO Course
VALUES	(CourseID, 1, 'AM', 'Erica Saunders', '2024-02-06', '10:00:00'),
	(CourseID, 2, 'AM', 'Bob Fleming', '2024-02-06', '10:30:00'),
	(CourseID, 2, 'AM', 'Erica Saunders', '2024-02-06', '11:30:00'),
	(CourseID, 3, 'PM', 'Bob Fleming', '2024-02-06', '12:30:00'),
	(CourseID, 3, 'PM', 'Erica Saunders', '2024-02-06', '13:00:00'),
	(CourseID, 3, 'PM', 'Bob Fleming', '2024-02-06', '14:30:00'),
	(CourseID, 3, 'PM', 'Erica Saunders','2024-02-06', '15:30:00'),
	(CourseID, 4, 'AM', 'Bob Fleming', '2024-02-07', '09:00:00'),
	(CourseID, 4, 'AM', 'Erica Saunders', '2024-02-07', '11:30:00'),
	(CourseID, 4, 'PM', 'Burt Buchanan', '2024-02-08', '09:00:00'),
	(CourseID, 4, 'PM', 'Rosemary Symthe', '2024-02-08', '11:30:00');

INSERT INTO Lessons
VALUES	(LessonID, 1, 100024);

		(102, 2, 100020),
        (201, 3, 100114),
		(202, 4, 110325),
		(301, 5, 100523),
		(302, 6, 100124),
		(303, 7, 100026),
		(304, 8, 100014),
		(401, 9, 100024),
		(402, 10, 100024),
		(403, 11, 100024),
		(404, 12, 100024);











