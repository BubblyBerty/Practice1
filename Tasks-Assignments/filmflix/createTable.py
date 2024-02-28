from connect import * # import all variables/functions from the connect.py file

dbCursor.execute(""" 
CREATE TABLE tblFilms
	(
		"filmID" INTEGER NOT NULL,
        "Title" TEXT NOT NULL,
        "yearReleased" INT,
        "rating" TEXT,
        "duration" INT,
        "genre" TEXT,
        PRIMARY KEY ("filmID" AUTOINCREMENT)      
	)""")

