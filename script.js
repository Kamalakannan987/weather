const apiKey = "27df1fd374b0662e51ab24158515e808";

async function getWeather(){

    const city =
    document.getElementById("city").value;

    if(city === ""){

        alert("Enter City Name");
        return;

    }

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{

        const response =
        await fetch(url);

        const data =
        await response.json();

        document.getElementById(
        "temperature").innerHTML =
        Math.round(data.main.temp) + "°C";

        document.getElementById(
        "cityName").innerHTML =
        data.name;

        document.getElementById(
        "description").innerHTML =
        data.weather[0].description;

        document.getElementById(
        "humidity").innerHTML =
        data.main.humidity + "%";

        document.getElementById(
        "wind").innerHTML =
        data.wind.speed + " km/h";

        const icon =
        data.weather[0].icon;

        document.getElementById(
        "weatherIcon").src =
        `https://openweathermap.org/img/wn/${icon}@4x.png`;

    }
    catch(error){

        alert("City Not Found");
    }
}