
// const apiUrl =  "https://api.openweathermap.org/data/2.5/weather?&appid=&units=metric&q=bangalore";

const apiKey = "8da7c956655b0fd0fa9d9558fd8feac3";
const apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=`
const apiFive = `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=`;

const locationBtn = document.getElementById("local"); // Button for geolocation
const searchBox = document.getElementById("search");
const searchBtn = document.getElementById("youssef");
// console.log(searchBtn)

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + '&units=metric&appid=' + apiKey);
    var data = await response.json();
    document.getElementById("city").innerHTML = data.name;
    document.getElementById("degree").innerHTML = data.main.temp + "°C";
    document.getElementById("pressure").innerHTML = data.main.pressure + "mbar";
    document.getElementById("windspeed").innerHTML = data.wind.speed + "km/h";
    document.getElementById("humidity").innerHTML = data.main.humidity + "%";
}

async function getFiveDaysWeather(city){

    const forecastResponse = await fetch(apiFive + city + `&appid=${apiKey}`);
    const fiveDaysData = await forecastResponse.json();

const days = fiveDaysData.list.filter((item) => item.dt_txt.includes('12:00:00'));
document.getElementById("day1").innerHTML=new Date(days[0].dt_txt).toLocaleDateString('en-US', {weekday: 'long'});
document.getElementById("day2").innerHTML=new Date(days[1].dt_txt).toLocaleDateString('en-US', {weekday: 'long'});
document.getElementById("day3").innerHTML=new Date(days[2].dt_txt).toLocaleDateString('en-US', {weekday: 'long'});
document.getElementById("day4").innerHTML=new Date(days[3].dt_txt).toLocaleDateString('en-US', {weekday: 'long'});
document.getElementById("day5").innerHTML=new Date(days[4].dt_txt).toLocaleDateString('en-US', {weekday: 'long'});

document.getElementById("temp1").innerHTML=Math.round(days[0].main.temp) + " °C";
document.getElementById("temp2").innerHTML=Math.round(days[1].main.temp) + " °C";
document.getElementById("temp3").innerHTML=Math.round(days[2].main.temp) + " °C";
document.getElementById("temp4").innerHTML=Math.round(days[3].main.temp) + " °C";
document.getElementById("temp5").innerHTML=Math.round(days[4].main.temp) + " °C";

document.getElementById("icon1").src = `http://openweathermap.org/img/wn/${days[0].weather[0].icon}.png`;
document.getElementById("icon2").src = `http://openweathermap.org/img/wn/${days[1].weather[0].icon}.png`;
document.getElementById("icon3").src = `http://openweathermap.org/img/wn/${days[2].weather[0].icon}.png`; 
document.getElementById("icon4").src = `http://openweathermap.org/img/wn/${days[3].weather[0].icon}.png`; 
document.getElementById("icon5").src = `http://openweathermap.org/img/wn/${days[4].weather[0].icon}.png`;

}




async function getLocationWeather() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
        const data = await response.json();
        

        const iconLink=`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`

        document.getElementById("city").innerHTML = data.name;
        document.getElementById("degree").innerHTML = data.main.temp + "°C";
        document.getElementById("pressure").innerHTML = data.main.pressure + "mbar";
        document.getElementById("windspeed").innerHTML = data.wind.speed + "km/h";
        document.getElementById("humidity").innerHTML = data.main.humidity + "%";

        await getFiveDaysWeather(data.name);
      });
    } else {
      alert("Geolocation is not supported by your browser.");
    }

  }

  searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
    getFiveDaysWeather(searchBox.value);
    
})

  locationBtn.addEventListener("click", () => {
    getLocationWeather();
  })