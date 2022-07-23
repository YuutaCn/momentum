let leftArrowUp = document.querySelector('.left-arrow__up');
let leftArrowDown = document.querySelector('.left-arrow__down');
let rightArrowUp = document.querySelector('.right-arrow__up');
let rightArrowDown = document.querySelector('.right-arrow__down');

let leftButton = document.querySelector('.left-arrow')
let rightButton = document.querySelector('.right-arrow')


// Buttons
leftArrowUp.style.transform = 'rotate(45deg)';
leftArrowDown.style.transform = 'rotate(-45deg)';
rightArrowUp.style.transform = 'rotate(-45deg)';
rightArrowDown.style.transform = 'rotate(45deg)';

leftButton.onmouseover = function() {
  leftArrowUp.style.transition = 'all 500ms ease-out'
  leftArrowDown.style.transition = 'all 500ms ease-out'
  leftArrowUp.style.height = '4px';
  leftArrowDown.style.height = '4px';
  leftArrowUp.style.transform = 'rotate(42deg) translateY(-0.6px)';
  leftArrowDown.style.transform = 'rotate(-42deg) translateY(0.6px)';
  };

leftButton.onmouseleave = function() {
  leftArrowUp.style.transition = 'all 500ms ease-out'
  leftArrowDown.style.transition = 'all 500ms ease-out'
  leftArrowUp.style.height = '3px';
  leftArrowDown.style.height = '3px';
  leftArrowUp.style.transform = 'rotate(45deg)';
  leftArrowDown.style.transform = 'rotate(-45deg)';
};

rightButton.onmouseover = function() {
  rightArrowUp.style.transition = 'all 500ms ease-out'
  rightArrowDown.style.transition = 'all 500ms ease-out'
  rightArrowUp.style.height = '4px';
  rightArrowDown.style.height = '4px';
  rightArrowUp.style.transform = 'rotate(-42deg) translateY(-0.6px)';
  rightArrowDown.style.transform = 'rotate(42deg) translateY(0.6px)';
  };

rightButton.onmouseleave = function() {
  rightArrowUp.style.transition = 'all 500ms ease-out'
  rightArrowDown.style.transition = 'all 500ms ease-out'
  rightArrowUp.style.height = '3px';
  rightArrowDown.style.height = '3px';
  rightArrowUp.style.transform = 'rotate(-45deg)';
  rightArrowDown.style.transform = 'rotate(45deg)';
};

leftButton.addEventListener('click', (e) => {
  leftArrowUp.style.transform = 'rotate(35deg) translateY(-3px)';
  leftArrowDown.style.transform = 'rotate(-35deg) translateY(3px)';
  leftArrowUp.style.transition = 'all 200ms ease-out'
  leftArrowDown.style.transition = 'all 200ms ease-out'
  setTimeout(() => {
    leftArrowUp.style.transform = 'rotate(42deg) translateY(-0.6px)';
    leftArrowDown.style.transform = 'rotate(-42deg) translateY(0.6px)';
  }, 200)
});

rightButton.addEventListener('click', (e) => {
  rightArrowUp.style.transform = 'rotate(-35deg) translateY(-3px)';
  rightArrowDown.style.transform = 'rotate(35deg) translateY(3px)';
  rightArrowUp.style.transition = 'all 200ms ease-out'
  rightArrowDown.style.transition = 'all 200ms ease-out'
  setTimeout(() => {
    rightArrowUp.style.transform = 'rotate(-42deg) translateY(-0.6px)';
    rightArrowDown.style.transform = 'rotate(42deg) translateY(0.6px)';
  }, 200)
});



// Background
let i = Number(localStorage.getItem('slideNumber')) + 1;
let bodyBackGround = document.querySelector('.body');
let bodyBackGroundContainer = document.querySelector('.body-background');

let slideNightPresetImg = './assets/swiper/1-night';
let slideMorningPresetImg = './assets/swiper/2-morning';
let slideAfternoonPresetImg = './assets/swiper/3-afternoon';
let slideEveningPresetImg = './assets/swiper/4-evening';

let slidePreset;
let intervalUpdate = 0.3;

let updateNumberPlus = () => {
  if (Number(localStorage.getItem('slideNumber')) > 19) {
    i = 2;
    localStorage.setItem('slideNumber', `${1}`);
  } else {
    i += 1;
    localStorage.setItem('slideNumber', `${i - 1}`);
  }
  return i
}

let updateNumberMinus = () => {
  if (Number(localStorage.getItem('slideNumber')) < 2) {
    i = 19;
    localStorage.setItem('slideNumber', `${20}`);
  } else {
    i -= 1;
    localStorage.setItem('slideNumber', `${i + 1}`);
  }
  return i
}
  
function getCurrentSlidePreset() {
  let hourses = new Date().getHours();
  if (hourses > 23 || hourses < 6) {
    slidePreset = slideNightPresetImg;
    return slidePreset
  }
  if (hourses > 5 && hourses < 11) {
    slidePreset = slideMorningPresetImg;
    return slidePreset
  }
  if (hourses > 10 && hourses < 20) {
    slidePreset = slideAfternoonPresetImg;
    return slidePreset
  }
  if (hourses > 19 || hourses < 0) {
    slidePreset = slideEveningPresetImg;
    return slidePreset
  }
  return slidePreset
}

