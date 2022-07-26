// Watch
let clockAndDate = document.querySelector('#clock')
let hideClock = document.querySelector('.hide-clock')


let updaterClock = () => {
  if (localStorage.getItem('clockAndDateOp') != 'hidden') {
    clockAndDate.style.transition = 'all 400ms ease-out';
    clockAndDate.style.opacity = '1';
    clockAndDate.style.visibility = 'visible';
    clockAndDate.style.transform = 'scale(1, 1)'
    hideClock.innerHTML = 'Видны'
    hideClock.style.transition = '400ms'
    hideClock.style.border = 'solid 1px rgba(177, 226, 156, 0.8)';
    hideClock.onmouseover = function () {
      hideClock.style.background = "rgb(36, 36, 36)";
    };
    hideClock.onmouseleave = function () {
      hideClock.style.background = "rgb(18, 18, 18)";
    }
  } else {
    clockAndDate.style.transition = 'all 400ms ease-in';
    clockAndDate.style.opacity = '0';
    clockAndDate.style.visibility = 'hidden';
    clockAndDate.style.transform = 'scale(0.8, 0.8)'
    hideClock.innerHTML = 'Скрыты';
    hideClock.style.transition = '400ms'
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
    githubId.style.transition = 'all 400ms ease-out';
    githubId.style.opacity = '1';
    githubId.style.visibility = 'visible';
    githubId.style.transform = 'scale(1, 1)'
    hideGithub.innerHTML = 'Виден'
    hideGithub.style.transition = '400ms'
    hideGithub.style.border = 'solid 1px rgba(177, 226, 156, 0.8)';
    hideGithub.onmouseover = function () {
      hideGithub.style.background = "rgb(36, 36, 36)";
    };
    hideGithub.onmouseleave = function () {
      hideGithub.style.background = "rgb(18, 18, 18)";
    }
  } else {
    githubId.style.transition = 'all 400ms ease-in';
    githubId.style.opacity = '0';
    githubId.style.visibility = 'hidden';
    githubId.style.transform = 'scale(0.8, 0.8)'
    hideGithub.innerHTML = 'Скрыт';
    hideGithub.style.transition = '400ms'
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
    autoBtn.innerHTML = 'Включена'
    autoBtn.style.transition = '400ms'
    autoBtn.style.border = 'solid 1px rgba(177, 226, 156, 0.8)';
    autoBtn.onmouseover = function () {
      autoBtn.style.background = "rgb(36, 36, 36)";
    };
    autoBtn.onmouseleave = function () {
      autoBtn.style.background = "rgb(18, 18, 18)";
    }
  } else {
    autoBtn.innerHTML = 'Выключена';
    autoBtn.style.transition = '400ms'
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
    quotesId.style.transition = 'all 400ms ease-out';
    quotesId.style.opacity = '1';
    quotesId.style.visibility = 'visible';
    quotesId.style.transform = 'scale(1, 1)'
    hideQuotes.innerHTML = 'Видны'
    hideQuotes.style.transition = '400ms'
    hideQuotes.style.border = 'solid 1px rgba(177, 226, 156, 0.8)';
    hideQuotes.onmouseover = function () {
      hideQuotes.style.background = "rgb(36, 36, 36)";
    };
    hideQuotes.onmouseleave = function () {
      hideQuotes.style.background = "rgb(18, 18, 18)";
    }
  } else {
    quotesId.style.transition = 'all 400ms ease-in';
    quotesId.style.opacity = '0';
    quotesId.style.visibility = 'hidden';
    quotesId.style.transform = 'scale(0.8, 0.8)'
    hideQuotes.innerHTML = 'Скрыты';
    hideQuotes.style.transition = '400ms'
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
    welcomeId.style.transition = 'all 400ms ease-out';
    welcomeId.style.opacity = '1';
    welcomeId.style.visibility = 'visible';
    welcomeId.style.transform = 'scale(1, 1)'
    hideWelcome.innerHTML = 'Виден'
    hideWelcome.style.transition = '400ms'
    hideWelcome.style.border = 'solid 1px rgba(177, 226, 156, 0.8)';
    hideWelcome.onmouseover = function () {
      hideWelcome.style.background = "rgb(36, 36, 36)";
    };
    hideWelcome.onmouseleave = function () {
      hideWelcome.style.background = "rgb(18, 18, 18)";
    }
  } else {
    welcomeId.style.transition = 'all 400ms ease-in';
    welcomeId.style.opacity = '0';
    welcomeId.style.visibility = 'hidden';
    welcomeId.style.transform = 'scale(0.8, 0.8)'
    hideWelcome.innerHTML = 'Скрыт';
    hideWelcome.style.transition = '400ms'
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
    loadingId.style.transition = 'all 400ms ease-out';
    loadingId.style.opacity = '1';
    loadingId.style.visibility = 'visible';
    loadingId.style.transform = 'scale(1, 1)'
    hideLoading.innerHTML = 'Видна'
    hideLoading.style.transition = '400ms'
    hideLoading.style.border = 'solid 1px rgba(177, 226, 156, 0.8)';
    hideLoading.onmouseover = function () {
      hideLoading.style.background = "rgb(36, 36, 36)";
    };
    hideLoading.onmouseleave = function () {
      hideLoading.style.background = "rgb(18, 18, 18)";
    }
  } else {
    loadingId.style.transition = 'all 400ms ease-in';
    loadingId.style.opacity = '0';
    loadingId.style.visibility = 'hidden';
    loadingId.style.transform = 'scale(0.8, 0.8)'
    hideLoading.innerHTML = 'Скрыта';
    hideLoading.style.transition = '400ms'
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


// Player
let PlayerId = document.querySelector('.player-full')
let hidePlayer = document.querySelector('.player-settings')


let updaterPlayer = () => {
  if (localStorage.getItem('PlayerIdOp') != 'hidden') {
    PlayerId.style.transition = 'all 400ms ease-out';
    PlayerId.style.opacity = '1';
    PlayerId.style.visibility = 'visible';
    PlayerId.style.transform = 'scale(1, 1)'
    hidePlayer.innerHTML = 'Включен'
    hidePlayer.style.transition = '400ms'
    hidePlayer.style.border = 'solid 1px rgba(177, 226, 156, 0.8)';
    hidePlayer.onmouseover = function () {
      hidePlayer.style.background = "rgb(36, 36, 36)";
    };
    hidePlayer.onmouseleave = function () {
      hidePlayer.style.background = "rgb(18, 18, 18)";
    }
  } else {
    PlayerId.style.transition = 'all 400ms ease-in';
    PlayerId.style.opacity = '0';
    PlayerId.style.visibility = 'hidden';
    PlayerId.style.transform = 'scale(0.8, 0.8)'
    hidePlayer.innerHTML = 'Выключен';
    hidePlayer.style.transition = '400ms'
    hidePlayer.style.border = 'solid 1px rgba(226, 156, 156, 0.8)';
    hidePlayer.onmouseover = function () {
      hidePlayer.style.background = "rgb(36, 36, 36)";
    };
    hidePlayer.onmouseleave = function () {
      hidePlayer.style.background = "rgb(18, 18, 18)";
    };
  }
}

updaterPlayer();


hidePlayer.addEventListener('click', (e) => {
  if (localStorage.getItem('PlayerIdOp') == 'hidden') {
    localStorage.setItem('PlayerIdOp', 'visible');
    updaterPlayer();
  } else {
    localStorage.setItem('PlayerIdOp', 'hidden');
    updaterPlayer();
  }
});


// Weather
let weatherId = document.querySelector('.weather-full')
let hideWeather = document.querySelector('.weather-settings')


let updaterWeather = () => {
  if (localStorage.getItem('weatherIdOp') != 'hidden') {
    weatherId.style.transition = 'all 400ms ease-out';
    weatherId.style.opacity = '1';
    weatherId.style.visibility = 'visible';
    weatherId.style.transform = 'scale(1, 1)'
    hideWeather.innerHTML = 'Видна'
    hideWeather.style.transition = '400ms'
    hideWeather.style.border = 'solid 1px rgba(177, 226, 156, 0.8)';
    hideWeather.onmouseover = function () {
      hideWeather.style.background = "rgb(36, 36, 36)";
    };
    hideWeather.onmouseleave = function () {
      hideWeather.style.background = "rgb(18, 18, 18)";
    }
  } else {
    weatherId.style.transition = 'all 400ms ease-in';
    weatherId.style.opacity = '0';
    weatherId.style.visibility = 'hidden';
    weatherId.style.transform = 'scale(0.8, 0.8)'
    hideWeather.innerHTML = 'Скрыта';
    hideWeather.style.transition = '400ms'
    hideWeather.style.border = 'solid 1px rgba(226, 156, 156, 0.8)';
    hideWeather.onmouseover = function () {
      hideWeather.style.background = "rgb(36, 36, 36)";
    };
    hideWeather.onmouseleave = function () {
      hideWeather.style.background = "rgb(18, 18, 18)";
    };
  }
}

updaterWeather();


hideWeather.addEventListener('click', (e) => {
  if (localStorage.getItem('weatherIdOp') == 'hidden') {
    localStorage.setItem('weatherIdOp', 'visible');
    updaterWeather();
  } else {
    localStorage.setItem('weatherIdOp', 'hidden');
    updaterWeather();
  }
});