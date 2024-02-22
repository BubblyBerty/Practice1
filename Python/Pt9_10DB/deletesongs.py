from connect import *
 
def delete_asong():
    try:
        #check if the song id exists
        songID  = int(input("Enter the SongID to delete a record : "))
        dbCursor.execute(f"SELECT * FROM songs WHERE SongID = {songID}")
 
        row = dbCursor.fetchone()
 
        if row == None:
            print(f"SongID {songID} does not exist")
        else:
            dbCursor.execute("DELETE FROM songs WHERE SongID = ?", (songID,))
            dbCon.commit()
            print(f"The record {songID} deleted from the songs table")
    
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
    delete_asong()