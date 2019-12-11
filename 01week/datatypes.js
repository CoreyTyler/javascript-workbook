//Write a JavaScript program to display the current day and time.

let currentDate = new Date();

console.log("The current date and time is", currentDate);

//Write a JavaScript program to convert a number to a string.

var num = 15;
var n = num.toString();

console.log("The number is", num);
console.log("The string representing the number is", n);

//Write a JavaScript program to convert a string to the number.

var string = "222";
var w = Number(string);

console.log("My 222 string changed to a number is", w);

//Write a JavaScript program that takes in different datatypes and prints out their datatype

console.log(
  "This program will tell you the data type of a value using typeof followed by the value"
);

typeof "heyyo";

var num1 = 2;

var num2 = 44;

console.log("The two num variables added together are:", num1 + num2); //This is a program that will add the two "num" variables together.

x = true;

y = true;

if (x == true && y == true) {
  console.log("both are true");
} //This is a program that only runs of both of the variables are true.

x = true;

y = 0;

if (x == true || y == true) {
  console.log("one is true");
} //This is a program that will only run if one of the variables is true.

x = 5;

y = 6;

if (x !== true && y !== true) {
  console.log("both are not true");
} //This is a program that will only run if both of the variables are not true.
