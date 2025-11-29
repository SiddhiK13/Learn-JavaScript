//1. Practice all the below functions in separate files.
//Text Functions 

//1.length
let str = "Siddhi";
console.log(str.length);

//2.concat()
let str1 = "Hello";
let str2 = "World";
let result = str1.concat(" ", str2);
console.log(result);

//3.indexOf()
let position = "Hello World";
console.log(position.indexOf("d"));

//4.lastIndexOf()
let str3 = "Hello world";
console.log(str3.lastIndexOf("l"));

//5.slice
let str4 = "siddhi kshirsagar";
let result4 = str4.slice(4,8);
console.log(result4);

//6.split
let string = "SiddhiKshirsagar";
let result2 = string.split("");
console.log(result2);

//7.substring()
let String = "substring";
let result3 = String.substring(7,3);
console.log(result3);

//8.trim() 
let str5 = "    I am      Siddhi      ";
console.log(str5.trim()); 


//Array Functions

//1. length
let arr= [10,20,30];
console.log(arr.length);

//2.sort
let arr1= [1,6,3,5,9,7,4];
console.log(arr1.sort());

//3.reverse
let arr2 = [9,8,7,6,5,4];
console.log(arr2.reverse());

//4.concat
let arr3 = [1,2,3,4];
let arr4 = [5,6,7,8];
let result5 = arr3.concat(arr4);
console.log(result5);

//5.indexOf()
let arr5 = ["Siddhi","Sakshi","Shreya"];
console.log(arr5.indexOf("Siddhi"));

//join
let arr6 = ["I","am","sid"];
console.log(arr6.join("-"));

//pop
let arr7 = [1,2,3,4,5];
console.log(arr7.pop());


//push
let arr8 = [100,200,300,400,500];
console.log(arr8.push(600));
console.log(arr8);

//shift
let arr9 = [10,20,30,40,50];
console.log(arr9.shift());


//slice
let arr10 = [1,2,3,4,5,6,7,8,9];
console.log(arr10.slice(3,7));


//splice
let arr11 = [10,20,30,40,50];
arr11.splice(1,2,13);
console.log(arr11);