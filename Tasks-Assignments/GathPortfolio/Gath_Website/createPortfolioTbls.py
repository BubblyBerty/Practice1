from connect import * # import all variables/functions from the connect.py file

dbCursor.execute(""" 
CREATE TABLE "scales-modes" (
	"scaleID" INTEGER NOT NULL UNIQUE,
	"ScaleName" TEXT,
	"key" CHAR(2),
	"ascent1" CHAR(2),
    "ascent2" CHAR(2),
    "ascent3" CHAR(2),
    "ascent4" CHAR(2),              
    "notesDescend" TEXT,
    "intervals" TEXT,
	PRIMARY KEY("scaleID" AUTOINCREMENT)
)""")

# ...............................
dbCursor.execute("""
CREATE TABLE "songs" (
	"SongID"	INTEGER NOT NULL UNIQUE,
	"Title"	TEXT,
	"Artist"	TEXT,
	"Genre"	TEXT,
	PRIMARY KEY("SongID" AUTOINCREMENT)
)""")
# ......... Create the table(s) with the foreigh keys last..................
dbCursor.execute("""
  CREATE TABLE "downloads" (
	"DownlID"	INTEGER NOT NULL UNIQUE,
	"SongID"	INTEGER,
	"MemberID"	INTEGER,
	"Date"	TEXT,
	PRIMARY KEY("DownlID" AUTOINCREMENT),
	FOREIGN KEY("SongID") REFERENCES "songs"("SongID"),
	FOREIGN KEY("MemberID") REFERENCES "members"("MemberID")
)""")
