"""
fname    = input("Enter you full name: ")
address   = input("Enter your address: ")
interest = input("Enter your interest: ")
age      =    int(input("Enter your age: "))

"Make"
"To Do: Task 1: Use the code above to ask for user input and then save it to a file called userDetails.txt"

with open('Python/Pt7_FilesDictsCodeBase2024/1 Reference File FileHandlings/userDetails.txt',"a") as data:
 
    "method 1"
    data.write("\n"+fname+ " "+address+ " "+interest+" "+ str(age))

    "method 2"
    filecontent = (f"\n{fname} {address} {interest}  {age}" )
    data.write(filecontent)
    # or
    # data.write(f"\n{fname} {address} {interest}  {age}" )
"""

fname    = input("Enter you full name: ")
address   = input("Enter your address: ")
interest = input("Enter your interest: ")
age      =    int(input("Enter your age: "))
 
"Make"
"To Do: Task 1: Use the code above to ask for user input and then save it to a file called "
 
# create a dictionary
userData =  {
    "Fullname":fname,
    "Address":address,
    "Interest":interest,
    "Age":age
}
print(userData["Fullname"])
# Python\Pt7_FilesDictsCodeBase2024\1 Reference File FileHandling\5_userInputV2.py 
with open('Python/Pt7_FilesDictsCodeBase2024/1 Reference File FileHandling/userDictionary.txt',"a") as dictData:
    for aKey,aValue in userData.items():
        dictData.write(f"{aKey}, {aValue}")
 
 
 


"Further reading"
# https://www.w3schools.com/python/python_file_handling.asp