// Selecting Elements in JavaScript: 
// 

//getElementsByClassName()

let elements = document.getElementsByClassName("text");
console.log(elements.length);

// getElementsByTagName( )

let tags = document.getElementsByTagName("h2");
for(let i=0;  i<tags.length; i++){
    tags[i].style.color = "red";
}

// querySelector()

function selectOne(){
    let ele = document.querySelector(".title");
    ele.style.color= "blue";
    ele.style.fontSize= "30px";
}

// querySelectorAll()

let variable = document.querySelectorAll(".class1");
variable.forEach(function(ele){
    ele.style.backgroundColor = "yellow";
})

// addEventListener()

let button = document.getElementById("myButton");
button.addEventListener("click", function(){
    alert("Button was clicked!");
})