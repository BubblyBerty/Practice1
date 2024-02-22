import updated_readsongs, addsongs, updatesongsV2, deletesongs, searchV4

def read_file(file_path): # file_path is a parameter/variable
    try:
        with open(file_path) as readfile:
            rf = readfile.read()
        # with open(file_path) as rf:
        #     rf.read()
            
        # or alternately:
        # with open(file_path)
            # rf = readfile.read()
            # return rf
            
        return rf
   
    except FileNotFoundError as nf:
        print(f"File not found: {nf}")

# Testing file path
# print(read_file("Python/Pt9_10DB/menuOptions.txt"))
        
def songs_menu():
    option = 0 # initialise/assign the option variable with an integer value 0
    optionsList = ["1","2","3","4","5","6"]
    # call the read_file function and assign to a variable(menu_choices)
    menu_choices = read_file("Python/Pt9_10Db/menuOptions.txt")
 
    # repeat the menu options until user select the to quit
    while option not in optionsList:
        print(menu_choices) # print the menu_choices variable because it is a function
        # re-assign the option variable a string value
        option = input("Enter an option from the menu choice above")
 
        # check if the input provided in options variable is not outside of 1,2,3,4,5,6
        if option not in optionsList:
            print(f"{option} is not a valid choice! ")
    return option


# testing
# print(songs_menu())
# create and use a boolean flag Variable
mainProgram = True # toggle to False to exit out of the while loop
 
while mainProgram: # while True
     # call the songs_menu function and assign to a variable(main_menu)
    main_menu = songs_menu()

# match is a new functionality and is only available in v3.10 onwards

    # use match case # same as swith in javascript
    match main_menu:
        case "1": # call the readsong file and the function display all songs
            updated_readsongs.all_songs()
        case "2":
            addsongs.insert_songs()
        case "3":
            updatesongsV2.update_all_fields()
        case "4":
            deletesongs.delete_asong()
        case "5":
            searchV4.search_song()
        case _:
            mainProgram = False # set mainProgram = False to exit the menu
input("Press enter to exit......")

 
