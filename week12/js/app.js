import * as quote from './feature/quote/quoteManagement.js';

document.addEventListener('DOMContentLoaded', async() => {
    const quoteList = document.getElementById("quoteList");

    const getQuotes = await quote.loadQuotes();
    getQuotes.forEach(q => {
        quoteList.innerHTML += `
            <div class="quote-card" data-id="${q.id}">
                <p>${q.content}</p>
                <p class="author">${q.author}</p>
                <div class="actions">
                    <button class="edit" data-id="${q.id}">Edit</button>
                    <button class="delete" data-id="${q.id}">Delete</button>
                </div>
            </div>
        `;
    })
});