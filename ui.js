class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.humidity = document.getElementById('w-humidity');
        this.wind = document.getElementById('w-wind');
    }
    paint(weather) {
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.humidity.textContent = 'Humidity level: ' + weather.main.humidity;
        this.wind.textContent = 'Degree: ' + weather.wind.deg + ' Speed: ' + weather.wind.speed;
    }
}