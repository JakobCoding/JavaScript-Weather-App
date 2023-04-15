// Adding Weather Data API to APP  

    const apiKey = "532ec87a1f596f31b5d76eb2890b78d7";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");

    // Async fetch api weather data function and store the results in a var named data type converted to .json file
    async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        // Displaying error message for mispelling of cities 
        if(response.status == 404){
            document.querySelector(".error").style.display = "block";
            
        }else{
            var data = await response.json();

            //Connecting the Open weather map Api fetch results in the console.log to the app index.html  
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
            // Assigning different weather icons dependant on API fetch weather conditions
            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "images/clouds.png";
            }
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "images/clear.png";
            } 
            else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "images/rain.png";
            } 
            else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "images/drizzle.png";
            } 
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "images/mist.png";
            } 
            else if(data.weather[0].main == "Snow"){
                weatherIcon.src = "images/snow.png";
            } 
            else if(data.weather[0].main == "Haze"){
                weatherIcon.src = "images/mist.png";
            } 
        
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }

       

        
    }
    // add checkWeather function to the search button addEventListerner checking for search box value ex: city search
    searchBtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value);
    })


