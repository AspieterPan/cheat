# Basic Commands
# List contents of a directory
ls

# Change directory
cd /path/to/directory

# Display the current working directory
pwd

# Create a new file
touch newfile.txt

# Copy files or directories
cp source.txt destination.txt

# Move/rename files or directories
mv oldname.txt newname.txt

# Remove files or directories
rm file.txt

# Using Variables
# Setting a variable
set myVar "Hello, Fish"

# Echoing/printing a variable
echo $myVar

# Setting a universal variable (persists across sessions)
set -Ux myUniversalVar "Persistent Data"

# Environment Variables
# Setting PATH environment variable
set -gx PATH $PATH /new/path

# Displaying an environment variable
echo $PATH

# Functions
# Defining a simple function
function say_hello
    echo "Hello, Fish!"
end

# Invoking the function
say_hello

# Conditionals
# Basic if statement
if test $var -eq 3
    echo "Variable is 3"
else
    echo "Variable is not 3"
end

# Loops
# Basic for loop
for fruit in apple banana cherry
    echo $fruit
end

# While loop
set count 1
while test $count -le 5
    echo $count
    set count (math $count + 1)
end

# Command Substitution
# Using command substitution
set files (ls)
echo $files

# File Redirection
# Redirecting output to a file
echo "Hello, Fish" >hello.txt

# Appending output to a file
echo "Another line" >>hello.txt

# Pipes and Filters
# Using pipes
cat file.txt | grep "search term"

# History
# Viewing command history
history

# Searching command history
history search command
