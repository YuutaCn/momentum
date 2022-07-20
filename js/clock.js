let clock = document.getElementById('clock');
let date = document.getElementById('date');
let helloText = document.getElementById('helloText');

let hours = new Date().getHours()
let minutes = new Date().getMinutes()
let seconds = new Date().getSeconds()


function getCurrentTimeString() {
  let clock = new Date().toTimeString().replace(/ .*/, '');

  return clock.replace(/:/g, '&thinsp;:&thinsp;')
}

function getCurrentDateString() {
  let dateWeek = ["Sunday", 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  let dateMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
                'August', 'September', 'October', 'November', 'December'];

  let week = new Date().getDay();

  let month = new Date().getMonth();

  return `${dateWeek[week]}, ${dateMonth[month]} ${new Date().getDate()}`
}

function getCurrentHelloString() {

  if (hours > 23 || hours < 6) {
    return 'Good night,&thinsp;&thinsp;'
  }

  if (hours > 5 && hours < 11) {
    return 'Good morning,&thinsp;&thinsp;'
  }

  if (hours > 10 && hours < 20) {
    return 'Good afternoon,&thinsp;&thinsp;'
  }

  if (hours > 19 || hours < 0) {
    return 'Good evening,&thinsp;&thinsp;'
  }
}
clock.innerHTML = getCurrentTimeString()
date.innerHTML = getCurrentDateString()
helloText.innerHTML = getCurrentHelloString()

setInterval(
  () => clock.innerHTML = getCurrentTimeString(), 1000
);

setInterval(
  () => date.innerHTML = getCurrentDateString(), 2000
);

setInterval(
  () => helloText.innerHTML = getCurrentHelloString(), 50000
);