import sqlite3 as sql # import the sqlite3 module and assigned an alias
 
try:
    # to use the sqlite module we start by creating a variable(object) to hold the path to the folder
    with sql.connect("Bootcamp_GitHub/Tasks-Assignments/GathPortfolio/Gath_Website/dfe5w4.db") as dbCon:
    #with sql.connect("Python/filmflix/filmflix.db") as dbCon:
        # use the dbCon variable to manipulate(sql queries) tables in the datbase
        dbCursor = dbCon.cursor() # use to execute sql statement
except sql.OperationalError as e: # raise sqlerror
    # handle the exception
    print(f"Connection failed: {e}")
        

                     
#    create database scales;
#   use scales;
#  create table scalesModes (
#        ScaleID int not null auto_increment,
#        MatchPercent float,
#        ScaleName varchar(45),
#        ScaleKey varchar(2),
#        Note1 varchar(2),
#        Note2 varchar(2),
#        Note3 varchar(2),
#        Note4 varchar(2),
#        Note5 varchar(2),
#        Note6 varchar(2),
#        Note7 varchar(2),
#        Note8 varchar(2),
#        Chord1 varchar(39),
#        Chord2 varchar(11),
#        Chord3 varchar(26),
#        Chord4 varchar(26),
#        Chord5 varchar(26),
#        Chord6 varchar(21),
#        Chord7 varchar(26),
#        Chord8 varchar(9),
#        primary key (ScaleID)
#    )
#    select * from scalesModes
#
#    insert into scalesModes (ScaleID, MatchPercent, ScaleName, ScaleKey, Note1, Note2, Note3, Note4, Note5, Note6, Note7, Note8, Chord1, Chord2, Chord3, Chord4, Chord5, Chord6, Chord7, Chord8) values ('Bebop Dominant','C','C','D','E','F','G','A','Bb','B','C maj','D min','E dim','F alt','*C sus7','*B min7','*C7','B dim') 
#    rtfolio/Gath_Website/dfe5w4.db") as dbCon:
#            # use the dbCon variable to manipulate(sql queries) tables in the datbase
#            dbCursor = dbCon.cursor() # use to execute sql statement
#    except sql.OperationalError as e: # raise sqlerror
        # handle the exception
#        print(f"Connection failed: {e}")



