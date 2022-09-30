/*
  array containing the quotes objects with quote, source
  also citation and year if available. 
*/
let backGroundColors = ['red', 'blue', 'purple', 'grey', 'green'];
let quotes = [
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    source: 'Walt Disney',
    year: 1957,
    tag: 'motivational'
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

/*
1. Function will generate a random number from 1 to 5
2. the random number gets assigned to an object in the quotes array
3. returned from the function is a random object from the quotes array.
*/
let getRandomQuote = () => {
  let getRandomNumber = Math.floor(Math.random() * quotes.length);
  let getRandomQuote = quotes[getRandomNumber];
  return getRandomQuote;
};


/* PrintQuote()  recieves the random quote returned from getRandomQuote()
    randomQuote variable accesses the entire random quote object from getRandomQuote()
    create a string using the value from the quote key and the source key
*/
function printQuote() {
  let randomQuote = getRandomQuote();
  let html = `
  <p> ${randomQuote.quote} </p>
  <p class="source"> ${randomQuote.source} 
  `

  /*
    checks to see if the object contains either a citation key or a year key
    if citation key is true, the value gets concatenated to the html variable inside the <p> tag
    if year key is true, the value gets concatenated to the html variable also inside the <p> tag
  */
  
  if (randomQuote.citation) {
    html += `<span>${randomQuote.citation}</span>`
  };

  if (randomQuote.year) {
    html += `<span>${randomQuote.year}</span>`
  }

  if (randomQuote.tag) {
    html += ` <span>${randomQuote.tag}</span>`
  }

  html += '</p>'

  //html variable gets concatenated to the <p> tags with classes .quote and .source
  document.querySelector('.quote, .source').innerHTML = html;
}

function changesBackgroundColor() {
  let randomNumber = Math.floor(Math.random() * backGroundColors.length);
  let randomColor = backGroundColors[randomNumber];

  document.querySelector('body').style.backgroundColor = randomColor;
  console.log(randomColor) ;

};
changesBackgroundColor();


/*
function to load a new quote every 3 seconds
If the button is clicked clearInterval is called and a new interval of 3 seconds is set
if the button is not clicked the interval runs as normal
*/
let timerId = setInterval(() => {
  console.log('hi')
  printQuote();
  changesBackgroundColor();
}, 3000);


document.querySelector('button').addEventListener('click', () => {
  clearInterval(timerId);
  timerId = setInterval(() => {
    console.log('hi');
    printQuote();
    changesBackgroundColor();
  }, 3000);
});

document.getElementById('load-quote').addEventListener("click", printQuote, false);
document.getElementById('load-quote').addEventListener("click", changesBackgroundColor, false);
printQuote();