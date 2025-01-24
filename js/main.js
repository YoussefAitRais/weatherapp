// 1. Select the input field, button, and other elements from the DOM
//    - Input field for city: To allow users to type in the city name
//    - Button: To trigger the weather fetch operation
//    - Placeholders for displaying city name, temperature, and weather data

// 2. Add an event listener to the search button
//    - When the button is clicked, fetch the weather data for the city entered in the input field

// 3. Use an API for fetching weather data
//    - Use a weather API like OpenWeatherMap or WeatherAPI
//    - Construct the API request URL with the city name and API key
//    - Make a fetch request to the API endpoint

// 4. Handle the API response
//    - Parse the response JSON to extract the necessary weather details
//    - For example:
///       - Current temperature
///       - Weather description
///       - Forecast data for the next 5 days
///       - Icons for weather conditions (e.g., sunny, rainy, etc.)

// 5. Update the DOM with the weather data
//    - Display the city name and current temperature in their respective placeholders
//    - Update the weather icons and data in the forecast section for 5 days
//    - Use template literals to dynamically inject the data into HTML elements

// 6. Handle errors
//    - If the city is not found or there's a network issue, display an error message
//    - Ensure the app does not crash and shows user-friendly messages

// 7. Format and display the data
//    - Convert temperature to Celsius (if required)
//    - Format the time and date for better readability
//    - Dynamically update the forecast times, temperatures, and icons

// 8. Optimize UI/UX
//    - Clear the input field after a successful search
//    - Ensure a loading spinner or placeholder is shown while the data is being fetched

// BONUS:
// - Add responsiveness by updating the DOM based on screen size (optional)
// - Use localStorage or sessionStorage to save the last searched city (optional)



// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");


// async function checkweather (city) {

//     // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=casablanca&appid=8da7c956655b0fd0fa9d9558fd8feac3`;

//     const response = await fetch (apiUrl + city+`&appid=${apiKey}`);

//     var data = await response.json();

//     console.log (data); 

//     document.getElementById ('city').innerHTML = data.name;
//     document.getElementById ('degree').innerHTML =Math.round( data.main.temp) + "°C"
// }
// searchBtn.addEventListener ("click ", () => {
//     checkweather(searchBox.value);

// })




// const apiUrl =  "https://api.openweathermap.org/data/2.5/weather?&appid=&units=metric&q=bangalore";

const apiKey = "8da7c956655b0fd0fa9d9558fd8feac3";

const apiUrl=  `https://api.openweathermap.org/data/2.5/weather?q=`

const searchBox = document.getElementById("search");
const searchBtn = document.getElementById("youssef");
// console.log(searchBtn)

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + '&units=metric&appid=' + apiKey );
    var data = await response.json();
    document.getElementById("city").innerHTML = data.name;
    document.getElementById("degree").innerHTML = data.main.temp + "°C";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})


