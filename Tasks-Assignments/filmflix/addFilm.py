from connect import *
 
def insert_film():
    try:
 
        # "filmID","Title","yearReleased", "Rating", "Duration", "Genre"
        # filmID is auto increment field no data is required as an input
        sTitle = input("Enter film Title: ")
        sDate = int(input("Enter film release date: "))
        sRating = input("Enter rating and brief comment: ")
        sDuration = int(input("Enter duration of film in minutes: "))
        sGenre = input("Enter film Genre: ")
 
        dbCursor.execute("INSERT INTO tblFilms VALUES(NULL,?,?,?,?,?)", (sTitle, sDate, sRating, sDuration, sGenre))
        dbCon.commit()
        print(f"{sTitle} inserted in the film table")
    except sql.OperationalError as e:
        print(f"Failed because: {e}")
    except sql.ProgrammingError as pe:
        print(f"Not working because: {pe}")
    except sql.Error as er:
        print(f"This error occurs: {er}")

if __name__ == "__main__":   
    insert_film()


 
 