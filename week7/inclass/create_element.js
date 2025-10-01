const pElement = document.createElement("p");

pElement.setAttribute('id', 'p5');

const pText = document.createTextNode("#5");

pElement.appendChild(pText);

const body = document.body;
body.appendChild(pElement);


console.log(body.innerHTML);
console.log(body.innerText);
console.log(body.textContent);