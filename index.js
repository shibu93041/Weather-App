
const apiKey = "1920ef3f06476a234fee85b1cf9bc203";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function chechWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "assets/images/cloud.png"
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "assets/images/clear-sky.png"
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "assets/images/heavy-rain.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "assets/images/cloudy.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "assets/images/fog.png"
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".errorr").style.display = "none";

    }


}


searchBtn.addEventListener("click", () => {
    chechWeather(searchBox.value);
})

chechWeather();