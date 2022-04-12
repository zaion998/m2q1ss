// Collection Of Quote
const quotes = [{
    quote: `Whoever is happy will make others happy.`,
    author: `- Anne Frank`
}, {
    quote: `I don't think of all the misery, but of the beauty that still remains.`,
    author: `- Anne Frank`
}, {
    quote: `No one has ever become poor by giving.`,
    author: `- Anne Frank`
}, {
    quote: `I can shake off everything as I write; my sorrows disappear, my courage is reborn.`,
    author: `- Anne Frank`
}, {
    quote: `Think of all the beauty still left around you and be happy.`,
    author: `- Anne Frank`

}, ]
// New Quote Button
const quoteBtn = document.getElementById('quote-btn');
// Get Quote and author Section
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
// Event Handler
quoteBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
})