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
  let i = 0;
  let getRandomArbitrary = () => {
    i = Math.random() * (22 - 1) + 1;
    i = Math.round(i)
    console.log(i)
    return Number(i)
  }
  getRandomArbitrary();
  quotesText.innerHTML = quotes[i].quotesText
  quotesAuthor.innerHTML = quotes[i].author
}

// Button
let quotesButton = document.querySelector('.quotes-btn');
let quotesSvg = document.querySelector('.quotes-btn__svg');

quotesButton.onmouseover = function () {
  quotesSvg.style.transition = 'all 700ms ease-in-out';
  quotesSvg.style.transform = 'rotate(-40deg)';
};

quotesButton.onmouseleave = function () {
  quotesSvg.style.transition = 'all 700ms ease-out';
  quotesSvg.style.transform = 'rotate(0deg)';
};

quotesButton.addEventListener('click', (e) => {
  quotesSvg.style.transition = 'all 800ms ease-in';
  quotesSvg.style.transform = 'rotate(-360deg)';
  setTimeout(() => {
    quotesSvg.style.transition = 'all 100ms ease-out';
    quotesSvg.style.transform = 'rotate(-380deg)';
    setTimeout(() => {
      quotesSvg.style.transition = 'all 200ms ease-in';
      quotesSvg.style.transform = 'rotate(-360deg)';
      setTimeout(() => {
        quotesSvg.style.transition = 'all 150ms ease-out';
        quotesSvg.style.transform = 'rotate(-365deg)';
      }, 200);
    }, 200);
  }, 800);
  setTimeout(() => {
    quotesInHTML();
  }, 800)
});