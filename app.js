const city = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const fetchedH3 = document.getElementById("fetched-data");

//just checking what is being fetched.  delete from final production.
const addDataToDOM = (...args) => {
    for(let i=0;i<args.length;i++){
        fetchedH3.textContent += `${args[i]}, `;
    }
}

const getWeather = async (city) => {
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=ae33fb8bc42e133867866b44d7162e4b`, {mode: 'cors'})
        const weatherData = await response.json();
        //call functions to update DOM
        console.log(weatherData)
        addDataToDOM(weatherData.name, weatherData.main.temp);
    }catch(err){
        //handle error
        alert(err);
    }
}

searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
    
})