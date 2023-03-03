//CONSUMIR LOS DATOS DEL API
export class Weather {
    
    constructor(city, code){
        this.apiKey = ""; //ACA LA KEY OBTENIDA DE OPENWEATHER
        this.city = city;
        this.code = code;
    }

    async getWeather(){
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.code}&appid=${this.apiKey}&units=metric`;  
        const response = await fetch(URI) 
        const data = await response.json()
        return data;
    }

    changeLocation(city, code){
        this.city = city;
        this.code = code;
    }
}