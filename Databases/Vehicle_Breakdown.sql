CREATE DATABASE Vehicle_Recovery;
USE Vehicle_Recovery;

CREATE TABLE Member
	(
		MemberID VARCHAR(10) PRIMARY KEY,
		MFName VARCHAR(20),
		MLName VARCHAR(20),
		MLoc VARCHAR(20)
	);
CREATE TABLE Vehicle
	(
		VehReg VARCHAR(10) PRIMARY KEY,
		VehMake VARCHAR(10),
		VehModel VARCHAR(10),
		MemberID VARCHAR(10),
        FOREIGN KEY (MemberID) REFERENCES Member(MemberID) ON DELETE SET NULL,
		FOREIGN KEY (MemberID) REFERENCES Member(MemberID) ON DELETE CASCADE
	);
CREATE TABLE Engineer
	(
		EngID INT PRIMARY KEY,
		EFName VARCHAR(20),
		ELName VARCHAR(20)
	);
CREATE TABLE Breakdown
	(
		BDID INT(10) PRIMARY KEY,
		VehReg VARCHAR(10),
		EngID INT,
		BDDATE DATE,
		BDTIME TIME,
		BDLoc VARCHAR(40),
        FOREIGN KEY (VehReg) REFERENCES Vehicle(VehReg) ON DELETE SET NULL,
		FOREIGN KEY (VehReg) REFERENCES Vehicle(VehReg) ON DELETE CASCADE,
		FOREIGN KEY (EngID) REFERENCES Engineer(EngID) ON DELETE SET NULL,
		FOREIGN KEY (EngID) REFERENCES Engineer(EngID) ON DELETE CASCADE
	);
INSERT INTO Member VALUES
	(1, 'Robert', 'Morris', 'LONDON'),
	(2, 'Eric', 'Shufflabaum', 'LONDON'),
	(3, 'Clementine', 'Oldbody', 'LONDON'),
	(4, 'Terrence', 'Long', 'MANCHESTER'),
	(5, 'Robina', 'Oswald', 'BIRMINGHAM');
INSERT INTO Vehicle VALUES
	('AC 204', 'BRUICK', 'ENTERPRISE', 2),
	('0W02KLX', 'FORD', 'PREFECT', 5),
	('FR15SLP', 'OLDSMOBILE', 'TUMBLER', 1),
	('XK 53XT', 'JAGUAR', 'XKE', 4),
	('BR21ABC', 'VAUXHALL', 'ASTRA', 3);
INSERT INTO Vehicle VALUES
	('OIEAS6789', 'FORD', 'ESCORT MK1', 2),
	('KL23MXR', 'MASDA', 'MXR', 5),
	('ER1 CITY', 'ROLLS-ROYC', 'PINK LADY', 3);
INSERT INTO Engineer VALUES
	(1, 'Sidney', 'FORD'),
	(2, 'Laurence', 'FOxe'),
	(3, 'Beverley', 'Chandler'); 
/* •	Breakdown table – 12 records
o	Have 2 breakdowns on the same day
o	Have 3 breakdowns in the same month
o	Have at least 3 vehicles that have broken down more than once
*/
INSERT INTO Breakdown VALUES
	(258, '0W02KLX', 2, '2023-12-14', '13:05:00', '182, East Hill SW18 2BE - o/s church'),
	(108, 'AC 204', 1, '2023-10-02', '07:46:00', 'op Glasgow Opera House in Henley Square'),
	(9,'FR15SLP', 3, '2023-10-03', '17:06:00', '24, Acasia Avenue, SW24 6HP'),
	(7,'XK 53XT', 2, '2023-10-03', '09:06:00', 'Coronation St - in the square'),
	(8,'FR15SLP', 3, '2023-10-03', '14:23:00', '127, Alton Towers, Manc MC5 2PP'),
	(202, 'AC 204', 1, '2023-11-12', '09:46:00', 'o/s New Scotland Yard'),
	(261,'FR15SLP', 3, '2024-01-05', '19:16:00', 'TELFORD'),
	(322,'BR21ABC', 2, '2024-01-15', '21:36:00', 'OXFORD'),
	(362, 'OIEAS6789', 3, '2024-01-25', '22:56:00', 'LONDON'),	
    (385,'BR21ABC', 2, '2024-15-05', '21:36:00', 'OLDHAM'),    
	(399,'BR21ABC', 2, '2024-15-05', '21:36:00', 'KNOCKHALT'),
	(401,'BR21ABC', 2, '2024-15-05', '21:36:00', 'GREENHITHE'),
	(420, 'AC 204', 'BRUICK', 'ENTERPRISE', 2),
	(422,'0W02KLX', 'FORD', 'PREFECT', 5),
	(457, 'FR15SLP', 'OLDSMOBILE', 'TUMBLER', 1),
	(458, 'XK 53XT', 'JAGUAR', 'XKE', 4),
	(460, 'BR21ABC', 'VAUXHALL', 'ASTRA', 3);

	(', 'FORD', 'ESCORT MK1', 2),
	('KL23MXR', 'MASDA', 'MXR', 5),
	('ER1 CITY', 'ROLLS-ROYC', 'PINK LADY', 3);
