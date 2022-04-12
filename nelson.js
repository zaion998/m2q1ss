// Collection Of Quote
const quotes = [{
    quote: `Nothing’s impossible.`,
    author: `- Nelson Mandela`
}, {
    quote: `What counts in life is not the mere fact that we have lived. It is what difference we have made to the lives of others.`,
    author: `- Nelson Mandela`
}, {
    quote: `Overcoming poverty is not a task of charity, it is an act of justice.`,
    author: `- Nelson Mandela`
}, {
    quote: `A winner is a dreamer who never gives up.`,
    author: `- Nelson Mandela`
}, {
    quote: `It is in your hands, to make a better world for all who live in it.`,
    author: `- Nelson Mandela`

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