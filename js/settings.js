let clockAndDate = document.querySelector('#clock')
let hideClock = document.querySelector('.hide-clock')


let updaterClock = () => {
  if (localStorage.getItem('clockAndDateOp') == 'visible' || localStorage.getItem('clockAndDateOp') == null) {
    clockAndDate.style.transition = '700ms';
    clockAndDate.style.opacity = '1';
    clockAndDate.style.visibility = 'visible';
    hideClock.innerHTML = 'Show'
    hideClock.style.transition = '700ms'
    hideClock.style.border = 'solid 1px rgba(177, 226, 156, 0.8)';
    hideClock.onmouseover = function() {
    hideClock.style.background= "rgb(36, 36, 36)";
    };
    hideClock.onmouseleave = function() {
    hideClock.style.background= "rgb(18, 18, 18)";
    }
  } else {
    clockAndDate.style.transition = '700ms';
    clockAndDate.style.opacity = '0';
    clockAndDate.style.visibility = 'hidden';
    hideClock.innerHTML = 'Hide';
    hideClock.style.transition = '700ms'
    hideClock.style.border = 'solid 1px rgba(226, 156, 156, 0.8)';
    hideClock.onmouseover = function() {
    hideClock.style.background= "rgb(36, 36, 36)";
    };
    hideClock.onmouseleave = function() {
    hideClock.style.background= "rgb(18, 18, 18)";
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
