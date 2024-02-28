import readFilms, addFilm, updateFilm, deleteFilm, searchFilms

def read_file(file_path): # file_path is a parameter/variable
    try:
        with open(file_path) as readfile:
            rf = readfile.read()
        return rf
    
    except FileNotFoundError as nf:
        print(f"File not found: {nf}")

# Testing file path below
# print(read_file("Tasks-Assignments/filmflix/menuOptions.txt"))
        
def films_menu():
    option = 0 # initialise/assign the option variable with an integer value 0
    optionsList = ["1","2","3","4","5","6"]
    # call the read_file function and assign to a variable(menu_choices)
    menu_choices = read_file("Tasks-Assignments/filmflix/menuOptions.txt")

    # repeat the menu options until user select the App to quit
    while option not in optionsList:
        print(menu_choices) # print the menu_choices variable because it is a function
        # re-assign the option variable a string value 
        option = input("Enter an option from the menu choice above: ")

        # check if the input provided in options variable is not outside of 1,2,3,4,5,6
        if option not in optionsList:
            print(f"{option} is not a valid choice! ")
    return option

# testing 
# print(songs_menu())
# create and use a boolean flag variable
mainProgram = True # toggle to False to exit out of the while loop
# ........
while mainProgram: # while True
    
     # call the songs_menu function and assign to a variable(main_menu)
    main_menu = films_menu()

    # use match case # same as swith in javascript
    if main_menu == "1":
            # call the readsong file and the function display all songs
            readFilms.all_films()
    elif main_menu == "2":
            addFilm.insert_film()
    elif main_menu == "3":
            updateFilm.update_selected_fields()
    elif main_menu == "4":
            deleteFilm.delete_afilm()
    elif main_menu == "5":
            searchFilms.search_film()
    else:
        mainProgram = False # set mainProgram = False to exit the menu
input("Press enter to exit......")