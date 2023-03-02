//ALMACENAR DATOS DENTRO DEL LOCAL STORAGE
export class Store{

    constructor(){
        this.city;
        this.code;
        this.defaultCity = 'Bogota';
        this.defaultCode = 'CO';
    }

    setLocationData(city,code){
        localStorage.setItem('city',city);
        localStorage.setItem('code',code);
    }

    getLocationData(){
        if( localStorage.getItem('city') == null ){
            this.city = this.defaultCity;
            this.code = this.code;
        }else{
            this.city = localStorage.getItem('city');
            this.code = localStorage.getItem('code');
        }

        return {
            city: this.city,
            code: this.code
        }
    }
}