from connect import *
 
def update_all_fields():
    try:
 
        songID  = int(input("Enter the SongID of the record to update: "))
        dbCursor.execute(f"SELECT * FROM songs WHERE SongID = {songID}")
 
        row = dbCursor.fetchone()
        if row == None: #None is a single object that checks if a value is present
            print(f"No record with SongID {songID} exists")
       
        else:
            # get the values to update the respective fields
            sTitle = input("Enter song Title: ")
            sArtist = input("Enter song Artist: ")
            sGenre = input("Enter song Genre: ")
 
            # execute the sql statment to update respective fields
            dbCursor.execute("UPDATE songs SET Title = ?, Artist = ?, Genre = ? WHERE SongID = ?", (sTitle,sArtist,sGenre,songID))
            dbCon.commit()
 
            # print the details of the updated record
            print(f"The record {songID} updated in the songs table")
            
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
    update_all_fields()