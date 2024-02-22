

#     dbCursor.execute("SELECT * FROM songs WHERE Genre NOT LIKE 'Pop' OR Genre NOT LIKE 'Classic' ")
#            dbCursor.execute("SELECT * FROM songs WHERE Genre NOT LIKE 'Pop'")
 

from connect import *
def search_song():
        try:
                #ask for the field to search by
            # dbCursor.execute("SELECT * FROM songs")
            # dbCursor.execute("SELECT * FROM songs ORDER BY Title DESC")
            # dbCursor.execute("SELECT * FROM songs WHERE Genre = 'Pop' OR Genre = 'Classic' ")
            # dbCursor.execute("SELECT * FROM songs WHERE Genre NOT LIKE 'Pop' OR Genre NOT LIKE 'Classic' ")
            dbCursor.execute("SELECT * FROM songs WHERE Genre NOT LIKE 'Pop'")
 
            allsongs = dbCursor.fetchall()
            for songs in allsongs:
                   print(songs)
        except sql.OperationalError as e:
                print(f"Errro: {e}")

# Because the menu.py file lists the various files to import this prevents the files to be automatically cascaded and invoked.
if __name__ == "__main__":            
        search_song()

#  dbCursor.execute("SELECT * FROM songs WHERE Genre = 'Pop' OR Genre = 'Classic' ")
