from connect import *
 
def insert_songs():
    # "SongID","Title","Artist","Genre"
    # SongID is auto increment field no data is required as an input
    sTitle = input("Enter song Title: ")
    sArtist = input("Enter song Artist: ")
    sGenre = input("Enter song Genre: ")
 
    dbCursor.execute("INSERT INTO songs VALUES(NULL,?,?,?)", (sTitle, sArtist, sGenre))
    dbCon.commit()
    print(f"{sTitle} inserted in the songs table")
insert_songs()
 
 