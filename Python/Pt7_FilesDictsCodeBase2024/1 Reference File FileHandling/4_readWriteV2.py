# There are four modes for opening a file:​

# r for only reading files​

# w for only writing to files​ and creating the file if it does not exists but overwrites existing file contents

# a for adding to an existing file​

# r+ for reading and writing files

import os
 
filepath = 'Python/Pt7_FilesDictsCodeBase2024/'
 
if os.path.exists(filepath):
    # try this code to open the file, read and display it contents in the terminal
    try:
        with open(filepath +'/file4.txt',"r+") as filePath1:# folder/folder/filename
            # print(filePath1.read()) #read from fiile
            readContents = filePath1.read()
            print("1",readContents)
            contents ="\nGoodbye - 1"
            filePath1.write(contents) #write to file
            filePath1.close()
   
    # handle (FileNotFoundError) : this error occurs if the file is not found
    except IOError as e:
        print(f"Error occured because: {e} - creating this file")
        with open(filepath +'/file4.txt',"w") as filePath1:
            contents = "Something to write"
            filePath1.close()
        with open(filepath +'/file4.txt',"r+") as filePath1:# folder/folder/filename
            # print(filePath1.read()) #read from fiile
            readContents = filePath1.read()
            print("1",readContents)
            contents ="\nGoodbye - 2"
            filePath1.write(contents) #write to file
            filePath1.close()
 
else:

    print("File not found. Creating this file.")
    with open(filepath +'/file4.txt',"w") as filePath1:
        contents = "Something to write"
        filePath1.close()
    with open(filepath +'/file4.txt',"r+") as filePath1:# folder/folder/filename
        # print(filePath1.read()) #read from fiile
        readContents = filePath1.read()
        print("1",readContents)
        contents ="\nGoodbye - 3"
        filePath1.write(contents) #write to file
        filePath1.close()

"To Do: Task 1: Modify the code above to"
# Read the contents from your file (yourName.txt) and write to your file  
# use the with the correct mode and ensure you use both the read and the write() methods to perform their respective 
# operations


