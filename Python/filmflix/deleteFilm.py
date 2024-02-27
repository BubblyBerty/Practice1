from connect import *
 
def delete_afilm():
    try:
        #check if the song id exists
        filmID  = int(input("Enter the filmID to delete a record : "))
        dbCursor.execute(f"SELECT * FROM tblFilms WHERE filmID = {filmID}")
 
        row = dbCursor.fetchone()
 
        if row == None:
            print(f"filmID {filmID} does not exist")
        else:
            dbCursor.execute("DELETE FROM tblFilms WHERE filmID = ?", (filmID,))
            dbCon.commit()
            print(f"The record {filmID} deleted from the films table")
    
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
    delete_afilm()