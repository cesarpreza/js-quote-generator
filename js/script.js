/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    source: 'Walt Disney',
    year: 1957
  },
  {
    quote: 'With great power comes great responsibility',
    source: 'Uncle Ben',
    citation: 'Amazing Fantasy #15',
    year: 1962
  },
  {
    quote: 'May you always remember to enjoy the road, especially when it\'\s a hard one.',
    source: 'Kobe Bryant'
  },
  {
    quote: 'You miss 100% of the shots you never take',
    source: 'Wayne Gretzky',
    year: 1983
  },
  {
    quote: 'Knowing yourself is the beginning of all wisdom.',
    source: 'Aristotle'
  },

]

/***
 * `getRandomQuote` function
***/
/*
1. Function will generate a random number from 1 to 5
2. the random number gets assigned to an inded in the quotes array
3. returned from the function is a random index from the quotes array.
*/
let getRandomQuote = () => {
  let getRandomNumber = Math.floor(Math.random() * quotes.length);
  let getRandomQuote = quotes[getRandomNumber];
  return getRandomQuote;
}
//getRandomQuote();


/***
 * `printQuote` function
***/
function printQuote() {
  let randomQuote = getRandomQuote();
  let html = `
  <p> ${randomQuote.quote} </p>
  <p class="source"> ${randomQuote.source} 
  `//</p>;

  if (randomQuote.citation) {
    html += ` <span>${randomQuote.citation}</span> `
  };

  if (randomQuote.year) {
    html += ` <span>${randomQuote.year}</span> `
  }

  document.querySelector('.quote, .source').innerHTML = html;
  console.log(randomQuote);
}
printQuote();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);