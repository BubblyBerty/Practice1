from connect import *
 
def update_selected_fields():
    try:
 
        filmID  = int(input("Enter the filmID of the record to update: "))
        dbCursor.execute(f"SELECT * FROM tblFilms WHERE filmID = {filmID}")

        row = dbCursor.fetchone()
        if row == None: #None is a single object that checks if a value is present
            print(f"No record with filmID {filmID} exists")

        else:
            # print the details of the record to be updated to allow user to access data within it
            print(f"The following is the record ({filmID}) that you have selected to be updated in the films table")
            print("filmID | Title..........................| Year | Rating.............................................| Duration | Genre...............")
            print("-" * 133)
 
            
            print(f"{row[0]} | {row[1]:<30} | {row[2]} | {row[3]:<50} | {row[4]} | {row[5]:<20}")

        # get the values to update the respective fields
        
        sTitle = input("Enter film Title: ")
        sDate = int(input("Enter film release date: "))
        sRating = input("Enter rating and brief comment: ")
        sDuration = int(input("Enter duration of film in minutes: "))
        sGenre = input("Enter film Genre: ")
 
        # execute the sql statment to update respective fields
        dbCursor.execute("UPDATE tblFilms SET Title = ?, yearReleased = ?, rating = ?, duration = ?, genre = ? WHERE filmID = ?", (sTitle,sDate,sRating,sDuration,sGenre,filmID))
        dbCon.commit()
 
        # print the details of the updated record
        print(f"The record {filmID} updated in the films table")
            
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
    update_selected_fields()

