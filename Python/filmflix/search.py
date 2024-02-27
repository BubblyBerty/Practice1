from connect import *

def search_film():
        try:
            #ask for the field to search by
            field = input("Search by filmID, Title, Year of Release, Rating, Duration, Genre: ")

            if field.upper() == "FILMID":
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

            elif field in ["Title", "yearRelease", "Rating", "Duration", "Genre"]:
                # search by title, yearRelease, rating, duration or genre
                strInput= input(f"Enter the value for the field {field}: ")
                #SELECT * FROM tblFilms WHERE "Title", "Year", "Rating", "Duration", "Genre"  LIKE "Shin" or "2001" or "4 stars" or Horror?

                dbCursor.execute(f"SELECT * FROM tblFilms WHERE {field} LIKE '%{strInput}%'")
                # dbCursor.execute(f"SELECT * FROM songs WHERE {field} LIKE '", (f"'%{strInput}%"))
                rows = dbCursor.fetchall()


                if not rows:
                    print(f"No record with field {field} matching {strInput} ")

                                    # display all matched records for the search field
                elif field == "Title" or field == "Artist":
                    for records in rows:
                        print(records)
                else:
                
                    if field == "Genre":
                        gInput2 = input(f"Enter the Second value for  {field}")
                        dbCursor.execute(f"SELECT * FROM songs WHERE Genre = '{strInput}' OR Genre = '{gInput2}' ")

                        genreTypes = dbCursor.fetchall()
                        for gType in genreTypes:
                            print(gType)
                    else:
                        print(f" No match found for {strInput} or {gInput2} ")

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

"""From James - in v1 search, i changed:
 
dbCursor.execute("SELECT * FROM songs WHERE ? LIKE ?", (field,strInput))
 
to:
 
dbCursor.execute(f"SELECT * FROM songs WHERE {field} LIKE ?", ('%' + strInput + '%',))
 
and now the search is fully working for me"""