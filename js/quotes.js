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
  quotesText.innerHTML = `&mdash; ${quotes[i].quotesText}`
  quotesAuthor.innerHTML = `&laquo;${quotes[i].author}&raquo;`
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
  quotesText.innerHTML = `&mdash; ${quotes[i].quotesText}`
  quotesAuthor.innerHTML = `&laquo;${quotes[i].author}&raquo;`
}

// Button
let quotesButton = document.querySelector('.quotes-btn');
let quotesSvg = document.querySelector('.quotes-btn__svg');

quotesButton.onmouseover = function () {
  quotesSvg.style.transition = 'all 700ms ease-in-out';
  quotesSvg.style.transform = 'rotate(-90deg)';
};

quotesButton.onmouseleave = function () {
  quotesSvg.style.transition = 'all 700ms ease-in-out';
  quotesSvg.style.transform = 'rotate(0deg)';
};

quotesButton.addEventListener('click', (e) => {
  loadedDotToRight()
  loadedDotToLeft()
  setTimeout(() => {
    loadedDotToLeft()
    loadedDotToRight()
  }, 700)
  quotesSvg.style.transition = 'all 800ms ease-in';
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
  }, 800);
  setTimeout(() => {
    quotesInHTML();
  }, 800)
});