from connect import *
 
def update_selected_fields():
    try:
        sFilmID  = int(input("Enter the filmID of the record to update: "))
        dbCursor.execute(f"SELECT * FROM tblFilms WHERE filmID = {sFilmID}")     

        aFilm = dbCursor.fetchone()

        # for sFilmID in aFilm:
        if aFilm == None or aFilm == "": #None is a single object that checks if a value is present
            print(f"No record with filmID {sFilmID} exists")
        elif aFilm:
            # print the details of the record to be updated to allow user to access data within it
            print(f"The following is the record that you have selected to be updated in the films table:\n")

            # format output
            print("filmID | Title..........................| Year | Rating.............................................| Duration | Genre...............")
            print("-" * 133)    
            print(f"{aFilm[0]:>6} | {aFilm[1]:<30} | {aFilm[2]} | {aFilm[3]:50} | {aFilm[4]:>8} | {aFilm[5]:<21}")

            print("\nPress 0 to skip either Year or Duration and press enter to skip other fields:\n")
            # get the values to update the respective fields
            # Verify input of each variable to ensure skips are not invoked by sql.ValueError exception forcing closedown of file
            sTitle = input("Enter film Title (max 30 characters): ")
            if sTitle == '':
                print("Title has been skipped")
            else:
                print(f"New title: {sTitle}")
            sYear = int(input("Enter film release date: "))
            if sYear == 0:
                print("Year of Release has been skipped")
            else:
                print(f"New year of release: {sYear}")
            sRating = input("Enter rating and brief comment (max 50 characters): ")
            if sRating == '':
                print("Rating has been skipped")
            else:
                print(f"New rating: {sRating}")
            sDuration = int(input("Enter duration of film in minutes: "))
            if sDuration == 0:
                print("Duration has been skipped")
            else:
                print(f"New duration: {sDuration}")
            sGenre = input("Enter film Genre (max 21 characters): ")
            if sGenre == '':
                print(" has been skipped")
            else:
                print(f"New Genre: {sGenre}")
                
            # format output
            print("\nfilmID | Title..........................| Year | Rating.............................................| Duration | Genre...............")
            print("-" * 133)
        
            print(f"{sFilmID}:>6 | {sTitle}:<30 | {sYear} | {sRating}:50 | {sDuration}:>8 | {sGenre}:<21")

            # Verify changes
            sVerify = input("Do you want to continue with changes? (Y/N):")
            if sVerify.upper() == "Y":
                # continue
                # Create a match menu to update only those fields chosen
                for element in aFilm:
                    match element:
                        case [1]: # Title
                            if sTitle == "":
                                print(f"Title is {sTitle}")
                            else:
                                dbCursor.execute(f"UPDATE tblFilms SET Title = {sTitle}WHERE filmID = {sFilmID}")
                                dbCon.commit()
                                print("Title updated")
                        case [2]: # Year of release
                            if sYear == 0:
                                print(f"Year is {sYear}")
                            else:
                                dbCursor.execute(f"UPDATE tblFilms SET Year = {sYear} WHERE filmID = {sFilmID}")
                                dbCon.commit()
                                print("Year updated")
                        case [3]: # Rating
                            if sRating == "":
                                print(f"Rating is {sRating}")
                            else:
                                dbCursor.execute(f"UPDATE tblFilms SET Rating = {sRating} WHERE filmID = {sFilmID}")
                                dbCon.commit()
                                print("Rating updated")
                        case [4]: # Duration
                            if sDuration == 0:
                                print(f"Duration is {sDuration} minutes")
                            else:
                                dbCursor.execute(f"UPDATE tblFilms SET Duration = {sDuration} WHERE filmID = {sFilmID}")
                                dbCon.commit()
                                print("Duration updated")
                        case [5]: # Genre
                            if sGenre == "":
                                print(f"Genre is {sGenre}")
                            else:
                                dbCursor.execute(f"UPDATE tblFilms SET Genre = {sGenre} WHERE filmID = {sFilmID}")
                                dbCon.commit()
                                print("Genre updated")
                    
                    print(f"Film {sFilmID} Updated")
                    # format output
                    print("\nfilmID | Title..........................| Year | Rating.............................................| Duration | Genre...............")
                    print("-" * 133)
                    print(f"{sFilmID}:>6 | {sTitle}:<30 | {sYear} | {sRating}:50 | {sDuration}:>8 | {sGenre}:<21")
            elif sVerify.upper() == "N":
                print("You have chosen not to update this record")
            elif sVerify.upper() == "":
                print("You have chosen not to update this record")
            else: # Allows for verification to escape
                print("You have chosen not to update this record")
        else:
            print("ERROR: database not updated")
                
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