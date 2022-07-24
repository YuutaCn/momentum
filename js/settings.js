// Watch
let clockAndDate = document.querySelector('#clock')
let hideClock = document.querySelector('.hide-clock')


let updaterClock = () => {
  if (localStorage.getItem('clockAndDateOp') != 'hidden') {
    clockAndDate.style.transition = 'all 700ms ease-out';
    clockAndDate.style.opacity = '1';
    clockAndDate.style.visibility = 'visible';
    clockAndDate.style.transform = 'scale(1, 1)'
    hideClock.innerHTML = 'Show'
    hideClock.style.transition = '700ms'
    hideClock.style.border = 'solid 1px rgba(177, 226, 156, 0.8)';
    hideClock.onmouseover = function () {
      hideClock.style.background = "rgb(36, 36, 36)";
    };
    hideClock.onmouseleave = function () {
      hideClock.style.background = "rgb(18, 18, 18)";
    }
  } else {
    clockAndDate.style.transition = 'all 700ms ease-in';
    clockAndDate.style.opacity = '0';
    clockAndDate.style.visibility = 'hidden';
    clockAndDate.style.transform = 'scale(0.8, 0.8)'
    hideClock.innerHTML = 'Hide';
    hideClock.style.transition = '700ms'
    hideClock.style.border = 'solid 1px rgba(226, 156, 156, 0.8)';
    hideClock.onmouseover = function () {
      hideClock.style.background = "rgb(36, 36, 36)";
    };
    hideClock.onmouseleave = function () {
      hideClock.style.background = "rgb(18, 18, 18)";
    };
  }
}

updaterClock();


hideClock.addEventListener('click', (e) => {
  console.log('Click 0');
  if (localStorage.getItem('clockAndDateOp') == 'hidden') {
    localStorage.setItem('clockAndDateOp', 'visible');
    updaterClock();
  } else {
    localStorage.setItem('clockAndDateOp', 'hidden');
    updaterClock();
  }

});

// GitHub logo
let githubId = document.querySelector('.github-btn')
let hideGithub = document.querySelector('.hide-github')


let updaterGithub = () => {
  if (localStorage.getItem('githubIdOp') != 'hidden') {
    githubId.style.transition = 'all 700ms ease-out';
    githubId.style.opacity = '1';
    githubId.style.visibility = 'visible';
    githubId.style.transform = 'scale(1, 1)'
    hideGithub.innerHTML = 'Show'
    hideGithub.style.transition = '700ms'
    hideGithub.style.border = 'solid 1px rgba(177, 226, 156, 0.8)';
    hideGithub.onmouseover = function () {
      hideGithub.style.background = "rgb(36, 36, 36)";
    };
    hideGithub.onmouseleave = function () {
      hideGithub.style.background = "rgb(18, 18, 18)";
    }
  } else {
    githubId.style.transition = 'all 700ms ease-in';
    githubId.style.opacity = '0';
    githubId.style.visibility = 'hidden';
    githubId.style.transform = 'scale(0.8, 0.8)'
    hideGithub.innerHTML = 'Hide';
    hideGithub.style.transition = '700ms'
    hideGithub.style.border = 'solid 1px rgba(226, 156, 156, 0.8)';
    hideGithub.onmouseover = function () {
      hideGithub.style.background = "rgb(36, 36, 36)";
    };
    hideGithub.onmouseleave = function () {
      hideGithub.style.background = "rgb(18, 18, 18)";
    };
  }
}

updaterGithub();


hideGithub.addEventListener('click', (e) => {
  console.log('Click 0');
  if (localStorage.getItem('githubIdOp') == 'hidden') {
    localStorage.setItem('githubIdOp', 'visible');
    updaterGithub();
  } else {
    localStorage.setItem('githubIdOp', 'hidden');
    updaterGithub();
  }
});


// Auto Background
let autoBtn = document.querySelector('.autoBg');

let autoBg = () => {
  if (localStorage.getItem('autoBtnOp') != 'disabled') {
    autoBtn.innerHTML = 'Enable'
    autoBtn.style.transition = '700ms'
    autoBtn.style.border = 'solid 1px rgba(177, 226, 156, 0.8)';
    autoBtn.onmouseover = function () {
      autoBtn.style.background = "rgb(36, 36, 36)";
    };
    autoBtn.onmouseleave = function () {
      autoBtn.style.background = "rgb(18, 18, 18)";
    }
  } else {
    autoBtn.innerHTML = 'Disable';
    autoBtn.style.transition = '700ms'
    autoBtn.style.border = 'solid 1px rgba(226, 156, 156, 0.8)';
    autoBtn.onmouseover = function () {
      autoBtn.style.background = "rgb(36, 36, 36)";
    };
    autoBtn.onmouseleave = function () {
      autoBtn.style.background = "rgb(18, 18, 18)";
    };
  }
}

autoBg();

autoBtn.addEventListener('click', (e) => {
  console.log('Click 0');
  if (localStorage.getItem('autoBtnOp') == 'enabled') {
    localStorage.setItem('autoBtnOp', 'disabled');
    autoBg();
  } else {
    localStorage.setItem('autoBtnOp', 'enabled');
    autoBg();
  }
});

// Quotes
let quotesId = document.querySelector('.quotes')
let hideQuotes = document.querySelector('.quotes-settings')


