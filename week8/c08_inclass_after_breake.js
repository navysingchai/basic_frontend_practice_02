// insert before

// get it's parent
const soupElement = document.getElementById("soup");

// get reference node
let [refNode] = Array.from(soupElement.children).filter(e => e.textContent.trim().includes("Beef Soup"));

// create element
const new_li = document.createElement("li");
new_li.textContent = "Cabbage Soup";
new_li.setAttribute("class", "vegan");

soupElement.insertBefore(new_li, refNode);



// remove node
[refNode] = Array.from(soupElement.children).filter(e => e.textContent.trim().includes("Vegetable Soup"));
soupElement.removeChild(refNode)

// replace node
[refNode] = Array.from(soupElement.children).filter(e => e.textContent.trim().includes("Coconut Soup"));

const new_li_2 = document.createElement("li");
new_li_2.textContent = "Pork Soup";
new_li_2.setAttribute("class", "meat");
soupElement.replaceChild(new_li_2, refNode);