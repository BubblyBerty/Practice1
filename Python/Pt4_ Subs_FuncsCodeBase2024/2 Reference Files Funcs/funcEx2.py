"""
To Do Task 2: Modify the code in subroutine to convert it to a function thats uses parameters and arguments with a return statement
"""
def sub(numb1,numb2):  # define the subtraction function
    # variables inside a  surbroutine/function have local scope
    num1 = int(input("Enter your first number: "))
    num2 = int(input("Enter your second number: "))
    answer = num1 - num2
    print(f"The answer to {num1} - {num2} is {answer}")
    return num1, num2, answer

sub(1,2)
