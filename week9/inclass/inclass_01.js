const [h1] = document.getElementsByTagName("h1");

let yourName = prompt("What is your name ?", "enter your name");
let nameConfirm = null;

if(yourName.trim().length !== 0 && yourName?.trim() !== null) {
    nameConfirm = confirm(`are you ${yourName}`);
}
yourName = nameConfirm ? yourName : "Guest"
alert(`Hello ${yourName}`);

h1.textContent += ` ${yourName}`;