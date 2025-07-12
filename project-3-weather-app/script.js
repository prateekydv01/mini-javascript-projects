document.addEventListener('DOMContentLoaded',()=>{
  const cityInput=document.getElementById("city-input");
  const getWeatherBtn=document.getElementById("get-weather-btn");
  const weatherInfo=document.getElementById("weather-info")
  const cityNameDisplay=document.getElementById("city-name");
  const temperatureDisplay=document.getElementById("temperature");
  const descriptionDisplay=document.getElementById("description");
  const errorMessageDisplay=document.getElementById("error-message");
  const API_KEY = "d6419b88a123c721d28c02fc9553cc98";  //env-variables
  getWeatherBtn.addEventListener('click', async()=>{
    const city=cityInput.value.trim()
    if (!city) return;
    //server may throughs error
    //server/database is always in another continent it will take time
    try {
      const weatherData = await fetchWeatherData(city)
      displayWeatherData(weatherData);
    } catch (error) {
      showError()
    }

  })

  async function fetchWeatherData(citydata){
    //gets the data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${citydata}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url)
    // if(!response.ok){
    //   throw new Error("city not found");
    // }
    const data = await response.json()
    return data
    
  }

  function displayWeatherData(anydata){
    console.log(anydata)
    const {name,main,weather} = anydata
    cityNameDisplay.textContent=name
    temperatureDisplay.textContent=`Temperature : ${main.temp}`
    descriptionDisplay.textContent=`Weather : ${weather[0].description}`

    //unlock the display
    weatherInfo.classList.remove('hidden')
    errorMessageDisplay.classList.add("hidden")
  }

  function showError(){
    weatherInfo.classList.add('hidden')
    errorMessageDisplay.classList.remove('hidden')
  }

})

