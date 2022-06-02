var cityname = document.querySelector('.cityname')
var searchbtn = document.querySelector('.search')
var iconele = document.querySelector('.icon')
var mode = document.querySelector('.mode')
var checkbox = document.querySelector('.checkbox')
var checkmode = document.querySelector('.checkmode')
var weatherloc = document.querySelector('.weatherloc')
var latText = document.querySelector('.latit')
var longText = document.querySelector('.longi')
var countryname = document.querySelector('.countryname')

function capitalize(s){
    return s && s[0].toUpperCase() + s.slice(1);
}

navigator.geolocation.getCurrentPosition(function(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    latText.innerText = lat.toFixed(2);
    longText.innerText = long.toFixed(2);
})

weatherloc.addEventListener('click', () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + latText.innerText + '&lon=' + longText.innerText + '&appid=cd2dd51ee83d165cdffc8f9c626be58d&units=metric')
        .then(response => response.json())
        .then(data => {
            var weathericon = data["weather"][0]["icon"]
            if (weathericon === '01d'){
                iconele.innerHTML = '<i class="fa-solid fa-sun"></i>'
            } if (weathericon === '01n'){
                iconele.innerHTML = '<i class="fa-solid fa-moon"></i>'
            } if (weathericon === '02d'){
                iconele.innerHTML = '<i class="fa-solid fa-cloud-sun"></i>'
            } if (weathericon === '02n'){
                iconele.innerHTML = '<i class="fa-solid fa-cloud-moon"></i>'
            } if (weathericon === '03d' || weathericon === '03n' || weathericon === '04d' || weathericon === '04n'){
                iconele.innerHTML = '<i class="fa-solid fa-cloud"></i>'
            } if (weathericon === '09d' || weathericon === '09n'){
                iconele.innerHTML = '<i class="fa-solid fa-cloud-showers-heavy"></i>'
            } if (weathericon === '10d'){
                iconele.innerHTML = '<i class="fa-solid fa-cloud-sun-rain"></i>'
            } if (weathericon === '10n'){
                iconele.innerHTML = '<i class="fa-solid fa-cloud-moon-rain"></i>'
            } if (weathericon === '11d' || weathericon === '11n'){
                iconele.innerHTML = '<i class="fa-solid fa-cloud-bolt"></i>'
            } if (weathericon === '13d' || weathericon === '13n'){
                iconele.innerHTML = '<i class="fa-solid fa-snowflake"></i>'
            } if (weathericon === '50d' || weathericon === '50n'){
                iconele.innerHTML = '<i class="fa-solid fa-smog"></i>'
            }

            countryname.innerHTML = data["sys"]["country"] + ', ' + data["name"]
            document.querySelector('.temp').innerHTML = data["main"]["temp"] + '°'
            document.querySelector('.windspd').innerHTML = data["wind"]["speed"] + ' m/s'
            document.querySelector('.weatherdes').innerHTML = capitalize(data["weather"][0]["description"])
            document.querySelector('.humidity').innerHTML = data["main"]["humidity"] + '%'
            document.querySelector('.pressure').innerHTML = data["main"]["pressure"] + ' hPa'
            document.querySelector('.tempmin').innerHTML = data["main"]["temp_min"] + '°'
            document.querySelector('.tempmax').innerHTML = data["main"]["temp_max"] + '°'
            document.querySelector('.cloudper').innerHTML = data["clouds"]["all"] + '%'

            document.querySelector(".fullcont").style.display = "flex"
            document.querySelector(".input").style.padding = "7% 0 0 0"
        })
})

