// Collection Of Quote
const quotes = [{
    quote: `The only thing we have to fear is fear itself.`,
    author: `- Franklin D. Roosevelt`
}, {
    quote: `The Nation that destroys its soil destroys itself.`,
    author: `- Franklin D. Roosevelt`
}, {
    quote: `It is an unfortunate human failing that a full pocketbook often groans more loudly than an empty stomach.`,
    author: `- Franklin D. Roosevelt`
}, {
    quote: `A government can be no better than the public opinion which sustains it.`,
    author: `- Franklin D. Roosevelt`
}, {
    quote: `Let me assert my firm belief that the only thing we have to fear is fear itself—nameless, unreasoning, unjustified terror which paralyzes needed efforts to convert retreat into advance.`,
    author: `- Franklin D. Roosevelt`

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