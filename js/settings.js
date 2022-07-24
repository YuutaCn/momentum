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