checkbox.addEventListener('click', (event) => {
    if (checkbox.classList.contains('on')){
        checkbox.setAttribute('aria-checked', 'false')
        checkmode.innerHTML = 'Light Mode'
        document.getElementsByTagName("BODY")[0].style.backgroundImage = "url(cool-background.svg)"
        document.getElementsByTagName("BODY")[0].style.color = "#000"
        document.getElementsByTagName("BODY")[0].style.backgroundColor = "#fff"
        cityname.style.border = "#000 solid 2px"
        searchbtn.style.backgroundColor = "#000"
        searchbtn.style.color = "#fff"
        document.querySelector(".fullcont").style.color = "#000"
        document.querySelector('.icont').style.backgroundColor = "rgb(240, 240, 240)"
        iconele.style.color = '#000'
        weatherloc.style.color = '#000'
        weatherloc.style.border = '#000 solid 1px'
        for (let i = 0; i < (document.querySelectorAll('.box')).length; i++){
            document.querySelectorAll('.box')[i].style.backgroundColor = "rgb(240, 240, 240)"
        }
    } else {
        checkbox.setAttribute('aria-checked', 'true')
        checkmode.innerHTML = 'Dark Mode'
        document.getElementsByTagName("BODY")[0].style.backgroundImage = "url(cool-backgroundb.svg)"
        document.getElementsByTagName("BODY")[0].style.color = "#fff"
        document.getElementsByTagName("BODY")[0].style.backgroundColor = "#000"
        cityname.style.border = "#fff solid 2px"
        searchbtn.style.backgroundColor = "#fff"
        searchbtn.style.color = "#000"
        document.querySelector(".fullcont").style.color = "#fff"
        document.querySelector('.icont').style.backgroundColor = "#121212"
        iconele.style.color = '#fff'
        weatherloc.style.color = '#fff'
        weatherloc.style.border = '#fff solid 1px'
        for (let i = 0; i < (document.querySelectorAll('.box')).length; i++){
            document.querySelectorAll('.box')[i].style.backgroundColor = "#121212"
        }
    }
    checkbox.classList.toggle('on')
})

searchbtn.addEventListener("click", function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ cityname.value +'&appid=cd2dd51ee83d165cdffc8f9c626be58d&units=metric')
        .then(response => response.json())
        .then(data => {
            var weathericon = data["weather"][0]["icon"]
            
            if (weathericon === '01d'){
                iconele.innerHTML = '<i class="fa-solid fa-sun"></i>'
            } if (weathericon === '01n'){
                iconele.innerHTML = '<i class="fa-solid fa-moon"></i>'
            } if (weathericon === '02d'){
                iconele.innerHTML = '<i class="fa-solid fa-cloud-sun"></i>'
            } if (weathericon === '02n'){
                iconele.innerHTML = '<i class="fa-solid fa-cloud-moon"></i>'
            } if (weathericon === '03d' || weathericon === '03n' || weathericon === '04d' || weathericon === '04n'){
                iconele.innerHTML = '<i class="fa-solid fa-cloud"></i>'
            } if (weathericon === '09d' || weathericon === '09n'){
                iconele.innerHTML = '<i class="fa-solid fa-cloud-showers-heavy"></i>'
            } if (weathericon === '10d'){
                iconele.innerHTML = '<i class="fa-solid fa-cloud-sun-rain"></i>'
            } if (weathericon === '10n'){
                iconele.innerHTML = '<i class="fa-solid fa-cloud-moon-rain"></i>'
            } if (weathericon === '11d' || weathericon === '11n'){
                iconele.innerHTML = '<i class="fa-solid fa-cloud-bolt"></i>'
            } if (weathericon === '13d' || weathericon === '13n'){
                iconele.innerHTML = '<i class="fa-solid fa-snowflake"></i>'
            } if (weathericon === '50d' || weathericon === '50n'){
                iconele.innerHTML = '<i class="fa-solid fa-smog"></i>'
            }

            document.querySelector('.temp').innerHTML = data["main"]["temp"] + '°'
            document.querySelector('.windspd').innerHTML = data["wind"]["speed"] + ' m/s'
            document.querySelector('.weatherdes').innerHTML = capitalize(data["weather"][0]["description"])
            document.querySelector('.humidity').innerHTML = data["main"]["humidity"] + '%'
            document.querySelector('.pressure').innerHTML = data["main"]["pressure"] + ' hPa'
            document.querySelector('.tempmin').innerHTML = data["main"]["temp_min"] + '°'
            document.querySelector('.tempmax').innerHTML = data["main"]["temp_max"] + '°'
            document.querySelector('.cloudper').innerHTML = data["clouds"]["all"] + '%'

            document.querySelector(".fullcont").style.display = "flex"
            document.querySelector(".input").style.padding = "7% 0 0 0"
        })
})