if (localStorage.getItem('slideNumber') === null || localStorage.getItem('slideNumber') >= 20) {
  localStorage.setItem('slideNumber', `${1}`)
  bodyBackGroundContainer.style.transition = 'all 0ms ease-in';
    bodyBackGroundContainer.style.opacity = '1';
    bodyBackGroundContainer.style.visibility = 'visible';
    bodyBackGroundContainer.style.background = `url(${getCurrentSlidePreset()}/${String(localStorage.getItem('slideNumber'))}.jpg) no-repeat center`;
    bodyBackGroundContainer.style.backgroundSize = 'cover';
} else {
  bodyBackGroundContainer.style.transition = 'all 0ms ease-in';
    bodyBackGroundContainer.style.opacity = '1';
    bodyBackGroundContainer.style.visibility = 'visible';
    bodyBackGroundContainer.style.background = `url(${getCurrentSlidePreset()}/${String(localStorage.getItem('slideNumber'))}.jpg) no-repeat center`;
    bodyBackGroundContainer.style.backgroundSize = 'cover';
}

rightButton.addEventListener('click', (e) => {
  updateNumberPlus()
  localStorage.setItem('slideNumber', `${i - 1}`)
  bodyBackGround.style.background = `url(${getCurrentSlidePreset()}/${String(localStorage.getItem('slideNumber'))}.jpg) no-repeat center`;
  bodyBackGround.style.backgroundSize = 'cover'
  setTimeout(() => {
    bodyBackGroundContainer.style.transition = 'all 2000ms ease-in';
    bodyBackGroundContainer.style.opacity = '0';
    bodyBackGroundContainer.style.visibility = 'hidden';
    rightButton.setAttribute('disabled', true);
  }, 700);
  setTimeout(() => {
    rightButton.removeAttribute('disabled');
    bodyBackGroundContainer.style.transition = 'all 0ms ease-in';
    bodyBackGroundContainer.style.opacity = '1';
    bodyBackGroundContainer.style.visibility = 'visible';
    bodyBackGroundContainer.style.background = `url(${getCurrentSlidePreset()}/${String(localStorage.getItem('slideNumber'))}.jpg) no-repeat center`;
    bodyBackGroundContainer.style.backgroundSize = 'cover';
  }, 2700);
});

leftButton.addEventListener('click', (e) => {
  updateNumberMinus()
  localStorage.setItem('slideNumber', `${i + 1}`)
  bodyBackGround.style.background = `url(${getCurrentSlidePreset()}/${String(localStorage.getItem('slideNumber'))}.jpg) no-repeat center`;
  bodyBackGround.style.backgroundSize = 'cover'
  setTimeout(() => {
    bodyBackGroundContainer.style.transition = 'all 2000ms ease-in';
    bodyBackGroundContainer.style.opacity = '0';
    bodyBackGroundContainer.style.visibility = 'hidden';
    leftButton.setAttribute('disabled', true);
  }, 300);
  setTimeout(() => {
    leftButton.removeAttribute('disabled');
    bodyBackGroundContainer.style.transition = 'all 0ms ease-in';
    bodyBackGroundContainer.style.opacity = '1';
    bodyBackGroundContainer.style.visibility = 'visible';
    bodyBackGroundContainer.style.background = `url(${getCurrentSlidePreset()}/${String(localStorage.getItem('slideNumber'))}.jpg) no-repeat center`;
    bodyBackGroundContainer.style.backgroundSize = 'cover';
  }, 2700);
});

let autoPlusSlide = () => {
  updateNumberPlus()
  localStorage.setItem('slideNumber', `${i - 1}`)
  bodyBackGround.style.background = `url(${getCurrentSlidePreset()}/${String(localStorage.getItem('slideNumber'))}.jpg) no-repeat center`;
  bodyBackGround.style.backgroundSize = 'cover';
  setTimeout(() => {
    bodyBackGroundContainer.style.transition = 'all 2000ms ease-in';
    bodyBackGroundContainer.style.opacity = '0';
    bodyBackGroundContainer.style.visibility = 'hidden';
    rightButton.setAttribute('disabled', true);
  }, 700);
  setTimeout(() => {
    rightButton.removeAttribute('disabled');
    bodyBackGroundContainer.style.transition = 'all 0ms ease-in';
    bodyBackGroundContainer.style.opacity = '1';
    bodyBackGroundContainer.style.visibility = 'visible';
    bodyBackGroundContainer.style.background = `url(${getCurrentSlidePreset()}/${String(localStorage.getItem('slideNumber'))}.jpg) no-repeat center`;
    bodyBackGroundContainer.style.backgroundSize = 'cover';
  }, 2700);
};


if (localStorage.getItem('AutoBtnOp') = 'enabled') {
  setInterval(() => {
    autoPlusSlide();
  }, 20 * 100 * 60 * 60);
}