// console.log(window.document) //root node
// console.log(document) //root node
// console.log(typeof document)
// console.log(document.getElementById("123"))
// const htmlElement = document.documentElement
// console.log(htmlElement)

// console.log(htmlElement.parentElement) //null
// console.log(htmlElement.parentNode) //root node
// if (htmlElement.parentNode === document) {
//   console.log("parent of html is a root node")
// }

// console.log(document.firstChild) //<!DOCTYPE html>
// console.log(document.firstChild.nextSibling)
// //<!-- sample comment #1 -->
// console.log(document.firstChild.previousSibling) //null
// console.log(document.firstElementChild) //<html>
// console.log(document.firstElementChild.previousSibling) //<!-- sample comment #1 -->
// console.log(document.lastChild) //<!-- sample comment #3 -->
// console.log(document.lastElementChild) //<html lang="en">


const divElement = document.getElementById("123");

// get all child
const divChildNode = divElement.childNodes;
console.log(divChildNode.length);
divChildNode.forEach(c => console.log(c)); // ออกมาหมดเลย

console.log("divChildren = divElement.children");
const divChildren = divElement.children; // คัดมาให้เฉพาะ element 
console.log(divChildren.length);
console.log(divChildren);
for (let i = 0; i < divChildren.length; i++) {
    console.log(divChildren[i]);
}

// get all attribute
console.log("get all attribute");
const divAttrs = divElement.attributes;
console.log(divAttrs);
console.log(divAttrs.length);
for (let i = 0; i < divAttrs.length; i++) {
    console.log(divAttrs[i]);
    console.log("name : ", divAttrs[i]['name']);
    console.log("value : ", divAttrs[i]['value']);
    console.log("owner element : ", divAttrs[i]['ownerElement']);
    console.log("-------------------");
}

// get one attribute value
console.log("divElement.getAttribute('id')", divElement.getAttribute("id"));


console.log("node type");
console.log(divElement.nodeType);
console.log(divElement.nodeName);
console.log(divElement.nodeValue);

// 1. What is the node type of first child of root node
// 2. if node type is an HTML nod edisplay "Hello , HTML node" otherwise "Hello, any node"

// the node type of first child of root node
// document is root node
// document.firstChild is first child of root node
console.log(document.firstChild.nodeType); 

if(document.firstChild.nodeType === Node.ELEMENT_NODE) {
    console.log("Hello HTML NODE");
}else {
    console.log("Hello ANY NODE");
}