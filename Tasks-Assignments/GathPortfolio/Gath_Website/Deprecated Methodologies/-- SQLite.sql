-- SQLite
CREATE DATABASE scales;

USE scales;

CREATE TABLE scalesModes
(
	ScaleID INT NOT NULL,
    MatchPercent FLOAT,
    ScaleName VARCHAR(45),
    ScaleKey VARCHAR(2),
    Note1 VARCHAR(2),
    Note2 VARCHAR(2),
	Note3 VARCHAR(2),
	Note4 VARCHAR(2),
    Note5 VARCHAR(2),
    Note6 VARCHAR(2),
    Note7 VARCHAR(2),
    Note8 VARCHAR(2),
    Chord1 VARCHAR(39),
    Chord2 VARCHAR(11),
	Chord3 VARCHAR(26),
	Chord4 VARCHAR(26),
    Chord5 VARCHAR(26),
    Chord6 VARCHAR(21),
    Chord7 VARCHAR(26),
    Chord8 VARCHAR(9),
    PRIMARY KEY AUTOINCREMENT (ScaleID)
);
