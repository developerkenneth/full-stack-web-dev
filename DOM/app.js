/**
 * createElement("p")
 * Node.appendChild():
 * Document.createTextNode():
 * Node.cloneNode()
 *  Node.removeChild()
 * Element.remove():
 */

// console.log(navigator);
// if(navigator.onLine == false){
//   alert("you are ofline, kindly turn on your internet");
// }

// console.log(window);

// console.log(document.getRootNode().firstChild.firstChild);

/**
 * root node: is the  father of everything.
 * parent node :
 * child node 
 * descendant node
 * sibling node
 */
// selecting node in a dom 

const btn = document.querySelector("button");
const body = document.querySelector("body");

const section = document.createElement("section"); //created a section
body.prepend(section);

const h1 = document.createElement("h1");

const helloWorld = document.createTextNode("Hello world");
h1.append(helloWorld);

const div = document.createElement("div");

// div.append(helloWorld.cloneNode());

const p = document.createElement("p");
p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eaque ut ratione error dignissimos eos nostrum veritatis? Hic facilis earum, qui neque perspiciatis assumenda, corrupti eaque laborum atque natus similique.";
const img = document.createElement("img");

section.appendChild(h1);
section.appendChild(div);

div.append(p);
div.appendChild(img);


btn.addEventListener("click", ()=>{
    img.setAttribute("src", "dashboard.png");
})

console.log(img.getAttribute("src"));
console.log(div);
// div.removeChild(img);


