let indexQuote = 0;
let getRandomArbitrary = () => {
  indexQuote = Math.random() * (22 - 1) + 1;
  indexQuote = Math.round(indexQuote)
  return Number(indexQuote)
}

let quotesText = document.querySelector('.quotes__text');
let quotesAuthor = document.querySelector('.quotes__author');
let quotesBtn = document.querySelector('.quotes-btn');
let requestQuotes = new XMLHttpRequest();
let quotes = {};

requestQuotes.open('GET', './json/quotes.json', true);
requestQuotes.responseType = 'json'
requestQuotes.send();
requestQuotes.onload = function () {
  getRandomArbitrary();
  quotes = requestQuotes.response;
  quotesText.innerHTML = `&mdash; ${quotes[indexQuote].quotesText}`
  quotesAuthor.innerHTML = `&laquo;${quotes[indexQuote].author}&raquo;`
};



let quotesInHTML = () => {
  getRandomArbitrary();
  quotesText.innerHTML = `&mdash; ${quotes[indexQuote].quotesText}`
  quotesAuthor.innerHTML = `&laquo;${quotes[indexQuote].author}&raquo;`
}

// Button
let quotesButton = document.querySelector('.quotes-btn');
let quotesSvg = document.querySelector('.quotes-btn__svg');

quotesButton.onmouseover = function () {
  quotesSvg.style.transition = 'all 400ms ease-in-out';
  quotesSvg.style.transform = 'rotate(-90deg)';
};

quotesButton.onmouseleave = function () {
  quotesSvg.style.transition = 'all 400ms ease-in-out';
  quotesSvg.style.transform = 'rotate(0deg)';
};

quotesButton.addEventListener('click', (e) => {
  loadedDotToRight()
  loadedDotToLeft()
  setTimeout(() => {
    loadedDotToLeft()
    loadedDotToRight()
  }, 700)
  quotesSvg.style.transition = 'all 500ms ease-in';
  quotesSvg.style.transform = 'rotate(-540deg)';
  setTimeout(() => {
    quotesSvg.style.transition = 'all 100ms ease-out';
    quotesSvg.style.transform = 'rotate(-560deg)';
    setTimeout(() => {
      quotesSvg.style.transition = 'all 200ms ease-in';
      quotesSvg.style.transform = 'rotate(-540deg)';
      setTimeout(() => {
        quotesSvg.style.transition = 'all 150ms ease-out';
        quotesSvg.style.transform = 'rotate(-545deg)';
      }, 200);
    }, 200);
  }, 500);
  setTimeout(() => {
    quotesInHTML();
  }, 500)
});