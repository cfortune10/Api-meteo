const APIKEY = `dfd0cf24f3a6ffc667dfda89950271fa`;

let apiCall = function (city) {

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

    fetch(url).then((response) => response.json()
    .then((data) => {
        // console.log(data);
        document.querySelector(`#city`).innerHTML = data.name;
        document.querySelector(`#temp`).innerHTML = data.main.temp + `°`;
        document.querySelector(`#humidity`).innerHTML = data.main.humidity + `%`;
        document.querySelector(`#wind`).innerHTML = data.wind.speed + `km/h`;
    })
)

.catch((err) => console.log(`Erreur :` + err));
};

document.querySelector(`#form`).addEventListener(`submit`, function (e) {
    console.log("coucou")
    e.preventDefault();
    let ville = document.querySelector(`#inputCity`).value;

    apiCall(ville);
});

apiCall(`Paris`);