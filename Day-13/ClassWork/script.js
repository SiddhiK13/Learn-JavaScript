// 1. Practice the DOM manipulations in separate files
// Manipulating new elements: 

// createElement( )

let ele = document.createElement("button");
ele.textContent="Click me!";
document.body.appendChild(ele);
document.body.appendChild(document.createElement("br"));
// createTextNode( )

let text = document.createTextNode("Hello, World!");
document.body.appendChild(text);

// Modifying element content: 
// appendChild()
let parent = document.getElementById("parentDiv");
let child = document.createElement("p");
child.textContent = "This is a new paragraph.";
parent.appendChild(child);

// insertBefore( )
let newChild = document.createElement("span");
newChild.textContent = "This is a new span.";
parent.insertBefore(newChild, child);

// replaceChild( )
let replacementChild = document.createElement("div");
replacementChild.textContent = "This is a replacement div.";
parent.replaceChild(replacementChild, child);

// removeChild( )
parent.removeChild(newChild);

