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

function displayWeatherCondition (response){
  document.querySelector ("#city").innerHTML=response.data.name;
  document.querySelector ("#temperature").innerHTML=Math.round (response.data.main.temp);

  document.querySelector ("#description").innerHTML=response.data.weather [0].main;
}

function searchCity (city) {
  let apiKey= "3faac5a862ce9260b63bd4aaae035e7c";
  let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get (apiUrl).then(displayWeatherCondition);
}

function handleSubmit (event) {
  event.preventDefault ();
  let city=document.querySelector ("#city-input").ariaValueMax;
  searchCity (city);
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


navigator.geolocation.getCurrentPosition (retrievePosition);

