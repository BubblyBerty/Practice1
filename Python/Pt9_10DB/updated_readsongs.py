from connect import *
 
def all_songs():
    try:
        # try to execute the sql statement below
        
        """ The following line of code:
        allsongs = dbCursor.execute("SELECT * FROM songs").fetchall()
        can be used instead of:
        dbCursor.execute("SELECT * FROM songs")
      
        # allsongs = dbCursor.fetchall() # Fetchall fetches all the rows from the table """
         
        # fetch all selected data(rows)
        allsongs = dbCursor.execute("SELECT * FROM songs").fetchall()
        if allsongs:
            # format output
            print("SongID | Title | Artist | Genre")
            print("*" * 50)
 
            for aSong in allsongs:
                print(f"{aSong[0]:<7} | {aSong[1]:<10} | {aSong[2]:<7} | {aSong[3]:<5}")
        else:
            print("No songs found in the songs table")

    except sql.ProgrammingError as pe:
        print(f"Not working because: {pe}")
    except sql.OperationalError as oe:
        print(f"Failed because: {oe}")
    except sql.Error as e:
        print(f"This error occurs: {e}")    
    except sql.ValueError as ve:
        print(f"Not working because: {ve}")
    finally:
        print("DB operation performed")

# Because the menu.py file lists the various files to import this prevents the files to be automatically cascaded and invoked.
if __name__ == "__main__":         
    all_songs()
 