-- SQLite
CREATE DATABASE filmflix;

USE filmflix;

CREATE TABLE tblFilms
	(
		filmID INT NOT NULL,
        Title TEXT NOT NULL,
        yearReleased INT,
        rating TEXT,
        duration INT,
        genre TEXT,
        PRIMARY KEY AUTOINCREMENT (filmID)      
	);