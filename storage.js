class Storage {
    constructor() {
        this.city;
        this.state;
        this.defaultCity = 'London';
    }
    getLocationData() {
        if (localStorage.getItem('city')) {
            this.city = localStorage.getItem('city');
        } else {
            this.city = this.defaultCity;
        }
        return this.city;
    }
    setLocationData(city) {
        localStorage.setItem('city', city);

    }
}