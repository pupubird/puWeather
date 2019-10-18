//get storage data
const storage = new Storage();
const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation);
const ui = new UI();


//on load
const getWeather = () => {
    weather.getWeather().then(res => {
        ui.paint(res);
    });
};
document.addEventListener("DOMContentLoaded", getWeather);

//change location button
document.getElementById('w-change-btn').addEventListener('click', e => {
    const city = document.getElementById('city').value;
    weather.changeLocation(city);
    storage.setLocationData(city);

    getWeather();

    $('#locModal').modal('hide');
});

