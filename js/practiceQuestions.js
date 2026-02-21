/* let a = 10;
let b = 20;
let sum = a + b;
console.log(sum); */



// 2  Print the message along with values and sum (Ex - The sum of 45 & 12 = 57)
/* let a = 10;
let b = 10;

let sum = a + b;
console.log("the value of a =",a,"the value of b is =",b);
console.log("sum is",sum); */



//  3  Accept two integers from user and print the sum (Ex - The sum of 45 & 12 = 57)
/* let a = Number(prompt("enter the first number"));
let b = Number(prompt("enter the first number"));

let sum = a + b;
console.log("sum is =",sum); */



//  4  Accept the User's name, age and print in following manner (Ex - Hello Shery, you are 12 years old.)
/* let name = prompt("enter your name");
let age = prompt("enter your age");
console.log(`hello ${name} you are ${age}years old`) */



//  7  Accept the length and width of a rectangle. Calculate & print the area and perimeter.
/* let length = Number(prompt("enter the length of rectangle"));
let breadth = Number(prompt("enter the breadth of rectangle"));

let perimeter = 2 * ( length + breadth );
let area = ( length * breadth );

console.log(`perimeter of rectangle is ${perimeter}`);
console.log(`area of rectangle is ${area}`); */



//  8  Accept the parameters and calculate the Compound Interest & print it on STDOUT (Use Math class methods)
/* let p = Number(prompt("enter principal amount"));
let r = Number(prompt("enter rate of interest"));
let t = Number(prompt("enter time(year)"));

let amount = p * Math.pow(( 1 + r / 100 ),t);
let CI = amount - p;

console.log(`the CI is = ${CI}`); */



//  9  Accept the three sides of triangle and calculate the area using Heron's formula
/* let a = Number(prompt("enter first side"));
let b = Number(prompt("enter second side"));
let c = Number(prompt("enter third side"));

let s = ( a + b + c ) / 2;
let area = Math.sqrt(s * ( s - a ) * ( s - b ) * ( s - c ));

console.log(`area is = ${area}`); */



//  10  Find surface area of sphere
/*let radius = Number(prompt("enter radius of sphere"));
let pi = 3.14;
let area  = 4 * ( pi * radius * radius );
console.log(`area of sphere is ${area}`);*/



//  11  Find circumference and area of circle
/* let radius = Number(prompt("enter the radius of circle"));
let pi = 3.14;
let circumference = 2 * ( pi * radius );
let area = ( pi * radius * radius );

console.log(`circumference of circle is ${circumference}`);
console.log(`area of circle is ${area}`); */



//  12  Accept two numbers and print the greatest between them
/* let a = Number(prompt("enter first number"));
let b = Number(prompt("enter the second number"));

if ( a > b ) {
    console.log(`the greatest number is = ${a}`);
}
else if ( a < b ) {
    console.log(`the greatest number is = ${b}`);
}
else {
    console.log(`both are equal`);
} */



//  13  Accept the gender from the user as char and print the respective greeting message (Ex - Good Morning Sir (on the basis of gender))
//  14  Extend the previous program and handle the wrong inputs. Print Good Morning Sir for input m or M & Good morning Ma'am for input F or f, else print Wrong Input.
/* let gender = prompt("enter gender (M/F)");

if (gender === 'M' || gender === 'm') {
    console.log("good morning sir");
}
else if (gender === 'F'  ||  gender === 'f') {
    console.log("good morning mam");
}
else {
    console.log("invalid input");
} */



//  15  Accept an integer and check whether it is an even number or odd.
/* let integer = Number(prompt("enter a number"));

if (integer%2 === 0) {
    console.log(`even ${integer}`);
}
else  {
    console.log(`odd ${integer}`);
} */



//  16  Accept name and age from the user. Check if the user is a valid voter or not. (Valid - Hello Shery, You are a valid voter. Invalid - Sorry Shery, you can't cast the vote. Part 2 - Print after how many years the user will be eligible)
/* let name = prompt("enter your name");
let age = Number(prompt("enter your age"));

if ( age >= 18 ) {
    console.log(`hello ${name} , you are a valid voter`);
}
else {
    let yearsleft = age - 18
    console.log(`sorry ${name} , you are not a valid voter`);
    console.log(`you are eligible after ${yearsleft} years`);
} */



//  17  Accept a day number between 1-7 and print the corresponding day name.
/* let day = Number(prompt("enter a number (1/7)"));

switch (day){
case 1:
    console.log("monday");
    break;
case 2:
    console.log("tuesday");
    break;
case 3:
    console.log("wednesday");
    break;
case 4:
    console.group("thursday");
    break;
case 5:
    console.log("friday");
    break;
case 6:
    console.log("saturday");
    break;
case 7:
    console.log("sunday");
    break;
default:
    console.log("invalid");
    break;
} */



//  18  Accept three numbers and print the greatest among them
/* let a = Number(prompt("enter first number"));
let b = Number(prompt("enter second number"));
let c = Number(prompt("enter the third number"));

if (a>b && a>c) {
    console.log("a is greater");
}
else if (b>a && b>c) {
    console.log("b is greater");
}
else {
    console.log("c is greater");
} */



//  19  Accept a year and check if it a leap year or not (google to find out what's a leap year)
/* let year = Number(prompt("enter any year"));

if (year%4 === 0) {
    console.log(`${year} is a leap year`);
}
else {
    console.log(`${year} is not a leap year`)
} */



//  20  Shop discount
let amount = Number(prompt("enter amount"));
let discount = 0;

if ( amount >= 5000 ) {
    discount = amount * 0.20;
}
else if (amount >= 3000) {
    discount = amount * 0.10;
}
else {
    discount = 0;
}

let finalAmount = amount - discount;

console.log(`amount ${amount}`);
console.log(`discount ${discount}`);
console.log(`final amount ${finalAmount}`);