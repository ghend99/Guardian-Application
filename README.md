# School-Application

An application built to allow easy management and maintenance of student information within schools to improve the accessibility of student information for teachers as this is something I feel is lacking.

This project was a revision of an older project I created. I aimed to create cleaner code in all my files utilizing new methods that I had learned whilst studying.

## Goals for the project

1. The project came from wanting to put my time studying Javascript into practice with no tutorial to follow.

1. One problem with my original creation was that the code was not as DRY as it could be. My dark mode toggle function was far too long and featured multiple lines to change the appearence of inputs, something I now know can be done in a single forEach loop.

1. Incorporate the ability to store data inside the localStorage. This was something I struggled to with when creating this project for the first time.

## Technologies Used

1. Javascript
1. HTML
1. CSS

## Current Features

1. Creating and logging into an account
1. Sending messages between accounts
1. Creating a timetable and updating it.
1. Adding referals to specified student accounts.
1. Toggiling between light and dark mode
1. Storing data inside local storage

## Features I would want to add

1. Store data inside of a database and query it using MySQL (phpMyAdmin and PHP)
1. Sending students projects and assignments
1. Send messages to a group of people rather than just one

## How to use the application

1. Firstly, create a student account through the Add Student button on the sidebar. Fill out the informaion and confirm it usin the button. This data will be stored in the local storage so if you refresh the browser it will still be avaialable.
1. Secondly, log in to your account using the log in inputs in the header, or by clicking on the log in image if on mobile or tablet. Now your student information will be updated to display the data of the student.
1. To add a referal to a student (they must already have information submitted for this to work), type in their name in the input found in the sidebar. Once submitted the data will be updated and will display when logged in to that account.
1. To send a message, open the modal through the sidebar. Then fill out the required inputs and then submit using the button found at the bottom. When logging into the account that recieves the message, it will be found inside the inboc container which can be opened through the sidebar.
1. When performing updates to a timetable, firstly open the container through the sidebar. This will reveal the update timetable button. Once you have inputted all the required information, press the update timetable button which will store the data once again inside the local storage. If you need to update the timetable, simply change the neccesary input and reconfirm it.

## Applications core functionality

1. The application's function revolves around OOP and the creation of a primary class. When new student data is inputted, a new instance of the class is created, and this instance gains access to all properties through prototypal inheritance. When this account is created it is immediately pushed into a student's array.
1. Whenever a account needs to be searched for, the find() array method is called. The reasoning for this is that it does not return a new array, instead it allows me to mutate the original array. The is especially important with the "add-referal" feature, this is because initially I used the filter() method, however, the referal total would reset when logging out of and then back into the account. The reason for this was due to filter() returning a new array.

## How the code works

### Upon start up

1. Upon opening the browser page, the Javascript engine immediately scans the file using Just In Time Compilation, it converts all the code to machine code and then executes the files all at once. This means it doesn't have to create a binary file, making the script require less memory and more optimized.
1. Upon execution, the engine creates the Global and Function Execution Context, the event loop scans the code, creating the memory required for any variables and functions. Variables are set to undefined during this process.

   <img src="./images/process/creation-phase.png" width="300" />

1. Following this, the script is scanned once again, this time providing values to any variables found. Once it hit functions that have been assigned memory, the engine goes inside and assigns values to variables found, any functions nested within another function will result in a new function execution context being created.
1. Once the execution phase has finished, the global context is pushed onto the call stack as a way to keep track of what functions are currently in effect. For example, as the engine scans through the script for a second time, it will push the getSavedStudents() and getSavedPins() onto the call stack to be immediately executed, creating a function execution context. Once the function has finished executing it is removed from the stack and the execution context is destroyed.

## getSavedStudents()

1. Before creating the function, the localStorage studentsAccessed variable would be updated every time new students had been created on a fresh instance. This means that is I created an account, then refreshed the page and created another, the original account would be deleted from the variable and only the second account would have been saved. To work around this problem I created a function that gets the data from the localStorage and saves it inside the studentsAccessed variable. Then I used an if is not conditional to check if studentsAccesed did not equal null.
1. If the check returned true, I pushed the student's accessed array into the student array. If it returned false then I just returned the function.
1. One problem I did encounter was that when storing the studentsAccessed data, it would store inside of an array, meaning the students array became two layers deep. When iterating over this array using the find() method, the student's data could not be found. This broke the array into separate objects instead of one single array, meaning they were stored as top-level array items.

## addReferal()

1. Firstly, I called the getStudentsLocalStorage function to gain access to the localStorage data.
1. I then stored the user input information into a searchParameter variable. This allows me to check the input against the student's array to ensure the account exists.
1. To check if the information existed, I used an if statement which returned true if the information did not exist, this would then alert the user. If the find iteration returns information then this is stored inside the target variable.
1. To update the object I access the target’s referral property and then update it by + 1 for each button click. It was also important here to update the original object key, instead of creating a new object as then when refreshing the page the data would reet back to its initial value.
1. After updating the value I then reset the students array to the localStorage with the updated information, the new data replacing the old.

## resetPin()

1. Again, I start off by calling both the studentsLocalStorage and pinsLocalStorage functions to gain access to the local storage data.
1. I set the target to the currently logged-in account by accessing the currentAccount global variable (which is set when the account is logged in).
1. I then use an if statement to determine

- That the pin isn't already in use
- THat the old pin matches the users current pin
- Both inputs of the new pin match one another

4. I then set the pin of the target to the newPin variable (which is the value of the newPin input) and push that new pin into the pins array.
1. To then update the students data inside of the localstorage I reset the data.
1. To remove the old pin that is now not being used, I access the index of the oldPin inside of the pins array and then splice the single element out of the array.

## sendMessage()

1. I access the required inputs from the container and store them inside the sendMessage function scope.
1. I once again use the find method to search for the target and ensure they have been registered.
1. If the target returns undefined, then the user is alerted to check their input.
1. If the target returns an object, then each input value is pushed into the corresponding array on that students object class.
1. I then reset the students array with the updated values.

## updateInboxLoad()

1. Firstly I access the students local storage object through the getStudentLocalStorage function.
1. In order to display each message on a new line, I loop over the targets inbox array (I only want to display the messages that they have received).
1. I then use the insertAdjacecentHTML method to display the results of the loop at each index (if I didn't set the index on the arrays then it would display the results all on a single line, instead of a new one.).

## makeRows()

1. The function starts with setting the

- rows to the name grid-rows and the value of rows
- Columns to name grid-cols and the value of cols

2. Then I loop over the total of rows \* cols and assign either a corresponding innerText value for the header or create an input and then append the created input to the current cell. Each input is given a classname depending on which day of the week and listen it represents.

## Lessons Learned

1. The ability to give a class to certain HTMl elements and then loop over them to provide styling on a button click. Previous, I had seperate lines for each individual input element which made my code long, messy and not DRY.

1. How using localStorage inside a project is remarkably easy once you implement it once. Creating the functions to retrieve the localStorage data not only kept my code DRY but was surprise to me when I discovered how to achieve it.

1. The ease of creating dynamics with CSS. My first attempt releid heavily on media queries and resetting container sizes for each screen size with fixed height and width values. The problem with this was that my contaieners where static so my elements spilled out and looked very unprofessional.

1. During the process of this project I began to create my development process. When creating HTML/CSS I like to work in colors, especially when positioning my containers. This also came about when designing the dark/light toggle, on my first attempt the containers would overlap meaning my borders wouldn't show.
