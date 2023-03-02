require('./styles/index.css');
const {UI} = require('./template/UI');
const {Weather} = require('./utils/weather');
const {Store} = require('./utils/localStore');

const ui = new UI();
const store =  new Store();

const {city,code} = store.getLocationData();
const weather = new Weather(city,code);

async function fetchWeather(){
    const data = await weather.getWeather();
    ui.render(data);
}

document.querySelector("#w-change").addEventListener('click', (e)=>{
    const city = document.querySelector("#city").value;
    const code = document.querySelector("#countryCode").value;
    weather.changeLocation(city, code);
    store.setLocationData(city,code);
    fetchWeather();
    e.preventDefault();
});

document.addEventListener("DOMContentLoaded", fetchWeather)
// https://www.youtube.com/watch?v=yxT6ylPM7uM&ab_channel=Fazt