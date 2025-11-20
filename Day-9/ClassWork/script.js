// 1. Write a program for addition of single array elements.

let arr = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log("Sum of array elements =", sum);

// 2. Write a program for addition of two arrays stored in third array.

const arr1 = [10,20,30];
const arr2 = [40,50];
const arr3 = [...arr1, ...arr2];

console.log("Third array after addition of two arrays =", arr3);

// 3. Write a program to search a particular element in array and display its position.
const searchArr = [5, 10, 15, 20, 25];
const target = 15;
const position = searchArr.indexOf(target);
if (position !== -1) {
    console.log(`Element ${target} found at position ${position}`);
}
else {
    console.log(`Element ${target} not found in the array`);
}

// 4. Write a program to store squares and cubes of the elements in another arrays and Display all the three arrays.
let nums= [1, 2, 3, 4, 5];
let squares = [];
let cubes = [];

for (let i = 0; i < nums.length; i++) {
    squares[i] = nums[i] * nums[i];
    cubes[i] = nums[i] * nums[i] * nums[i];
}

console.log("Original Array:", nums);
console.log("Squares:", squares);
console.log("Cubes:", cubes);

// 5. Write a program to calculate the average value of array elements.
let numbers = [10, 20, 30, 40, 50];
let total = 0;
for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
}
let average = total / numbers.length;
console.log("Average value of array elements =", average);

// 6. Write a program to print sum of Even Numbers in the array
let evenArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenSum = 0;
for (let i = 0; i < evenArr.length; i++) {
    if (evenArr[i] % 2 === 0) {
        evenSum += evenArr[i];
    }
}
console.log("Sum of Even Numbers in the array =", evenSum);