from connect import *
from readFilms import *
 
def multiple_records():
        #create a list with the films to insert
        films = [                
                ('Fight Club', 1999, '4 stars - Solid acting, amazing direction, and elaborate production design make Fight Club a wild ride.', 139, 'Mystery & thriller/Drama'),
                ('The Shining', 1980, "5 stars - Though it deviates from Stephen King's novel, Stanley Kubrick's The Shining is a chilling, often baroque journey into madness -- exemplified by an unforgettable turn from Jack Nicholson.", 142, 'Mystery & thriller/Drama'),
                ('The Breakfast Club', 1985, '5 stars - The Breakfast Club is a warm, insightful, and very funny look into the inner lives of teenagers.', 92, 'Comedy/Drama'),
                ("Singin' in the Rain", 1952, "5+ stars - Clever, incisive, and funny, Singin' in the Rain is a masterpiece of the classical Hollywood musical.", 102, 'Musical/Comedy'),
                ('The Matrix', 1999, "5 stars - Thanks to the Wachowskis' imaginative vision, The Matrix is a smartly crafted combination of spectacular action and groundbreaking special effects.", 136, 'Sci-Fi/Action'),
                ('The Great Gatsby', 1974, "2 stars - The Great Gatsby proves that even a pair of tremendously talented leads aren't always enough to guarantee a successful adaptation of classic literary source material.", 144, 'Drama'),
                ('The Lion King', 1994, "5+ stars - Emotionally stirring, richly drawn, and beautifully animated, The Lion King is a pride within Disney's pantheon of classic family films.", 87, 'Animated/Family/Musical'),
                ('The Matrix Reloaded', 2003, '4 stars - Though its heady themes are a departure from its predecessor, The Matrix Reloaded is a worthy sequel packed with popcorn-friendly thrills.', 138, 'Sci-Fi/Action'),
                ('The Sound of Music', 1965, '5 stars - Unapologetically sweet and maybe even a little corny, The Sound of Music will win over all but the most cynical filmgoers with its classic songs and irresistible warmth.', 174, 'Family/Musical'),
                ('Black Panther', 2018, "5+ stars - Black Panther elevates superhero cinema to thrilling new heights while telling one of the MCU's most absorbing stories -- and introducing some of its most fully realized characters.", 134, 'Action/Adventure'),
                ('The Exorcist', 1973, ' 4 stars - The Exorcist rides its supernatural theme to magical effect, with remarkable special effects and an eerie atmosphere, resulting in one of the scariest films of all time.', 122, 'Horror'),
                ('Midnight in Paris', 2011, '5 stars - It may not boast the depth of his classic films, but the sweetly sentimental Midnight in Paris is funny and charming enough to satisfy Woody Allen fans.', 94, 'Romance/Comedy'),
                ('The Wizard of Oz', 1939, '5+ stars - An absolute masterpiece whose groundbreaking visuals and deft storytelling are still every bit as resonant, The Wizard of Oz is a must-see film for young and old.', 101, 'Family/Fantasy/Musical'),
                ('Once Upon a Time in America', 1984, '5 stars - A solid film with great performances.', 139, 'Crime/Drama'),
                ('The Shawshank Redemption', 1994, '5 stars - The Shawshank Redemption is an uplifting, deeply satisfying prison drama with sensitive direction and fine performances.', 142, 'Drama'),
                ('Black Death', 2010, '4 stars - worth a watch', 162, 'Horror/Mystery & thriller'),
                ('Pulp Fiction', 1994, '5 stars - This movie was amazing.', 153, 'Crime/Drama'),
                ('Snake Charmer', 2002, 'Criticaslly unrated but a big fat zero from me.', 160, 'Mystery & thriller'),
                ('The Sound of Summer', 2022, 'Criticaslly unrated and unviewed by myself.', 72, 'Horror'),
                ('Jaws', 1975, '5+ stars - A solid film with great performances.', 124, 'Holiday/Mystery & thriller'),
                ('The Madness of King George', 1994, 'do not waste your time.', 110, 'History/Drama'),
                ('Sunshine','2007', '4 stars - reasonable.', 167, 'Sci-Fi'),
                ('The Green Mile', 1999, "4 stars - Though The Green Mile is long, critics say it's an absorbing, emotionally powerful experience.", 189, 'Drama/Fantasy'),
                ('Metropolis', 1927, '5+ stars - A visually awe-inspiring science fiction classic from the silent era.', 123, 'Sci-Fi/Drama'),
                ('The Idle Class', 1921, '5+ stars - Top draw Charlie Chaplin high farce/slapstick comedy from the silent era.', 32, 'Comedy'),
                ('Titanic', 1997, '5 stars - A mostly unqualified triumph for James Cameron, who offers a dizzying blend of spectacular visuals and old-fashioned melodrama.', 195, 'History/Drama'),
                ('Back to the Future', 1985, '5 stars - Inventive, funny, and breathlessly constructed, Back to the Future is a rousing time-travel adventure with an unforgettable spirit.', 116, 'Comedy/Sci-Fi'),
                ('Severn Samurai (Japanese language)', 1958, "5+ stars - Arguably Akira Kurosawa's masterpiece, The Seven Samurai is an epic adventure classic with an engrossing story, memorable characters, and stunning action sequences that make it one of the most influential films ever made.", 308, 'Action'),
                ('A Fistful of Dollars', 19645, "5+ stars - With Akira Kurosawa's Yojimbo as his template, Sergio Leone's A Fistful of Dollars helped define a new era for the Western and usher in its most iconic star, Clint Eastwood. ", 94, 'Western'),
                ('Gone with the Wind', 1939, "5 stars - Gone with the Wind's epic grandeur and romantic allure encapsulate an era of Hollywood filmmaking. A solid film with great performances.", 222, 'Romance/History'),
                ('Once Upon a Texas Train', 1988, '1 star - Critically rated by one, "...this easygoing effort...ambles amiably along...". I found it to be a stolid predictable trope. Mostly harmless.', 93, 'Western/Comedy'),
                ('Taxi (French language - Director: Gérard Pirès)', 1998, '4 stars - Critically unrated but audience ratinhg match my own - worth a watch.', 86, 'Action/Comedy'),
                ('Transsiberian', 2006, '5 stars - Traditional in form yet effective in execution, this taut thriller updates the "danger on a train" scenario with atmospheric sense.', 111, 'Mystery & thriller/Crime'),
                ('Twilight Zone: The Movie', 1983, '3 stars - The Twilight Zone: The Movie suffers from the typical anthology-film highs and lows; thankfully, the former outnumber the latter. In my opinion the Tansmanian Devil is realised quite credibly.', 102, 'Sci-Fi'),
                ('2001: A Space Odyssey', 1968, "5 stars - One of the most influential of all sci-fi films -- and one of the most controversial -- Stanley Kubrick's 2001 is a delicate, poetic meditation on the ingenuity -- and folly -- of mankind.", 139, 'Sci-Fi'),
                ('The Fountain', 2006, '3 stars - The Fountain -- a movie about metaphysics, universal patterns, Biblical symbolism, and boundless love spread across one thousand years -- is visually rich but suffers from its own unfocused ambitions.', 96, 'Drama/Mystery & thriller'),
                ('Monty Python and the Holy Grail', 1975, '5+ stars - A cult classic as gut-bustingly hilarious as it is blithely ridiculous, Monty Python and the Holy Grail has lost none of its exceedingly silly charm.', 90, 'Comedy')
                ]        

        # insert the records from the films list
        dbCursor.executemany("INSERT INTO tblFilms (Title, yearReleased, Rating, Duration, Genre) VALUES(?,?,?,?,?)", films)
  
        dbCon.commit()
        # now call the all_films function from the readFilms file to display updated records
        all_films()

multiple_records()