# name is a local variable

name = "Robert"

# define the subroutine userName

def userName():
    print(f'Welcome {name}')

# print "Welcome" userName    
userName()


def greeting():
    while True:
        try:
            name = input("Please enter your name: ")
            break
        except ValueError:
            print("Please enter a valid name")
 
    print (f"Hello {name}")
 
#call function
greeting()


"To Do: Predict, then Run, and then Investigate"
def addition():
    # name is a global variable 
    # answer, num1 and num2 are local variables 
    num1 = int(input("Enter your first number: "))
    num2 = int(input("Enter your second number: "))
    answer = num1 + num2
    print(f"The answer to {num1} + {num2} = {answer}")


"Make"
"To Do:Task1: Modify the code above to use either subtraction or multiplication or division and change the subroutine name respectively"
"To Do:Task2: Add comments to the explain your lines of code"
def subtraction():
    # name is a global variable 
    # answer, num1 and num2 are local variables 
    num1 = int(input("Enter your first number: "))
    num2 = int(input("Enter your second number: "))
    answer = num1 - num2
    print(f"The answer to {num1} - {num2} = {answer}")

def multiplication():
    # name is a global variable 
    # answer, num1 and num2 are local variables 
    num1 = int(input("Enter your first number: "))
    num2 = int(input("Enter your second number: "))
    answer = num1 * num2
    print(f"The answer to {num1} * {num2} = {answer}")

def division():
    # name is a global variable 
    # answer, num1 and num2 are local variables 
    num1 = int(input("Enter your first number: "))
    num2 = int(input("Enter your second number: "))
    if num2 == 0:
        num2 = int(input("This number cannot be zero: Enter your second number again: "))
        print(num2)
    answer = num1 / num2
    print(f"The answer to {num1} / {num2} = {answer}")
    

# prevents the automatic running of the subroutine when it is imported
# in to another python file/application
"If this file is run directly it will automatically call and run the respective subroutines"
if __name__ == "__main__":
    addition()
    subtraction()
    multiplication()
    division()


# [9:58 AM] Timothy Jones
def addition(usernum1, usernum2):
    # name is a global variable 
    # answer, num1 and num2 are local variables 
    usernum1 = int(input("Enter your first number: "))
    usernum2 = int(input("Enter your second number: "))
    answer = usernum1 + usernum2
    print(f"The answer to {usernum1} + {usernum2} = {answer}")



usernum1 = int(input("Enter first number:"))
usernum2 = int(input("Enter second number:"))
 
addition(usernum1, usernum2)

# [9:58 AM] Timothy Jones - the following shows a more effecient way of writing the code

addition(int(input("Enter first number:")), int(input("Enter second number:")))

addition(usernum1, usernum2)


"Further reading on python functions"


# 
# IMPORTING SUBROUTINES FROM ANOTHER FILE/PAGE

import sub1 # imports a whole different page called sub1
sub1.userName()

from sub1 import userName # imports just the particular subroutine required (so more effecient)
userName()

from sub1 import userName, age, address

userName() 
age()
address()

# 
