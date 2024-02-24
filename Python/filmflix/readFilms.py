from connect import *
 
def all_films():
    try:
        # try to execute the sql statement below
        dbCursor.execute("SELECT * FROM tblFilms")
 
        # fetch all selected data(rows)
        allFilms = dbCursor.fetchall() # Fetchall fetches all the rows from the table
 
        if allFilms:
            # format output
            print("filmID  | Title..........| yearReleased | rating.................................| duration | Genre")
            print("-" * 110)
 
            for aFilm in allFilms:
                print(f"{aFilm[0]} | {aFilm[1]:<20} | {aFilm[2]} | {aFilm[3]:<50} | {aFilm[4]} | {aFilm[5]:<18}")
        else:
            print("No films found in the films table")
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
    all_films()