// const box = document.getElementById("box");
// const addBtn = document.getElementById("add");
// const removeBtn = document.getElementById("remove");
// const toggleBtn = document.getElementById("toggle");

// addBtn.addEventListener("click", () => {
//     box.classList.add("bordered");
// });

// removeBtn.addEventListener("click", () => {
//     box.classList.remove("bordered");
// });

// toggleBtn.addEventListener("click", () => {
//     box.classList.toggle("bordered");
// });

const box = document.getElementById("box");
const btns = document.getElementsByTagName("button");
const events = ['add', 'remove', 'toggle'];

for (let i = 0; i < events.length; i++) {
    btns[i].addEventListener('click', () => {
        box.classList[events[i]]("bordered")
    })
}