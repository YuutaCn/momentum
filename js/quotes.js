let requestQuotes = new XMLHttpRequest();
let quotes = {};
requestQuotes.open('GET', './json/quotes.json', true);
requestQuotes.responseType = 'json'
requestQuotes.send();
requestQuotes.onload = function () {
  quotes = requestQuotes.response;
  let getRandomArbitrary = () => {
    let i = Math.random() * (22 - 1) + 1;
    i = Math.round(i)
    console.log(i)
    return Number(i)
  }
  quotesText.innerHTML = quotes[getRandomArbitrary()].quotesText
  quotesAuthor.innerHTML = quotes[getRandomArbitrary()].author
};

let quotesText = document.querySelector('.quotes__text');
let quotesAuthor = document.querySelector('.quotes__author');
let quotesBtn = document.querySelector('.quotes-btn');


let quotesInHTML = () => {
  let getRandomArbitrary = () => {
    let i = Math.random() * (22 - 1) + 1;
    i = Math.round(i)
    console.log(i)
    return Number(i)
  }
  quotesText.innerHTML = quotes[getRandomArbitrary()].quotesText
  quotesAuthor.innerHTML = quotes[getRandomArbitrary()].author
}
