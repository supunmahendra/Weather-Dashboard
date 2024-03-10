
//Weather API : https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


//Weather London API : https://api.openweathermap.org/data/2.5/weather?q=London&appid=deb41da100a4adf43b939c1e823043cb

var ulr;
var city;
const apiKey = "deb41da100a4adf43b939c1e823043cb"


// button action
const btn = document.querySelector("#search-button")
btn.addEventListener("click",() => {search()})

//search text
const cityTag =document.getElementById("search-input")
cityTag.setAttribute ("list", "cityName")

//serch list on the text input
const cityNameList = document.getElementById("cityName")
fetchCity();

/*function filterFunction(){

    const list=document.getElementById("list")
}
*/


// function start hear
function search() {
    city = document.getElementById("search-input").value;
    //console.log(city);
    ulr = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey+"&units=metric";
    fetchData(ulr);
}



// fetch data from API

async function fetchData(ulr){
    
    try{
        const response = await fetch(ulr,{
            method:'GET'   
            });
        const weather= await response.json();
        //console.log(weather)
        writeDetails(weather);
    }catch(error){
        console.log(error);
        writeDetailsError(error);
    }
}

/*
function fetchData(ulr){
    fetch(ulr).then((response)=>{
       return response.json();
    }).then((data)=>{
        const weather= data;
        console.log(weather);
        writeDetails(weather);
    }).catch((error)=>{
        console.log(error);
    })
}*/


// write the city list
function fetchCity(){

    fetch('/city.list.json').then((response)=>{
       return response.json();
    }).then((data)=>{
        let cityList = data.map(a => a.name);
        for (let i=0 ; i< cityList.length ; i++) {
            const cityNametag = document.createElement("option");
            cityNametag.setAttribute("value",cityList[i]);
            cityNameList.appendChild(cityNametag);
        }
        
    }).catch((error)=>{
        console.log(error);
    })
}



//write the weather details
function writeDetails(a) {
    //write city name
    const cityNameTag =document.getElementById("city-name")
    cityNameTag.textContent = "City: " + a.name
    //write temperature
    const cityTem =document.getElementById("temperature")
    cityTem.textContent = "Temp Celcius: " + a.main.temp
    //write humidity
    const cityHue =document.getElementById("humidity")
    cityHue.textContent = "Humidity: " + a.main.humidity
    //write wind
    const cityWind =document.getElementById("wind-speed")
    cityWind.textContent = "Wind (m/s): " + a.wind.speed

    //Icon
    const cityIcon =document.getElementById("weather-icon")
    cityIcon.setAttribute("src","https://openweathermap.org/img/wn/"+a.weather[0].icon+"@2x.png" );


}

//write the weather error details
function writeDetailsError(a) {
    console.log(a)
    //write city name
    const cityNameTag =document.getElementById("city-name")
    cityNameTag.textContent = "Cant find the city. try again "
    //write temperature
    const cityTem =document.getElementById("temperature")
    cityTem.textContent = "Temp Celcius: -- "
    //write humidity
    const cityHue =document.getElementById("humidity")
    cityHue.textContent = "Humidity: -- "
    //write wind
    const cityWind =document.getElementById("wind-speed")
    cityWind.textContent = "Wind (m/s): -- "

    //Icon
    const cityIcon =document.getElementById("weather-icon")
    cityIcon.setAttribute("src","https://openweathermap.org/img/wn/"+a+"@2x.png" );


}
