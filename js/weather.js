// https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=b133c0863e4c74d75d9872210e91ebdc

let requestWeather = new XMLHttpRequest();
let weather = {};
let minTemp = 0;
let maxTemp = 0;
let wind = 0;
let temp = 0;
let description = "";
let iconId = 0;
let cityWeather = localStorage.getItem('cityWeather')
let hideWeatherWithButton = false;

let weatherWidget = document.querySelector('.weather')
let weatherIcon = document.querySelector('.weather-forecast__icon');
let weatherGeneral = document.querySelector('.weather-forecast__general');
let weatherCityInput = document.querySelector('.weather__sity-input');
let weatherCityButton = document.querySelector('.weather__sity-button');
let weatherForecast = document.querySelector('.weather-forecast');
let iconHTML = document.querySelector('.weather-forecast__icon-id');
let descriptionHTML = document.querySelector('.weather-forecast__icon-description');
let tempHTML = document.querySelector('.weather-forecast__temperature');
let maxTempHTML = document.querySelector('.weather-forecast__general-maxt-js');
let minTempHTML = document.querySelector('.weather-forecast__general-mint-js');
let windHTML = document.querySelector('.weather-forecast__general-wind-speed');
let weatherHideButton = document.querySelector('.weather-full__hide-button');

if (localStorage.getItem('cityWeather') != null) {
  weatherCityInput.placeholder = localStorage.getItem('cityWeather')
} else {
  localStorage.setItem('cityWeather', 'Minsk')
}

weatherCityButton.addEventListener('click', () => {
  event.preventDefault();
  localStorage.setItem("cityWeather", weatherCityInput.value.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))))
  weatherCityInput.placeholder = localStorage.getItem('cityWeather')
  weatherForecast.style.transition = 'all 150ms ease-in'
  weatherForecast.style.transform = 'translateY(150%)'
  setTimeout(() => {
    getWeather()
    weatherForecast.style.transition = 'all 0ms ease-in'
    weatherForecast.style.transform = 'translateY(-150%)'
    setTimeout(() => {
      weatherForecast.style.transition = 'all 150ms ease-in'
      weatherForecast.style.transform = 'translateY(20%)'
      setTimeout(() => {
        weatherForecast.style.transition = 'all 100ms ease-out';
        nextButton.style.transform = 'translateY(0%)';
        setTimeout(() => {
          weatherForecast.style.transition = 'all 100ms ease-in';
          weatherForecast.style.transform = 'translateY(-12%)';
          setTimeout(() => {
            weatherForecast.style.transition = 'all 100ms ease-out';
            weatherForecast.style.transform = 'translateY(0%)';
          }, 100);
        }, 100);
      }, 100);
    }, 150)
  }, 150)
});

async function getWeather() {
  requestWeather.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${localStorage.getItem('cityWeather')}&lang=ru,uk&APPID=b133c0863e4c74d75d9872210e91ebdc`, true);
  requestWeather.responseType = 'json'
  requestWeather.send();
  requestWeather.onload = function () {
    weather = requestWeather.response;
    if (Number(weather.cod) != 200) {
      alert(weather.message)
      return
    }

    maxTemp = weather.main.temp_max - 273.15
    minTemp = weather.main.temp_min - 273.15
    wind = weather.wind.speed
    description = weather.weather[0].description.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))
    temp = weather.main.temp - 273.15
    iconId = weather.weather[0].id

    if (new Date().getHours > 21 || new Date().getHours < 6) {
      iconHTML.classList.add(`owf-${iconId}-n`);
    } else {
      iconHTML.classList.add(`owf-${iconId}-d`)
    }

    descriptionHTML.innerHTML = `${description}`;
    windHTML.innerHTML = `${wind.toFixed(0)} m/s`;
    maxTempHTML.innerHTML = `${maxTemp.toFixed(1)}°C`
    minTempHTML.innerHTML = `${minTemp.toFixed(1)}°C`

    if (temp > 0) {
      tempHTML.innerHTML = `+${temp.toFixed(0)}°С`
    } else if (temp === 0) {
      tempHTML.innerHTML = `${temp.toFixed(0)}°С`
    } else if (temp < 0) {
      tempHTML.innerHTML = `-${temp.toFixed(0)}°С`
    }

    if (maxTemp > 0) {
      maxTempHTML.innerHTML = `+${maxTemp.toFixed(1)}°С`
    } else if (temp === 0) {
      maxTempHTML.innerHTML = `${maxTemp.toFixed(1)}°С`
    } else if (temp < 0) {
      maxTempHTML.innerHTML = `-${maxTemp.toFixed(1)}°С`
    }

    if (minTemp > 0) {
      minTempHTML.innerHTML = `+${minTemp.toFixed(1)}°С`
    } else if (temp === 0) {
      minTempHTML.innerHTML = `${minTemp.toFixed(1)}°С`
    } else if (temp < 0) {
      minTempHTML.innerHTML = `-${minTemp.toFixed(1)}°С`
    }
    
  };
}

getWeather()


weatherHideButton.addEventListener('click', () => {
  if (hideWeatherWithButton == false) {
    weatherWidget.style.transition = 'all 400ms ease-in'
    weatherIcon.style.transition = 'all 400ms ease-in' 
    weatherGeneral.style.transition = 'all 400ms ease-in'
    tempHTML.style.transition = 'all 400ms ease-in'
    weatherGeneral.style.width = '0%'
    tempHTML.style.width = '0%'
    weatherIcon.style.width = '100%'
    weatherIcon.style.transform = 'scale(0.93, 0.93) translateX(-3px)'
    weatherWidget.style.width = '110px'
    hideWeatherWithButton = true
  } else if(hideWeatherWithButton == true) {
    weatherWidget.style.transition = 'all 400ms ease-out'
    weatherIcon.style.transition = 'all 400ms ease-in' 
    weatherGeneral.style.transition = 'all 400ms ease-in'
    tempHTML.style.transition = 'all 400ms ease-in'
    weatherGeneral.style.width = '33.33%'
    tempHTML.style.width = '33.33%'
    weatherIcon.style.width = '33.33%'
    weatherIcon.style.transform = 'scale(1, 1) translateX(0px)'
    weatherWidget.style.width = '370px'
    hideWeatherWithButton = false
  }
});