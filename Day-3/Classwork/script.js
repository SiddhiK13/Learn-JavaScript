// 1. Write a program to check largest among two integer numbers

let a=10;
let b=15;

if(a>b){
    console.log("a is greater than b")
}
else{
    console.log("b is greater than a");
}


// 2. Write a program to check whether the number is positive or negative

let num = -5;
if (num >=0 ){
    console.log("Positive Number");
}else{
    console.log("Negative Number");
}


// 3. Write a program to display the grades of students based on their percentage using elseif.

let percentage =75;

if(percentage >= 80){
    console.log("A Grade");
}
else if(percentage >= 75){
    console.log("B Grade");
}
else if(percentage >= 50){
    console.log("C Grade");
}
else{
    console.log("Fail");
}


// 4. Write a program to check largest among three integer numbers
let x=15;
let y=20;
let z=11

if(x>y && x>z){
    console.log("x is the largest number");
}else if(y>x && y>z){
    console.log("y is the largest number");
}else{
    console.log("Z is the largest number")
}


// 5. Menu-driven program on Arithmetic Operators (Using switch case)

let operator = '-';
let num1 = 10;
let num2 = 5;
let result;

switch(operator){
    case '+':
        result = num1 + num2;
        console.log(result);
    break;
    case '-':
        result = num1 - num2;
        console.log(result);
    break;
    case '*':
        result = num1 * num2;
        console.log(result);
    break;
    case '/':
        result = num1 / num2;
        console.log(result);
    break;
    default:
        console.log("Invalid Operator");
    break;
}
