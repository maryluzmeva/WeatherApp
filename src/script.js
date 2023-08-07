
function showDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

let daysList = date.getDay ();
let days = [
  "Sun", 
  "Mon",
  "Tue", 
  "Wed", 
  "Thu", 
  "Fri", 
  "Sat"
];

let day = days [daysList];

return `${day} ${hours}: ${minutes}`;
}

function displayWeatherCondition (response) {
  document.querySelector ("#city").innerHTML = response.data.city;
}
function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city");
  let input =document.querySelector("#search-form input");
  city.innerHTML = input.value;
  let formElement = document.querySelector ("form");
  formElement.addEventListener ("submit", search);
}

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 84;
}

function convertToCelsius (event) {
  event.preventDefault ();
  let temperature =document.querySelector ("#temperature");
  temperature.innerHTML =29;
}

let date =document.querySelector ("#date");
let currentTime = new Date ();
date.innerHTML = showDate (currentTime);

let fahrenheitConvert = document.querySelector("#fahrenheit-convert");
fahrenheitConvert.addEventListener("click", convertToFahrenheit);

let celsiusConvert = document.querySelector("#celsius-convert");
celsiusConvert.addEventListener("click", convertToCelsius);

function showWeather (response) {
  let temperature = Math.round (response.data.main.temp);
  let weatherData = document.querySelector ("#weatherData");
  weatherData.innerHTML =`${response.data.name}<br />${temperature}°C`;
}
function retrievePosition(position) {
  let lat =position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "metric";
  let apiKey = "c71f439f65td859373faeeba102o0222";
  let apiUrl= `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}query={query}&key=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showWeather);
}
navigator.geolocation.getCurrentPosition (retrievePosition);

let searchButton =document.querySelector ("#searchButton");
searchButton.addEventListener("click", searchButton);
