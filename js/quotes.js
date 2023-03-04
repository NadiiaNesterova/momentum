


const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

let quoteNumber = 0;

function randQuote(){
    quoteNumber = Math.floor(Math.random()*60);
}

randQuote();

async function getQuotes(lang) {  
    let quotes = '';
    if (lang === 'ru') quotes = './js/quotes/dataRu.json';
    else if(lang === 'en') quotes = './js/quotes/dataEn.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    quote.textContent = `${data[quoteNumber].text}`;
    author.textContent = `${data[quoteNumber].author}`;   
}
getQuotes('en');

function changeQuote(){
    quoteNumber ++;
    if (quoteNumber > 2) quoteNumber = 0;
    getQuotes(lang);
}

document.querySelector('.change-quote').addEventListener('click', changeQuote);

