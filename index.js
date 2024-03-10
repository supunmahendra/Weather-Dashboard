
//Weather API : https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


//Weather London API : https://api.openweathermap.org/data/2.5/weather?q=London&appid=deb41da100a4adf43b939c1e823043cb

var ulr;
var city;
const apiKey = "deb41da100a4adf43b939c1e823043cb"


// button action
const btn = document.querySelector("#search-button")
btn.addEventListener("click",() => {search()})


// function start hear
function search() {
    city = document.getElementById("search-input").value;
    console.log(city);
    ulr = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey;
    fetchData(ulr);
}




function fetchData(ulr){
    fetch(ulr).then((response)=>{
       return response.json();
    }).then((data)=>{
        const weather= data;
        console.log(weather);
        productsPrint(weather);
    }).catch((error)=>{
        console.log(error);
    })
}
