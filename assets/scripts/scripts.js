

const key = "45338e195700ae03199aa1cfe3a1095b"

function putDataScreen(data){
    document.querySelector(".city").innerHTML = "Clima em "+ data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector(".text-climate").innerHTML = data.weather[0].description
    document.querySelector(".humidity").innerHTML ="Umidade: " + data.main.humidity + "%"
    document.querySelector(".img-climate").src=`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}


async function searchCity(city){
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then( response => response.json())

    putDataScreen(data)
}


function clickButtom() {
    const city= document.querySelector(".input-city").value

    searchCity(city)
}

