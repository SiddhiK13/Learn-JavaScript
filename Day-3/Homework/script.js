// 1. Assign values of variables 'a' and 'b' as 55 and 70, respectively, and then check if both the conditions 'a < 50' and 'a < b' are true.

let a =55;
let b =70;

if(a<50 && a<b){
    console.log("Both conditions are true");
}else{
    console.log("At least one condition is false");
}







//2. Solve the above question to check if at least one of the conditions 'a < 50' or 'a < b' is true.

if(a<50 || a<b){
    console.log("At least one condition is true");
}



//3. Write the program to check whether the number is even or odd.

let number = 7;
if(number % 2 === 0){
    console.log("The number is even");
}else{
    console.log("The number is odd");
}


//4.Write a program to take the basic salary of an employee, add a bonus % according to their basic salary, and display the gross salary.

// let basicSalary = parseFloat(prompt("Enter the basic salary of the employee:"));

// let bonusPercentage;

// if (basicSalary <= 10000) {
//   bonusPercentage = 10; 
// } else if (basicSalary <= 20000) {
//   bonusPercentage = 15; 
// } else {
//   bonusPercentage = 20; 
// }
// let bonusAmount = (bonusPercentage / 100) * basicSalary;

// let grossSalary = basicSalary + bonusAmount;

// console.log(`Basic Salary: ₹${basicSalary}`);
// console.log(`Bonus Percentage: ${bonusPercentage}%`);
// console.log(`Bonus Amount: ₹${bonusAmount}`);
// console.log(`Gross Salary: ₹${grossSalary}`);




// 5. Menu-driven program for area of circle, area of triangle, circumference of circle, and perimeter of triangle. (Using switch case).

let choice = parseInt(
    prompt(
        "Choose n option: \n1. Area of Circle\n2. Area of Triangle\n3. Circumference of Circle\n4. Perimeter of Triangle"
    )
);

switch (choice) {
    case 1:
        let radius1 = parseFloat(prompt("Enter the radius of the circle:"));
        let areaCircle = Math.PI * radius1 * radius1;
        console.log(`Area of Circle: ${areaCircle.toFixed(2)}`);
        break;

    case 2:
        let base = parseFloat(prompt("Enter the base of the triangle:"));
        let height = parseFloat(prompt("Enter the height of the triangle:"));
        let areaTriangle = 0.5 * base * height;
        console.log(`Area of Triangle: ${areaTriangle.toFixed(2)}`);
        break;

    case 3:
        let radius2 = parseFloat(prompt("Enter the radius of the circle:"));
        let circumference = 2 * Math.PI * radius2;
        console.log(`Circumference of Circle: ${circumference.toFixed(2)}`);
        break;
        
    case 4:
        let side1 = parseFloat(prompt("Enter the length of side 1 of the triangle:"));
        let side2 = parseFloat(prompt("Enter the length of side 2 of the triangle:"));
        let side3 = parseFloat(prompt("Enter the length of side 3 of the triangle:"));
        let perimeter = side1 + side2 + side3;
        console.log(`Perimeter of Triangle: ${perimeter.toFixed(2)}`);
        break;
}