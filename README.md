<p align="center">
  <h1 align="center"> Weather App ☁️ </h1>
</p>


## Tecnologies
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

## Description :
The weather app is an application developed with HTML,CSS and JS wich consumes an the OpenWeather API to obtain the information of specific locations weather and show
it in a friendly view so the user can understand the information and search for any other country weather information through the search input.

## OpenWeather
OpenWeather is an online service that provides weather data and related services. It offers a wide range of weather data such as current weather conditions, hourly and daily forecasts, historical weather data, and more. 
The service provides data for various weather parameters including temperature, precipitation, wind speed and direction, humidity, and atmospheric pressure.

OpenWeather has an API (Application Programming Interface) that allows developers to integrate weather data into their applications, websites, or other systems. 
The API is available in both free and paid versions, with different levels of access and features. During the develpment of this application the free access was used

See more about [Openweather](https://openweathermap.org/)

## Setup/Installation Requirements
 1. NPM
    * Install Node you can use the package manager of your choice. The node version used to develop this application was ```v19.6.1```
    * Clone this repository.
    * Run ```npm install``` to install the dependencies.
 
 2. Openweather
    * Open the page and register on [Openweather](https://openweathermap.org/)
    * Get the APIKey that will allow you to consume the service
    * On the ```./src/app/utils/weather``` and put the key on the constructor where it is indicated
    
3. Webpack
   * For using webpack funcionalities you can run the following npm commands on the terminal <br>
      ```"build": "webpack --mode production"```<br>
      ```"dev": "webpack serve --mode development"```
## Demo
   
    
## MIT License

Copyright (c) Juan Camilo Sanchez Pardo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
