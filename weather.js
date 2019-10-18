class Weather {
    constructor(city) {
        this.apiKey = '6583ff5977a67fd1a406e9af898efca3';
        this.city = city;
    }

    //fetch weather from APO
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}`);
        const responseData = await response.json();
        return responseData;
    }

    changeLocation(city) {
        this.city = city;
    }
}