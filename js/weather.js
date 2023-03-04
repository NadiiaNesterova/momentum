const weatherError = document.querySelector('.weather-error');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const city = document.querySelector('.city');
const humidity = document.querySelector('.humidity');
city.value = 'Minsk';


async function getWeather(lang) {
  try {
    weatherError.textContent = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lang}&appid=8f911de29640083f5174716453adaeb8&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = `${data.weather[0].description}`;
    if (lang === 'ru') {
       // city.value = 'Минск';
      wind.textContent = `Скорость ветра: ${Math.round(data.wind.speed)} м/с`;
      humidity.textContent = `Влажность: ${data.main.humidity}%`;
    }
    else {
        //city.value = 'Minsk';
      wind.textContent = `Wind spped: ${Math.round(data.wind.speed)} m/s`;
      humidity.textContent = `Humidity: ${data.main.humidity}%`;
    }
    
  }
  catch {
    if (lang === 'en') weatherError.textContent = 'Error! City not found!';
    else weatherError.textContent = 'Ошибка! Город не найден';
    
    temperature.textContent = '';
    weatherDescription.textContent = '';
    wind.textContent = '';
    humidity.textContent = '';
  }
    
}
getWeather('en');


function setLocaleStorage() {
    localStorage.setItem('city', city.value)
}

function getLocaleStorage() {
    if (localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    }
}

getWeather();
window.addEventListener('beforeunload', setLocaleStorage);
window.addEventListener('load', getLocaleStorage);
city.addEventListener('change', getWeather);







