// 1. Practice all the below functions in separate files.

// date function// Create a date object (current date & time)
let now = new Date();

console.log("Current Date & Time =", now);

// Individual date components
console.log("Year =", now.getFullYear());
console.log("Month =", now.getMonth() + 1); // 0 = Jan, so +1
console.log("Date =", now.getDate());
console.log("Day =", now.getDay());         // 0 = Sunday
console.log("Hours =", now.getHours());
console.log("Minutes =", now.getMinutes());
console.log("Seconds =", now.getSeconds());

// Setting a specific date
let d = new Date();
d.setFullYear(2025, 10, 20);  
console.log("Set Full Date =", d);

// Date to string formats
console.log("Date String =", now.toDateString());
console.log("Time String =", now.toTimeString());
console.log("Locale Date =", now.toLocaleDateString());
console.log("Locale Time =", now.toLocaleTimeString());
