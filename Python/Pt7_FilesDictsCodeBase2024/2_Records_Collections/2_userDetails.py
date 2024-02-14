# fname    = input("Enter you full name: ")
# address   = input("Enter your address: ")
# interest = input("Enter your interest: ")
# age      =    int(input("Enter your age: "))


# create a dictionary 
dict1 = {"Fullname": "Jane Smith", "Age": 23, "Hobby":"Coding", 1:"Gamer"}

# create a dictionary with keys but no values 
print("dictionary with keys but no values")
userDetails1 = {"fname": "", "address": "", "interest":"", "age":"", "country":"", "city":"", "continent":""}
print(userDetails1)

for key in userDetails1:
    userDetails1[key] =  input(f"Enter your {key}: ")
print(userDetails1)
# Use key to add values to dictionary 


"""
userDetails1["fname"] = input("Enter you full name: ")
print(userDetails1)

"Extension"
"Modify"
"To Do: Task 1: write the input statement to add the remaining values to the userDetails1 dictionary above"

# create a dictionary with no keys and no values 
print("dictionary with no keys and no values")

"Make"
"To Do: Task 2: Create a dictionary with no keys as shown below, then write the input statement to add the keys and values."
userDetails2 = {}
print(userDetails2)

numOfkeyValuePairs = int(input("Enter the number of key value pairs you want to add: "))
 
for keyVal in range(numOfkeyValuePairs):
    aKey = input("Enter key: ")
    aVal = input(f"ENter value for {aKey}: ")
    userDetails2[aKey] = aVal
print(userDetails2)


# With a while loop - method 1
numOfkeyValuePairs = int(input("Enter the number of key value pairs you want to add: "))
keyValCount = 0
while True:
    aKey = input("Enter key: ")
    aVal = input(f"ENter value for {aKey}: ")
    userDetails2[aKey] = aVal
    keyValCount += 1 #increase the count
 
    if keyValCount == numOfkeyValuePairs:
        break
print(userDetails2)

# With a while loop - method 2
addKeyVal = True
while addKeyVal:
    aKey = input("Enter key: ")
    aVal = input(f"ENter value for {aKey}: ")
    userDetails2[aKey] = aVal
 
    # ask to continue adding data
    addanotherkeyVal = input("Do you want to add anoter pair of key value (Y/N): ").upper()
    if addanotherkeyVal == "N":
        addKeyVal = False
        print("Exiting the program")
print(userDetails2)
"""