// Window Methods: setTimeout( ), setInterval( )

setTimeout(() => {
    document.getElementById("msg").innerText = "This message appeared after 3 seconds!";
}, 3000);



let count = 0;

let countVar = setInterval(() => {
    count++;
    document.getElementById("counter").innerText = count;

    if (count === 5) {
        clearInterval(countVar); // stop interval
        console.log("Counter stopped at 5");
    }
}, 1000);

