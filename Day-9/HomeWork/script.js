// 1. Write a program to insert array elements and search for any particular array element.

let searchArr = [];
for (let i = 0; i < 5; i++) {
    searchArr[i] = parseInt(prompt("Enter element " + (i + 1)));
}

let search = parseInt(prompt("Enter element to search"));
let found = -1;

for (let i = 0; i < searchArr.length; i++) {
    if (searchArr[i] === search) {
        found = i;
        break;
    }
}

if (found >= 0)
    console.log(search + " found at position " + (found + 1));
else
    console.log("Element not found");

// 2. Enter 5 array elements and sort them in ascending order.

let sortarr = [];

for (let i = 0; i < 5; i++) {
    sortarr[i] = parseInt(prompt("Enter element " + (i + 1)));
}

sortarr.sort(function(a, b) {
    return a - b;
});

console.log("Sorted Array (Ascending):", sortarr);


// 3. Enter 10 array elements and find the minimum and maximum numbers among them.

let arr = [];

for (let i=0; i<10; i++){
    arr[i]= parseInt(prompt("Enter element" + (i+1)));
}

let min = arr[0];
let max = arr[0];1

for(let i=0; i<arr.length; i++){
    if(arr[i] < min) min= arr[i];
    if (arr[i] > max) max= arr[i];
}

console.log("Minimum = " + min);
console.log("maximum = "+ max);


// 4. Write a program to merge two array elements into a single array. Print the third array.
arr1= [5, 3, 8, 1, 2];
arr2= [7, 4, 6, 10, 9];
arr3 = [...arr1, ...arr2];
console.log("Merged Array =", arr3);

// 5. Write a program to print sum of Odd Numbers in the arraylet arr = [11, 22, 33, 44, 55, 66];
let oddSum = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        oddSum += arr[i];
    }
}
console.log("Sum of Odd Numbers =", oddSum);
