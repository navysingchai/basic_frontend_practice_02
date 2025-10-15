import { addQuote, deleteQuote, getAllQuotes } from './quote.js'
// Lesson 3 - Events Starter

// Select DOM elements

// const quoteList =
// const form = ...
// const contentInput =
// const authorInput =
// const idInput =
// const randomBtn =
// const randomDisplay =
const needsElement = {
    quoteList: "quote-list",
    form: "quoteForm",
    contentInput: "content",
    authorInput: "author",
    idInput: "quoteId",
    randomBtn: "randomBtn",
    randomDisplay: "randomQuoteDisplay",
};
const ui = Object.entries(needsElement).reduce((acc, [key, id]) => {
    acc[key] = document.getElementById(id);
    return acc
}, {});

function createQuoteElement(quote) {
    // a quote element example
    //<section id="qurandomQuoteDisplayote-list">
    //  <div data-id="1">
    //    <p>Confidence comes from discipline and training</p>
    //    <p>Robert</p>
    //    <button class="edit-btn" data-id="1">
    //      Edit
    //    </button>
    //    <button class="delete-btn" data-id="1">
    //      Delete
    //    </button>
    //  </div>
    // </section>

    // div 
    const divElement = document.createElement("div");
    divElement.dataset.id = quote.id;

    // ทำการใส่ <p></p>
    [quote.content, quote.author].forEach(item => {
        const pElement = document.createElement("p");
        pElement.textContent = item;
        divElement.appendChild(pElement);
    });

    // ทำการใส่ button โดยมี class, textContent ตาม object พวกนี้
    [{ class: "edit-btn", textContent: "Edit" }, { class: "delete-btn", textContent: "Delete" }].forEach(item => {
        const btnElement = document.createElement("button");
        btnElement.textContent = item.textContent;
        btnElement.classList.add(item.class);
        btnElement.dataset.id = quote.id;

        divElement.appendChild(btnElement);
    });

    return divElement;
}

function createRandomQuoteElement(content, author) {
    const pElement = document.createElement("p");
    pElement.textContent = `${content} - ${author}`;
    return pElement;
}

function addRandomQuoteElementToDOM(quote) {
    ui.randomDisplay.appendChild(quote);
}

// Add, edit, delete quote functions

function addQuoteToDOM(quote) {
    ui.quoteList.appendChild(createQuoteElement(quote));
}
function updateQuoteInDOM(quote) { }

function deleteQuoteFromDOM(id) {
    deleteQuote(id);
    const quoteElement = ui.quoteList.querySelector(`[data-id="${id}"]`);
    if (quoteElement) quoteElement.remove();
}
function renderQuotes() {
    ui.quoteList.textContent = "";
    getAllQuotes().forEach(q => addQuoteToDOM(quote));
}

function showRandomQuote() {
    const rsQuotes = getAllQuotes();
    ui.randomDisplay.textContent = "";
    if(rsQuotes.length > 0) {
        const randomIndex = Math.floor(Math.random() * rsQuotes.length);
        const {content, author} = rsQuotes[randomIndex]
        addRandomQuoteElementToDOM(createRandomQuoteElement(content, author));
    }
}

// Event listeners for form submission, edit, and delete clicks
ui.form.addEventListener("submit", (e) => {
    e.preventDefault();
    addQuoteToDOM(addQuote(ui.contentInput.value, ui.authorInput.value));
    ui.contentInput.value = "";
    ui.authorInput.value = "";
});

ui.quoteList.addEventListener('click', (e) => {
    const target = e.target;
    if (String(target.classList[0]).includes("delete")) deleteQuoteFromDOM(target.dataset.id);
});

ui.randomBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showRandomQuote();
});