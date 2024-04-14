function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input").value;
  fetchWeather(cityInput);
}

function fetchWeather(cityName) {
  let apiKey = "81d91288fe6a7e943f3251058e6c1276";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      updateWeather(data);
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

function updateWeather(data) {
  document.querySelector("#cityname").innerHTML = data.name;
  document.querySelector(".emojitemp").innerHTML = `🌡️ ${Math.round(data.main.temp - 273.15)}°C`;
}

document.querySelector("#search-form").addEventListener("submit", search);
