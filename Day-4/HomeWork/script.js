//1. Print sum of 1 to 10 numbers using while loop

let sum=0;
let i=1;
while(i<=10){
    sum+=i;
    i++;
}
console.log(sum);


// 2. Write a program to print the sum of even numbers and odd numbers between 1 to 30

// let evenSum = 0;
// let oddSum = 0;

// let j=0;
// while(j<=30){
//     if(j%2==0){
//         evenSum+=j;
//     }
//     else{
//         oddSum+=j;
//     }
// }
// console.log("Sum of even numbers: " + evenSum);
// console.log("Sum of odd numbers: " + oddSum);



// 3. Write a program to print squares of numbers from 1 to 20

for(let k=1;k<=20;k++){
    console.log(k*k);
}


// 4. Accept a number from user and print its sum of digits. e.g., if num is 123, the answer is 6.

let num = prompt("Enter a number:");
let digitSum = 0;
while(num>0){
    let digit = num % 10;
    digitSum += digit;
    num = Math.floor(num / 10);
}
console.log("Sum of digits: " + digitSum);


// 5. Write a program to print sum of even numbers and odd numbers between 1 to 30 using for loop
let evenSum1 = 0;
let oddSum1 = 0;

for(k=0;k<=30;k++){
    if(k%2==0){
        evenSum1+=k;
    }else{
        oddSum1+=k;
    }
}
console.log("Sum of even numbers: " + evenSum1);
console.log("Sum of odd numbers: " + oddSum1);

// 6. Print odd numbers from 101 to 110 using a for loop.

for(let m=101;m<=110;m++){
    if(m%2!=0){
        console.log(m);22
    }
}
// 7. Print a table of 5 using a for loop.

for(let n=1;n<=10;n++){
    console.log("5 x " + n + " = " + (5*n));
}
// 8. Write a program to print squares of numbers from 1 to 20 using for loop

for(let t=1;t<=20;t++){
    console.log(t*t);
}