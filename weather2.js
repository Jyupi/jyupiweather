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

// Add sparkle effect that follows cursor
document.addEventListener('mousemove', function(e) {
  const sparkle = document.createElement('span');
  sparkle.style.left = e.pageX + 'px';
  sparkle.style.top = e.pageY + 'px';
  sparkle.style.position = 'absolute';
  sparkle.style.width = '8px';
  sparkle.style.height = '8px';
  sparkle.style.background = '#ffffff'; // White sparkle color
  sparkle.style.borderRadius = '50%';
  sparkle.style.animation = 'twinkle 1s forwards';
  document.body.appendChild(sparkle);
});

// Keyframes for sparkle animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes twinkle {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(1.5); opacity: 0; }
  }
`, styleSheet.cssRules.length);
