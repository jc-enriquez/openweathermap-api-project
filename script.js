function timeConverter(UNIX_timestamp) {
  let a = new Date(UNIX_timestamp * 1000);
  let hour = a.getHours();
  let min = a.getMinutes();
  let time = hour + ":" + min;
  return time;
}

function toStandardTime(militaryTime) {
  militaryTime = militaryTime.split(":");
  return militaryTime[0].charAt(0) == 1 && militaryTime[0].charAt(1) > 2
    ? militaryTime[0] - 12 + ":" + militaryTime[1] + " PM"
    : militaryTime.join(":") + " AM";
}

let weather = {
  apiKey: "8cb4e74484c650ba890c9f16323ff0d5",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { lon, lat } = data.coord;
    const { description } = data.weather[0];
    const { temp, humidity, temp_min, temp_max, pressure, feels_like } =
      data.main;
    const { speed, deg } = data.wind;
    const { visibility } = data;
    const { sunrise, sunset, country } = data.sys;
    const { all } = data.clouds;

    document.querySelector("#city").innerText =
      "Weather in " + name + ", " + country;
    document.querySelector("#description").innerText = description;
    document.querySelector("#clouds").innerText = all + "%";
    document.querySelector("#temp").innerText = temp;
    document.querySelector("#humidity").innerText = humidity + "%";
    document.querySelector("#feels").innerText = feels_like + "°";
    document.querySelector("#max-temp").innerText = temp_max + "°C";
    document.querySelector("#min-temp").innerText = temp_min + "°C";
    document.querySelector("#visibility").innerText = visibility;
    document.querySelector("#pressure").innerText = pressure;
    document.querySelector("#lon").innerText = lon;
    document.querySelector("#lat").innerText = lat;
    document.querySelector("#wind").innerText = speed;
    document.querySelector("#direction").innerText = deg + "°";
    document.querySelector("#sunrise").innerText = toStandardTime(
      timeConverter(sunrise)
    );
    document.querySelector("#sunset").innerText = toStandardTime(
      timeConverter(sunset)
    );
    document.querySelector(".location").style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  fetchInitialDayForecast: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayInitialDayForecast(data));
  },
  displayInitialDayForecast: function (data) {
    const { dt_txt } = data.list[0];
    const formattedDate = dt_txt.split(" ").shift();
    const { temp } = data.list[0].main;
    const { icon, description } = data.list[0].weather[0];
    document.querySelector("#initial-temp").innerText = temp + "°";
    document.querySelector("#initial-desc").innerText = description;
    document.querySelector("#initial-day").innerText = formattedDate;
    document.querySelector("#initial-icon").src =
      "https://openweathermap.org/img/wn/" + icon + "@2x.png";
  },
  fetchFirstDayForecast: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayFirstDayForecast(data));
  },
  displayFirstDayForecast: function (data) {
    const { dt_txt } = data.list[6];
    const formattedDate = dt_txt.split(" ").shift();
    const { temp } = data.list[6].main;
    const { icon, description } = data.list[6].weather[0];
    document.querySelector("#first-temp").innerText = temp + "°";
    document.querySelector("#first-desc").innerText = description;
    document.querySelector("#first-day").innerText = formattedDate;
    document.querySelector("#first-icon").src =
      "https://openweathermap.org/img/wn/" + icon + "@2x.png";
  },
  fetchSecondDayForecast: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displaySecondDayForecast(data));
  },
  displaySecondDayForecast: function (data) {
    const { dt_txt } = data.list[14];
    const formattedDate = dt_txt.split(" ").shift();
    const { temp } = data.list[14].main;
    const { icon, description } = data.list[14].weather[0];
    document.querySelector("#second-temp").innerText = temp + "°";
    document.querySelector("#second-desc").innerText = description;
    document.querySelector("#second-day").innerText = formattedDate;
    document.querySelector("#second-icon").src =
      "https://openweathermap.org/img/wn/" + icon + "@2x.png";
  },
  fetchThirdDayForecast: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayThirdDayForecast(data));
  },
  displayThirdDayForecast: function (data) {
    const { dt_txt } = data.list[22];
    const formattedDate = dt_txt.split(" ").shift();
    const { temp } = data.list[22].main;
    const { icon, description } = data.list[22].weather[0];
    document.querySelector("#third-temp").innerText = temp + "°";
    document.querySelector("#third-desc").innerText = description;
    document.querySelector("#third-day").innerText = formattedDate;
    document.querySelector("#third-icon").src =
      "https://openweathermap.org/img/wn/" + icon + "@2x.png";
  },
  fetchFourthDayForecast: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayFourthDayForecast(data));
  },
  displayFourthDayForecast: function (data) {
    const { dt_txt } = data.list[30];
    const formattedDate = dt_txt.split(" ").shift();
    const { temp } = data.list[30].main;
    const { icon, description } = data.list[30].weather[0];
    document.querySelector("#fourth-temp").innerText = temp + "°";
    document.querySelector("#fourth-desc").innerText = description;
    document.querySelector("#fourth-day").innerText = formattedDate;
    document.querySelector("#fourth-icon").src =
      "https://openweathermap.org/img/wn/" + icon + "@2x.png";
  },
  fetchFifthDayForecast: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayFifthDayForecast(data));
  },
  displayFifthDayForecast: function (data) {
    const { dt_txt } = data.list[38];
    const formattedDate = dt_txt.split(" ").shift();
    const { temp } = data.list[38].main;
    const { icon, description } = data.list[38].weather[0];
    document.querySelector("#fifth-temp").innerText = temp + "°";
    document.querySelector("#fifth-desc").innerText = description;
    document.querySelector("#fifth-day").innerText = formattedDate;
    document.querySelector("#fifth-icon").src =
      "https://openweathermap.org/img/wn/" + icon + "@2x.png";
  },
  search: function () {
    this.fetchWeather(document.querySelector("#search-bar").value);
    this.fetchFirstDayForecast(document.querySelector("#search-bar").value);
    this.fetchSecondDayForecast(document.querySelector("#search-bar").value);
    this.fetchThirdDayForecast(document.querySelector("#search-bar").value);
    this.fetchFourthDayForecast(document.querySelector("#search-bar").value);
    this.fetchFifthDayForecast(document.querySelector("#search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector("#search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

const form = document.getElementById("form");

function submitForm(event) {
  event.preventDefault();
}

form.addEventListener("submit", submitForm);

weather.fetchWeather("Manila");
weather.fetchInitialDayForecast("Manila");
weather.fetchFirstDayForecast("Manila");
weather.fetchSecondDayForecast("Manila");
weather.fetchThirdDayForecast("Manila");
weather.fetchFourthDayForecast("Manila");
weather.fetchFifthDayForecast("Manila");

const date = new Date();

let year = date.getFullYear();
document.getElementById("year").innerText = year;
