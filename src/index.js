let now = new Date();
let date = now.getDate();
let minutes = now.getMinutes();
let hours = now.getHours();
let year = now.getFullYear();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = `${day} ${hours}:${minutes}`;

if (minutes < 10) {
  minutes = `0${minutes}`;
}
if (hours < 10) {
  hours = `0${hours}`;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;
  let apiKey = "6f96419t05793ebo1ab9eb5033f5f00f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInputElement.value}&key=${apiKey}&unit=imperial`;
  axios.get(apiUrl).then(displayTemperature);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function displayTemperature(response) {
  let currentTemp = document.querySelector("#currentTemp");
  currentTemp.innerHTML = Math.round(response.data.temperature.current);
}
