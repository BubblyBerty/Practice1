from connect import *
 
def update_songs():
    try:
        # SongID is primary key field
 
        songID = int(input("Enter the SongID to update a record: "))
        dbCursor.execute(f"SELECT * FROM songs WHERE SongID = {songID}")
 
        #The fetchone fetches a unique(one) record
        row = dbCursor.fetchone()
        #None is a single object to check if a value is present
        if row == None:
            print(f"No record with the SongID {songID} exists")
        else:
            fieldname = input("Enter the field (Artist or Title or Genre) ").title()
            fieldValue =input(f"Enter the value for {fieldname}: ")
           
            dbCursor.execute(f"UPDATE songs SET {fieldname} = ? WHERE SongID = ?",(fieldValue,songID))
            dbCon.commit()
            print(f"{songID} Updated")
    
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
        update_songs()