#  while not valid_age or not valid_student_status:

# age = int(input("Enter your age: "))
# validStudent = input("Are you enrolled on Dev bootcamp (Y/N): ")
# print(f"Your age is {age} and enrolled {validStudent}")

def student_input():
    age = int(input("Enter your age: "))
    validStudent = input("Are you enrolled on Dev bootcamp (Y/N): ")
    print(f"Your age is {age},Enrolled status: {validStudent}")
    return age, validStudent

def validate_Student():
    
    studentData = True# boalean variable (toggle on/off)
    while studentData:
        # assign the age and validStudent local variable to the student_input() function 
        age , validStudent = student_input()

        # check if the age is valid 
        getValidAge = 18 <= age <=25 #(18 and 25)

        # check for valid student status
        getValidStatus = validStudent == "Y" or validStudent == "N" 

        if not getValidAge or not getValidStatus:
            print("Enter valid data")
        else:
            print("Valid data entered....")
            studentData = False # setting the studentData to false ensure we break out of the while loop

validate_Student() # call the validate_Student() function to run the program
