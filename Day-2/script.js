//1. Take the name and marks of 3 subjects as input and print the average of the student.

let marks1 =parseInt(prompt("enter the marks of subject 1:"));
let marks2= parseInt(prompt("enter the marks of subject 2:"));
let marks3 = parseInt(prompt("enter the marks of subject3"));
let average = (marks1+marks2+marks3)/3;

console.log("The average marks of the student is: " + average);     //prints output in console
document.write("The average marks of the student is: "+average);   //prints output on browser window



// 2. Take the name and basic salary of the employee and print the gross salary by adding 40% bonus.

let name = prompt("enter your name: ");
let basicSalary= prompt("enter your basic salary: ");
let bonus =(40/100) * basicSalary;
let grossSalary = parseInt(basicSalary) + parseInt(bonus);

console.log("The gross salary of " + name + " is: " + grossSalary);


// 3. Write a program to calculate the area and perimeter of the rectangle. (P = (L + W) × 2)

let length = parseFloat(prompt("enter the length of the rectangle: "));
let width  = parseFloat(prompt("enter the width of the rectangle: "));
let area = length * width;
let perimeter= 2*(length + width);

console.log("The area of the rectangle is: " + area);
console.log("The perimeter of the rectangle is: " + perimeter);


//4. Write a program to calculate the perimeter of a triangle having sides of length 2, 3, and 5 units. (P= a+b+c)

let side1=2;
let side2 =3;
let side3= 5;
let perimeterOfTriangle = side1 + side2 + side3;
console.log("The perimeter of the triangle is: " + perimeterOfTriangle);



// 5. Write a program to print the circumference of a circle using a prompt function.
let radius = parseInt(prompt("enter the radius of the circle: "));
let circumference = 2 * Math.PI * radius;
console.log("The circumference of the circle is: " + circumference);