function createElement(tag, options = {}) {
    const element = document.createElement(tag);

    if (options.text) element.textContent = options.text;
    if (options.html) element.innerHTML = options.html;
    if (options.class) element.className = options.class;
    if (options.attrs) {
        for (const [key, value] of Object.entries(options.attrs)) {
            element.setAttribute(key, value);
        }
    }

    return element;
}

// ลองสร้าง
const createPTag = createElement("p", {
    text: "hello world",
    class: "just-try",
});

const createInputTag = createElement("input", {
    class: "input-username",
    attrs: {
        value: "",
        placeholder: "enter your username",
        required: true
    }
});

// ลอง console.log มาดู
console.log(createPTag);
console.log(createInputTag);


// ลองเอาไปใช้จริง
let demoElement = document.getElementById("demo");
demoElement.appendChild(createInputTag)