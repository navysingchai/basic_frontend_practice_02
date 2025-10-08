// Step 1: Create an array to hold quote objects
let quotes = []

// Step 2: Select the DOM element where quotes will be rendered
const quoteList = document.getElementById("quote-list")

// Step 3: Define a function called renderQuotes()
// This function should:
// - Clear the quoteList element
// - Loop through the quotes array
// - For each quote, create a <p> element with content and author
// - Append each <p> to quoteList
function renderQuotes() {
    quoteList.textContent = "";
    quotes.forEach(q => {
        const p = document.createElement("p");
        p.textContent = `content : ${q.content}, author : ${q.author}`;
        quoteList.appendChild(p);
    })
}

// Step 4: Add test quotes manually and call renderQuotes()
// Example:
// addQuote('Stay hungry, stay foolish.', 'Steve Jobs')
// renderQuotes();
function addQuote(content, author) {
    const quote = { content, author }
    quotes.push(quote)
    return quote
}
addQuote('Stay hungry, stay foolish.', 'Steve Jobs')
addQuote('Stay hungry, stay foolish 55555.', 'Steve Jobs....')
addQuote('Stay hungry, stay foolish 6.', 'Steve Jobs i love you')
addQuote('Stay hungry, stay foolish 4000.', 'Steve Jobs 3000')
renderQuotes();