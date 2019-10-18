const weather = new Weather('London');
const ui = new UI();
//on load
const getWeather = () => {
    weather.getWeather().then(res => {
        console.log(res);
        ui.paint(res);
    });
};
document.addEventListener("DOMContentLoaded", getWeather);

