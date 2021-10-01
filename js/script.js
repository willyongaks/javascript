// question 1
//Declare and initialise three variables with appropriate names and values.One variable with a number value, one with a boolean value and one with a string value.

//answer 1
var number = 10;
var boolean = true
var string = "william";

console.log(number);
console.log(boolean);
console.log(string);




//question 2
//Declare two variables. Assign your first name to one of the variables and your last name to the other. Concatenate (join) the variables, assign them to a third variable and console log the value of the third variable.

//answer 2
var firstName = "William";
var lastName = "Ongaki";

var fullName = firstName + " " + lastName;

console.log(fullName)



//question 3
//Check the type of the value "frog" with the typeof operator and assign the result to a variable. Console log the variable value with a label, e.g. “The type of frog is ___”.

//answer

var animal = "frog";

console.log("The type of frog is a", typeof animal);


//question 4
//Declare and initialise a variable called orderHasShipped with a boolean value. Create an if statement that checks if orderHasShipped is true. If it is true, console log the string value "The order shipped". If not, console log the string value "The order did not ship".

//answer 4

var orderHasShipped = true;

if (orderHasShipped === true){
    console.log("The order shipped")
}

else {
    console.log("The order did not ship")
}

//question 5
//Create a for loop that counts from 7 to 13. Console log the value of the counter variable inside the loop.

//answer 5

for(i=7; i<=13; i++)
console.log(i)