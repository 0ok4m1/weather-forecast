

const key = "fb737e55f7bff60d77a2d259759d02f4";

function dataOnScreen(data) {
    document.querySelector(".city").innerHTML = `Tempo em ${data.name}`;
    document.querySelector(".temp").innerHTML = data.main.temp.toFixed(0) + "°C";
    document.querySelector(".climate-text").innerHTML = data.weather[0].description;
    document.querySelector(".img-climate").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    document.querySelector(".moisture").innerHTML =  `Umidade: ${data.main.humidity}%`;
}

async function searchCity(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());

    dataOnScreen(data);
}

function buttonClicked() {
    const city = document.querySelector(".input-city").value;

    searchCity(city);
}

