from connect import *
from readsongs import *
 
def multiple_records():
        #create a list with the songs to insert
        songs = [
                ('Smooth', 'Oscar Rhythm', 'Blues'),
                ('Peaches', 'Maya Blues', 'Reggae'),
                ('Fancy Like', 'Alice Harmony', 'EDM'),
                ('Don''t You Want Me', 'Finn Melody', 'Folk'),
                ('Don''t You Want Me', 'Jack Beat', 'Classical')
                ]
       
   
        # insert the records from the songs list
        dbCursor.executemany("INSERT INTO songs (Title, Artist, Genre) VALUES(?,?,?)", songs)
 
        # or
 
        # dbCursor.executemany("INSERT INTO songs VALUES(NULL, ?,?,?)", songs)
        dbCon.commit()
        # now call the all_songs function from the readsongs file to display updated records
        all_songs()
multiple_records()