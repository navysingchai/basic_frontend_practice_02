// display all child nodes under <ul id="appetizer">

const appetizerByID = document.getElementById("appetizer");

console.log(appetizerByID.childNodes);
console.log(appetizerByID.childNodes[1]);
console.log(appetizerByID.childNodes[5]);
console.log(appetizerByID.childNodes[7]);


const meatFirstElement = document.querySelector(".meat"); //single object
const meatAllElements = document.querySelectorAll(".meat"); // array like (cann't use method about functional must Array.from)
console.log(meatFirstElement)
console.log(meatAllElements)


// find meat element that a text value contains "soup"
meatAllElements.forEach(m => m.textContent.toLowerCase().includes("soup") ? console.log(m) : "");