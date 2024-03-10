
//Weather API : https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


//Weather London API : https://api.openweathermap.org/data/2.5/weather?q=London&appid=deb41da100a4adf43b939c1e823043cb

var ulr;
var city = "London";
const apiKey = "deb41da100a4adf43b939c1e823043cb"
ulr = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey

console.log(ulr);



fetch(ulr).then((response)=>{
    console.log(response);
    return response.json();
}).then((data)=>{
    const weather= data;
    console.log(weather);
    productsPrint(weather);
}).catch((error)=>{
    console.log(error);
})