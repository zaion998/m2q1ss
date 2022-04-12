// Collection Of Quote
const quotes = [{
    quote: `Better slip with foot than tongue.`,
    author: `- Benjamin Franklin`
}, {
    quote: `He that lies down with Dogs, shall rise up with fleas.`,
    author: `- Benjamin Franklin`
}, {
    quote: `There never was a good war or a bad peace.`,
    author: `- Benjamin Franklin`
}, {
    quote: `He that falls in love with himself will have no rivals.`,
    author: `- Benjamin Franklin`
}, {
    quote: `Love your Enemies, for they tell you your Faults`,
    author: `- Benjamin Franklin`

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