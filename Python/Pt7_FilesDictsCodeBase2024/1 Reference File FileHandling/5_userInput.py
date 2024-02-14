fname    = input("Enter you full name: ")
address   = input("Enter your address: ")
interest = input("Enter your interest: ")
age      =    int(input("Enter your age: "))

"Make"
"To Do: Task 1: Use the code above to ask for user input and then save it to a file called userDetails.txt"

with open('Pt7_FilesDictsCodeBase2024/1 Reference File FileHandlings/userDetails.txt',"a") as data:
 
    "method 1"
    data.write("\n"+fname+ " "+address+ " "+interest+" "+ str(age))


"Further reading"
# https://www.w3schools.com/python/python_file_handling.asp