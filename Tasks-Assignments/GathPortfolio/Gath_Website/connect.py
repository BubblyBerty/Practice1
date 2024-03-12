import sqlite3 as sql # import the sqlite3 module and assigned an alias
 
try:
    # to use the sqlite module we start by creating a variable(object) to hold the path to the folder
    with sql.connect("./Bootcamp_GitHub/Tasks-Assignments/GathPortfolio/Gath_Website/dfe5w4.db") as dbCon:
        # use the dbCon variable to manipulate(sql queries) tables in the datbase
        dbCursor = dbCon.cursor() # use to execute sql statement
except sql.OperationalError as e: # raise sqlerror
    # handle the exception
    print(f"Connection failed: {e}")

