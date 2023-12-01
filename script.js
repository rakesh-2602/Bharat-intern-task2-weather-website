const apikey = "9ef527f600599328437da5ff8d3b1d42";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


function find()
{
    const searchbox = document.querySelector("input").value;
    checkweather(searchbox);
}

const weathericon = document.querySelector(".weather-icon");

async function checkweather(city)
{
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status == 404)
    {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else
    {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Kmph";

        if(data.weather[0].main == "Cloud")
        {
            weathericon.src = "images/png";
        }
        else if(data.weather[0].main == "Clear")
        {
            weathericon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain")
        {
            weathericon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle")
        {
            weathericon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist")
        {
            weathericon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }    
}

