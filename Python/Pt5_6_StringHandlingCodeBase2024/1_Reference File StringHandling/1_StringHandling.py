
"Objective"
"" '' # Describe the function of string operations
"""You can perform operations with string in a similar way to the operations 
that you can perform with numbers. """

"To Do: Predict, then Run, and then Investigate"

"Objecyive"
"" '' # String handling techniques
stringVal1 = "a" > "b" # check if the letter a is greater than b
print(stringVal1)


stringVal2 = "b" > "a"  # check if the letter b is greater than a
print(stringVal2)

"Task 1 Working with comparison operators" # != , == , <= , >=, 
#  use any comparison operator to compare the letter "a" and "A"
#  use any comparison operator to compare the letters "ax" and "ZZ"
#  use any comparison operator to compare your firstname with any another first name
stringVal3 = "a" > "A"
print("'a' > 'A': ",stringVal3)
stringVal4 = "a" < "A"
print("'a' < 'A': ",stringVal4)
stringVal5 = "a" == "A"
print("'a' == 'A': ",stringVal5)
stringVal6 = "ax" > "ZZ"
print("'ax' > 'ZZ': ",stringVal6)
stringVal7 = "ax" < "ZZ"
print("'ax' < 'ZZ': ",stringVal7)
stringVal8 = "ax" != "ZZ"
print("'ax' != 'ZZ': ",stringVal8)
stringVal9 = "ax" == "ZZ"
print("'ax' == 'ZZ': ",stringVal9)
stringVa20 = "Robert" >= "Timothy"
print("'Robert' >= 'Timothy': ",stringVa20)

"You can multiply a string, it will concatenate the same value for the number of times stated."
mutiplyWord = "Python\n" * 5  # mulitply the word n times
print(mutiplyWord)

"""The + sign concatenates (joins) the two string together.
There is no space because it hasn't been given that instruction"""
joinWords = "Python" + "Java"  # join the two words
print(joinWords)

"Task 2"
# Create two variables fName and lName and join and print them using a variable called fullName
fName = "Robert"
lName = "Morris"
fullName = fName + lName
print(fullName)
"Objective"
"" '' # Finding the length of a string len()
print(len(fullName))

"Knowledge Check: What is the len() used for in a string?"

course = "Python"
wordLength = len(course)
print(wordLength)

"Objective"
"" '' # Finding a character using indexing e.g. course[0]
char4 = course[4]
print("Character at index 4 of 'Python' is:",char4)

"Task 3: How can we print a specific character using the index value or position in a string or list?"
# findChar = course[?]
# print(?)

"Objective"
"" '' # Make/modify a program that uses string-handling techniques

"Task 4: Write the code to print the letter  h"
char3 = course[3]
print("Character at index 3 of 'Python' is:",char3)

"Hints"
course = "Python Programming"
wordLength = len(course)
print(f"The length of the string {course} is {wordLength}")

"Objective"

"" '' #Extension activity: Research and independent learning activity
"Task 1: Return all the characters from the string held in the course variable using negative values"
print(type(wordLength))

for i in range(0,18):
    currentChar = course[i]
    print(currentChar)
print('\n')
for i in range(-18,0):
    currentChar = course[i]
    print(currentChar)
print('\n')
for i in range(-1,-19,-1):
    currentChar = course[i]
    print(currentChar)
print('\n')
    
"Task 2: Research and independent learning activity"
# Open the Python documentation using the provided link to discover uses of :
str.capitalize()
str.title()
str.swapcase()
# https://docs.python.org/3.3/library/stdtypes.html?highlight=substring#string-methods
