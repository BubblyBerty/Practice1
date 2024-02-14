"To Do: Task1: Modify the code in userName function below to use parameter and arguments"

def userName(fNam,addr,inter):  # define a subrouitine called userName
    fullName = input("Enter your name: ")
    address = input("Enter your address: ")
    interest = input("Any interest? ")
    
    print(f"my name is {fullName}, my address is {address} and my interest is {interest}")
    return fullName, address, interest
   
userName(1,2,3)

