/*jslint browser:true */
'use strict';

var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var cObj;
var fObj;

// GET THE CONDITIONS
weatherConditions.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=84653,us&appid=9e5934632d7f34dcb20cc9a5ea15543d', true);
weatherConditions.responseType = 'text';
weatherConditions.send(null);

weatherConditions.onload = function() {
    if (weatherConditions.status === 200){
        cObj = JSON.parse(weatherConditions.responseText);
        console.log(cObj);


    } //end if
}; //end function










// GET THE FORECARST
//weatherForecast.open('', '', true);
//weatherForecast.responseType = 'text';
//weatherForecast.send();

weatherForecast.onload = function() {
if (weatherForecast.status === 200){
	fObj = JSON.parse(weatherForecast.responseText);
	console.log(fObj);

} //end if
}; //end function
