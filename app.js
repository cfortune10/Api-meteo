const APIKEY = `xxxxxxxxxx`

let url = `https://api.openweathermap.org/data/2.5/weather?q=Toulouse&appid=xxxxx&units=metric&lang=fr;`;

fetch(url).then((response) => response.json
    .then((data) => {
        console.log(data);
        document.querySelevtor(`#city`).innerHTML = data.name;
        document.querySelevtor(`#temp`).innerHTML = data.main.temp + `°`;
        document.querySelevtor(`#humidity`).innerHTML = data.main.humidity;
        document.querySelevtor(`#wind`).innerHTML = data.wind.speed + `km/h`;
    });
);

.catch((err) => console.log(`Erreur :` + err));

document.querySelevtor(`form`).addEventSelector(`submit`, function(e) {
    e.preventDefault();
    let ville = document.querySelector(`#inputCity`).value;
});