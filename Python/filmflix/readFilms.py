from connect import *
 
def all_films():
    try:
        # try to execute the sql statement below
        print("SELECT * FROM tblFilms")
        if dbCursor.execute("SELECT * FROM tblFilms") == False:
            print("I cannot presently determine if I was able to perform the SELECT command above")
        else:
            print("I think I was able to perform the SELECT command although I cannot fathom why I need this code (it seems to return a value?)")
            
        # fetch all selected data(rows)
        allFilms = dbCursor.fetchall() # Fetchall fetches all the rows from the table
 
        if allFilms:
            # format output
            print("filmID | Title..........................| Year | Rating.............................................| Duration | Genre...............")
            print("-" * 133)
 
            for aFilm in allFilms:

                print(f"{aFilm[0]:>6} | {aFilm[1]:<30} | {aFilm[2]} | {aFilm[3]:50} | {aFilm[4]:>8} | {aFilm[5]:<21}")
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