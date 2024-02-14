# There are four modes for opening a file:​

# r for only reading files​

# w for only writing to files​ and creating the file if it does not exists but overwrites existing file contents

# a for adding to an existing file​

# r+ for reading and writing files

filePath1 = open('Python/Pt7_FilesDictsCodeBase2024/file3.txt', 'w')
with open('Python/Pt7_FilesDictsCodeBase2024/file3.txt',"r+") as filePath1:# folder/folder/filename
    readContents = filePath1.read()
    print(readContents)
    contents ="\nYourA\ntext\ngoes\nhere\nin\nnewlines"
    filePath1.write(contents) #write to file
    readContents = filePath1.read()
    print(readContents)

# try this code to open the file, read and display it contents in the terminal
try:
    with open('Python/Pt7_FilesDictsCodeBase2024/file4.txt',"r+") as filePath1:# folder/folder/filename
        # print(filePath1.read()) #read from fiile
        readContents = filePath1.read()
        print(readContents)
        contents ="\nGoodbye"
        filePath1.write(contents) #write to file
        filePath1.close()
 
# handle (FileNotFoundError) : this error occurs if the file is not found
except FileNotFoundError:
    print("File not found. Please check the file path") 

# try this code to open the file, read and display it contents in the terminal
try:
    with open('Python/Pt7_FilesDictsCodeBase2024/file1.txt',"r+") as filePath1:# folder/folder/filename
        # print(filePath1.read()) #read from fiile
        readContents = filePath1.read()
        print(readContents)
        contents ="\nGoodbye"
        filePath1.write(contents) #write to file
        filePath1.close()
 
# handle (FileNotFoundError) : this error occurs if the file is not found
except FileNotFoundError:
    print("File not found. Please check the file path") 

"To Do: Task 1: Modify the code above to"
# Read the contents from your file (yourName.txt) and write to your file  
# use the with the correct mode and ensure you use both the read and the write() methods to perform their respective 
# operations


