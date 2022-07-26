let clock = document.getElementById('clock');
let date = document.getElementById('date');
let helloText = document.getElementById('helloText');

let hoursContainer = document.querySelector('.clock__hr');

let minutesContainer = document.querySelector('.clock__min');

let secondsContainer = document.querySelector('.clock__sec');

let hours = new Date().getHours()
let minutes = new Date().getMinutes()
let seconds = new Date().getSeconds()


function clockRemove() {
  setInterval(
    () => secondsContainer.classList.remove('clock__anim'), 2000
  );
}

if (hours < 10) {
  hoursContainer.innerHTML = `0${hours}`
} else {
  hoursContainer.innerHTML = hours
}
minutesContainer.innerHTML = `00`
secondsContainer.innerHTML = `00`

function getCurrentTimeString() {
  let hours = new Date().getHours()
  let minutes = new Date().getMinutes()
  let seconds = new Date().getSeconds()

  // hours
  if (hoursContainer.innerHTML != hours) {
    function addAnimationHours() {
      hoursContainer.classList.add('clock__anim');
      setTimeout(() => {  
        hoursContainer.classList.remove('clock__anim'); 
      }, 950);
    }
    if (hours < 10) {
      hoursContainer.innerHTML = `0${hours}`;
      addAnimationHours();
    } else {
      hoursContainer.innerHTML = hours;
      addAnimationHours();
    }
  } 

  // minutes
  if (minutesContainer.innerHTML != minutes) {
    function addAnimationMinutes() {
      minutesContainer.classList.add('clock__anim');
      setTimeout(() => {  
        minutesContainer.classList.remove('clock__anim'); 
      }, 950);
    }
    if (minutes < 10) {
      minutesContainer.innerHTML = `0${minutes}`;
      addAnimationMinutes();
    } else {
      minutesContainer.innerHTML = minutes;
      addAnimationMinutes();
    }
  } 

  // seconds
  if (secondsContainer.innerHTML != seconds) {
    function addAnimationSec() {
      secondsContainer.classList.add('clock__anim');
      setTimeout(() => {  
        secondsContainer.classList.remove('clock__anim'); 
      }, 950);
    }
    if (seconds < 10) {
      secondsContainer.innerHTML = `0${seconds}`;
      addAnimationSec();
    } else {
      secondsContainer.innerHTML = seconds;
      addAnimationSec();
    }
  } 
}


function getCurrentDateString() {
  let dateWeek = ["Воскресенье", 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  let dateMonth = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 
                'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
  let week = new Date().getDay();
  let month = new Date().getMonth();
  return `${dateWeek[week]},  ${new Date().getDate()} ${dateMonth[month]}`
}

function getCurrentHelloString() {
  let hours = new Date().getHours();
  if (hours > 21 || hours < 6) {
    return 'Доброй&thinsp;ночи,&thinsp;&thinsp;'
  }
  if (hours > 5 && hours < 11) {
    return 'Доброе&thinsp;утро,&thinsp;&thinsp;'
  }
  if (hours > 10 && hours < 20) {
    return 'Добрый&thinsp;день,&thinsp;&thinsp;'
  }
  if (hours > 18 || hours < 22) {
    return 'Добрый&thinsp;вечер,&thinsp;&thinsp;'
  }
}

date.innerHTML = getCurrentDateString()
helloText.innerHTML = getCurrentHelloString()

setInterval(
  () => getCurrentTimeString(), 1000
);

setInterval(
  () => date.innerHTML = getCurrentDateString(), 2000
);

setInterval(
  () => helloText.innerHTML = getCurrentHelloString(), 2000
);