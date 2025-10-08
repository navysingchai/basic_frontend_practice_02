
// 1. display all child nodes under <ul id="appetizer">
console.log("------------------- 1 -------------------");
const appetizerByID = document.getElementById("appetizer");
console.log(appetizerByID.childNodes);

console.log(appetizerByID.childNodes[1]);
console.log(appetizerByID.childNodes[5]);
console.log(appetizerByID.childNodes[7]);


const meatFirstElement = document.querySelector(".meat"); //single object
const meatAllElements = document.querySelectorAll(".meat"); // array like (cann't use method about functional must Array.from)
console.log(meatFirstElement)
console.log(meatAllElements)


// 2. find meat element that a text value contains "soup"
console.log("------------------- 2 -------------------");
meatAllElements.forEach(m => m.textContent.toLowerCase().includes("soup") ? console.log(m.textContent) : "");

// 3. goto the first child element node under <ul id="soup"> and traverse all sibling
console.log("------------------- 3 -------------------");
const soupElement = appetizerByID.nextElementSibling;
for (let i = 0; i < soupElement.children.length; i++) {
    console.log(soupElement.children[i]);
}

// getElementsByName(); // return NodeList data type, implement forEach
const nameAttrElements = document.getElementsByName("fname");
console.log("nameAttrElements : ", nameAttrElements);
console.log("length of nameAttrElements : ", nameAttrElements.length);

// getElementsByTagName(); // return HTMLCollection data type
const inputElement = document.getElementsByTagName("input");
console.log("inputElement : ", inputElement);

// getElementsByClassName(); // return HTMLCollection data type
const veganElements = document.getElementsByClassName("vegan");
console.log("veganElements : ", veganElements);


// 4. find the first element of document that has an ID values "appetizer" or "soup"
console.log("------------------- 4 -------------------");
const appetizerORsoup = document.querySelector("#soup, #appetizer");
console.log(appetizerORsoup);

// 5. find all meat elements under <ul id="appetizer"> or <ul id="soup"> only
console.log("------------------- 5 -------------------");
const appetizerANDsoup = document.querySelectorAll("#soup, #appetizer");
appetizerANDsoup.forEach(a => {
    console.log("--------", a, "--------")
    Array.from(a.children).forEach(c => c.className === "meat" ? console.log(c) : "");
});

console.log("-------- #soup .meat, #appetizer .meat --------")
const appetizerANDsoup02 = document.querySelectorAll("#soup .meat, #appetizer .meat");
appetizerANDsoup02.forEach(a => console.log(a))




console.log("---------------------------------------- after brake ----------------------------------------");



// insert before