let updaterQuotes = () => {
  if (localStorage.getItem('quotesIdOp') != 'hidden') {
    quotesId.style.transition = 'all 700ms ease-out';
    quotesId.style.opacity = '1';
    quotesId.style.visibility = 'visible';
    quotesId.style.transform = 'scale(1, 1)'
    hideQuotes.innerHTML = 'Show'
    hideQuotes.style.transition = '700ms'
    hideQuotes.style.border = 'solid 1px rgba(177, 226, 156, 0.8)';
    hideQuotes.onmouseover = function () {
      hideQuotes.style.background = "rgb(36, 36, 36)";
    };
    hideQuotes.onmouseleave = function () {
      hideQuotes.style.background = "rgb(18, 18, 18)";
    }
  } else {
    quotesId.style.transition = 'all 700ms ease-in';
    quotesId.style.opacity = '0';
    quotesId.style.visibility = 'hidden';
    quotesId.style.transform = 'scale(0.8, 0.8)'
    hideQuotes.innerHTML = 'Hide';
    hideQuotes.style.transition = '700ms'
    hideQuotes.style.border = 'solid 1px rgba(226, 156, 156, 0.8)';
    hideQuotes.onmouseover = function () {
      hideQuotes.style.background = "rgb(36, 36, 36)";
    };
    hideQuotes.onmouseleave = function () {
      hideQuotes.style.background = "rgb(18, 18, 18)";
    };
  }
}

updaterQuotes();


hideQuotes.addEventListener('click', (e) => {
  if (localStorage.getItem('quotesIdOp') == 'hidden') {
    localStorage.setItem('quotesIdOp', 'visible');
    updaterQuotes();
  } else {
    localStorage.setItem('quotesIdOp', 'hidden');
    updaterQuotes();
  }
});


// Welcome text
let welcomeId = document.querySelector('.main__hello')
let hideWelcome = document.querySelector('.welcome-settings')


let updaterWelcome = () => {
  if (localStorage.getItem('welcomeIdOp') != 'hidden') {
    welcomeId.style.transition = 'all 700ms ease-out';
    welcomeId.style.opacity = '1';
    welcomeId.style.visibility = 'visible';
    welcomeId.style.transform = 'scale(1, 1)'
    hideWelcome.innerHTML = 'Show'
    hideWelcome.style.transition = '700ms'
    hideWelcome.style.border = 'solid 1px rgba(177, 226, 156, 0.8)';
    hideWelcome.onmouseover = function () {
      hideWelcome.style.background = "rgb(36, 36, 36)";
    };
    hideWelcome.onmouseleave = function () {
      hideWelcome.style.background = "rgb(18, 18, 18)";
    }
  } else {
    welcomeId.style.transition = 'all 700ms ease-in';
    welcomeId.style.opacity = '0';
    welcomeId.style.visibility = 'hidden';
    welcomeId.style.transform = 'scale(0.8, 0.8)'
    hideWelcome.innerHTML = 'Hide';
    hideWelcome.style.transition = '700ms'
    hideWelcome.style.border = 'solid 1px rgba(226, 156, 156, 0.8)';
    hideWelcome.onmouseover = function () {
      hideWelcome.style.background = "rgb(36, 36, 36)";
    };
    hideWelcome.onmouseleave = function () {
      hideWelcome.style.background = "rgb(18, 18, 18)";
    };
  }
}

updaterWelcome();


hideWelcome.addEventListener('click', (e) => {
  if (localStorage.getItem('welcomeIdOp') == 'hidden') {
    localStorage.setItem('welcomeIdOp', 'visible');
    updaterWelcome();
  } else {
    localStorage.setItem('welcomeIdOp', 'hidden');
    updaterWelcome();
  }
});


// Welcome text
let loadingId = document.querySelector('.loaded-background')
let hideLoading = document.querySelector('.loading-settings')


let updaterLoading = () => {
  if (localStorage.getItem('loadingIdOp') != 'hidden') {
    loadingId.style.transition = 'all 700ms ease-out';
    loadingId.style.opacity = '1';
    loadingId.style.visibility = 'visible';
    loadingId.style.transform = 'scale(1, 1)'
    hideLoading.innerHTML = 'Show'
    hideLoading.style.transition = '700ms'
    hideLoading.style.border = 'solid 1px rgba(177, 226, 156, 0.8)';
    hideLoading.onmouseover = function () {
      hideLoading.style.background = "rgb(36, 36, 36)";
    };
    hideLoading.onmouseleave = function () {
      hideLoading.style.background = "rgb(18, 18, 18)";
    }
  } else {
    loadingId.style.transition = 'all 700ms ease-in';
    loadingId.style.opacity = '0';
    loadingId.style.visibility = 'hidden';
    loadingId.style.transform = 'scale(0.8, 0.8)'
    hideLoading.innerHTML = 'Hide';
    hideLoading.style.transition = '700ms'
    hideLoading.style.border = 'solid 1px rgba(226, 156, 156, 0.8)';
    hideLoading.onmouseover = function () {
      hideLoading.style.background = "rgb(36, 36, 36)";
    };
    hideLoading.onmouseleave = function () {
      hideLoading.style.background = "rgb(18, 18, 18)";
    };
  }
}

updaterLoading();


hideLoading.addEventListener('click', (e) => {
  if (localStorage.getItem('loadingIdOp') == 'hidden') {
    localStorage.setItem('loadingIdOp', 'visible');
    updaterLoading();
  } else {
    localStorage.setItem('loadingIdOp', 'hidden');
    updaterLoading();
  }
});