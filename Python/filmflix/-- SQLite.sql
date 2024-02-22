-- SQLite
CREATE DATABASE filmflix

USE filmflix;

CREATE TABLE tblFilms
	(
		filmID INT NOT NULL AUTOINCREMENT,
        Title VARCHAR(50) NOT NULL,
        yearReleased INT,
        rating VARCHAR(50),
        duration INT,
        genre VARCHAR(25),
        PRIMARY KEY (filmID)      
	);
