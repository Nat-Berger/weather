const cityElement = document.querySelector('.city');
const temperatureElement = document.querySelector('.temp');
const city = document.querySelector('.input')

const apiKey = '3fa5029520230b1789f14b9ba36c9446';



async function searchLocation() {

    try{
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=${apiKey}`
        //cityElement.innerHTML = 'Loading...'
        const response = await fetch(apiUrl)
        let data = await response.json();
        cityElement.innerHTML = data.name;
        let roundedTemp = Math.floor(data.main.temp)
        temperatureElement.innerHTML = (`${roundedTemp}°`)
    }
    catch(error){
        console.log(error);
        cityElement.innerHTML = 'Failed to fetch weather'
        console.log(city.value)
    }
}

// change icon based on... data.weather[0].main -> https://openweathermap.org/weather-conditions
  
