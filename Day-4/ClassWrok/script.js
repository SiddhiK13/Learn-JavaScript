//1. Print 1 to 50 alternate numbers by using while loop

let i=1;
while(i<=50){
    console.log(i);
    i++;
}

// 2. Print 1 to 50 even numbers by using while loop

let j=2;
while(j<=50){
    console.log(j);
    j+=2;
}


// 3. Print 1 to 50 odd numbers by using while loop

let k=1;
while(k<=50){
    console.log(k);
    k+=2;
}


//4. Print sum of 1 to 10 even numbers using while loop

let sumEven=0;
let m=2;
while(m<=10){
    sumEven+=m;
    m+=2;
}
console.log(sumEven);


//5. Print sum of 1 to 10 odd numbers using while loop

oddSum=0;
let n=1;
while(n<=10){
    oddSum+=n;
    n+=2;
}
console.log(oddSum);

//6. Write a program to print odd numbers from 521 to 229 using a do___while loop.

let p=521;
do{
    console.log(p);
    p-=2;
}while(p>=229);


//7. Write a program to print table of number given by the user
let nu3mber= parseInt(prompt("Enter a  number to print its table: "));

for(let num=number; num<=number*10;num+=number){
    console.log(num);
}