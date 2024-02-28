from connect import *

def search_film():
    try:
        #ask for the field to search by
        field = int(input("Select number for field you wish to search by: (1: filmID, 2:Title, 3: Year of Release, 4: Rating, 5: Duration, 6: Genre)"))

        if field == None or field == "" or field == 0:
            print("Unable to search - error in user input")
        elif field == 1:
            # search by filmID
            idInput = int(input("Enter filmID: "))
            dbCursor.execute("SELECT * FROM tblFilms WHERE filmID = ?", (idInput,))
            row = dbCursor.fetchone()

            if row is None:
                # if the filmID entered is not in the table 
                print(f"No record with filmID {idInput} exists")
            else:
                # if the filmID entered exists in the table 
                for aFilm in row:
                    print(aFilm)

        elif field == 2:
            titleInput= input("Enter the title: ")
            dbCursor.execute(f"SELECT * FROM tblFilms WHERE Title LIKE '%{titleInput}%'")
            row = dbCursor.fetchall()

            if row is None:
                # if the filmID entered is not in the table 
                print(f"No record(s) with title like {titleInput} exist")
            else:
                # if the filmID entered exists in the table 
                for aFilm in row:
                    print(aFilm)

        elif field == 3:
            startYear = int(input("Enter start year for the range of release: "))
            endYear = int(input("Enter end year for the range of release: "))
            dbCursor.execute(f"SELECT * FROM tblFilms WHERE yearReleased BETWEEN {startYear} AND {endYear} ORDER BY yearReleased")
            row = dbCursor.fetchall()

            if row is None:
                # if the filmID entered is not in the table 
                print(f"No record(s) with released between {startYear} and {endYear} exist")
            else:
                # if the filmID entered exists in the table 
                for aFilm in row:
                    print(aFilm)
        elif field == 4:
            ratingInput= input("Enter the rating and brief comment: ")
            dbCursor.execute(f"SELECT * FROM tblFilms WHERE rating LIKE '%{ratingInput}%'")
            row = dbCursor.fetchall()

            if row is None:
                # if the filmID entered is not in the table 
                print(f"No record(s) of rating - {ratingInput} - exist")
            else:
                # if the filmID entered exists in the table 
                for aFilm in row:
                    print(aFilm)

        elif field == 5:
            startDuration = int(input("Enter start time in minutes for the range of film length: "))
            endDuration = int(input("Enter end time in minutes for the range of film length: "))
            dbCursor.execute(f"SELECT * FROM tblFilms WHERE duration BETWEEN {startDuration} AND {endDuration} ORDER BY duration")
            row = dbCursor.fetchall()

            if row is None:
                # if the filmID entered is not in the table 
                print(f"No record(s) between {startDuration} and {endDuration} minutes exist")
            else:
                # if the filmID entered exists in the table 
                for aFilm in row:
                    print(aFilm)

        elif field == 6:
            genreInput= input("Enter the genre: ")
            dbCursor.execute(f"SELECT * FROM tblFilms WHERE genre LIKE '%{genreInput}%'")
            row = dbCursor.fetchall()

            if row is None:
                # if the filmID entered is not in the table 
                print(f"No record(s) with genre of {genreInput} exist")
            else:
                # if the filmID entered exists in the table 
                for aFilm in row:
                    print(aFilm)

        else: # where the search input is not  SongID, Title, Artist, Genre
            print(f"Search field {field} invalid !") 
    except sql.OperationalError as e:
        print(f"Failed because: {e}")
    except sql.ProgrammingError as pe:
        print(f"Not working because: {pe}")
    finally:
        print("DB operation performed")

# Because the menu.py file lists the various files to import this prevents the files to be automatically cascaded and invoked.
if __name__ == "__main__":            
    search_film()
