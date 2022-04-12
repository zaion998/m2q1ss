// Collection Of Quote
const quotes = [{
    quote: `Hope is a waking dream.`,
    author: `- Aristotle`
}, {
    quote: `Educating the mind without educating the heart is no education at all.`,
    author: `- Aristotle`
}, {
    quote: `What is a friend? A single soul dwelling in two bodies.`,
    author: `- Aristotle`
}, {
    quote: `It is the mark of an educated mind to be able to entertain a thought without accepting it.`,
    author: `- Aristotle`
}, {
    quote: `Knowing yourself is the beginning of all wisdom.`,
    author: `- Aristotle`

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