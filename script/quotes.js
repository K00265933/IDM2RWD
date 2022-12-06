

let apiQuotes = [];   //this is a declaration of a global array variable

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');

const newQuoteBtn = document.getElementById('newQuote');

//Show New Quote
function newQuote() {

    //Pick a random quote from array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
    
    //Check if Author field is blank and replace it with 'Unknown'
    if(!quote.author){
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }

    //check quote length to determine styling
    if(quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }

    //Set Quote
    quoteText.textContent = quote.text;
    
    /*authorText.textContent = quote.author;
    quoteText.textContent = quote.text; */

}

// Get Quotes From API
async function getQuotes() {          //function!  
                                            //async: not syncronyous, not at same time
    const apiUrl = 'https://raw.githubusercontent.com/K00265933/IDM2RWD/work_files/quotescript.js';
    try {
        const response = await fetch(apiUrl);   //get json info and store it in the apiQuotes array
        apiQuotes = await response.json();      //json: JavaScript Object Notation
        console.log(apiQuotes);
    } catch (error) {
        // Catch Error Here
        alert("This is an error - not able to find the quotes api");
    }

}


// On Load
getQuotes();

newQuoteBtn.addEventListener('click', newQuote);
