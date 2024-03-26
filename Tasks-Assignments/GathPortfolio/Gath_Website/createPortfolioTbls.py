from connect import * # import all variables/functions from the connect.py file

#	dbCursor.execute(""" 
#	CREATE TABLE "scalesModes" (
#		"scaleID" INTEGER NOT NULL UNIQUE,
#		"ScaleName" TEXT,
#		"key" CHAR(2),
#		"ascent1" CHAR(2),
#		"ascent2" CHAR(2),
#		"ascent3" CHAR(2),
#		"ascent4" CHAR(2),              
#		"notesDescend" TEXT,
#		"intervals" TEXT,
#		PRIMARY KEY("scaleID" AUTOINCREMENT)
#	)""")


dbCursor.execute("""
CREATE DATABASE scales)
                 
                 
use scales;
create table scalesModes (
	ScaleID int not null auto_increment,
    MatchPercent float,
    ScaleName varchar(45),
    ScaleKey varchar(2),
    Note1 varchar(2),
    Note2 varchar(2),
	Note3 varchar(2),
	Note4 varchar(2),
    Note5 varchar(2),
    Note6 varchar(2),
    Note7 varchar(2),
    Note8 varchar(2),
    Chord1 varchar(39),
    Chord2 varchar(11),
	Chord3 varchar(26),
	Chord4 varchar(26),
    Chord5 varchar(26),
    Chord6 varchar(21),
    Chord7 varchar(26),
    Chord8 varchar(9),
    primary key (ScaleID)
)


insert into scalesModes (ScaleID, MatchPercent, ScaleName, ScaleKey, Note1, Note2, Note3, Note4, Note5, Note6, Note7, Note8, Chord1, Chord2, Chord3, Chord4, Chord5, Chord6, Chord7, Chord8) values ('Bebop Dominant','C','C','D','E','F','G','A','Bb','B','C maj','D min','E dim','F alt','*C sus7','*B min7','*C7','B dim') 

