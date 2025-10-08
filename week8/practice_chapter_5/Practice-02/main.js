const box = document.getElementById("box");
const btns = document.getElementsByTagName("button");
Array.from(btns).forEach(b => {
    b.addEventListener('click', () => {
        box.style.backgroundColor = b.getAttribute("data-color");
    });
})