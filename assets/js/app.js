// clef de l'API
const APIKEY = `dfd0cf24f3a6ffc667dfda89950271fa`;
// variable de apicall avec sa function 
let apiCall = function (city) {
//  var URL 
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;
// appelle l'API 
    fetch(url).then((response) => response.json()
    .then((data) => {
        // console.log(data);
        //  appelle le json
        document.querySelector(`#city`).innerHTML = data.name;
        document.querySelector(`#temp`).innerHTML = 
            "<i class='fas fa-thermometer-half'></i>" + data.main.temp + `°`;
        document.querySelector(`#humidity`).innerHTML = 
            "<i class='fas fa-tint'></i>" + data.main.humidity + `%`;
        document.querySelector(`#wind`).innerHTML = 
            "<i class='fas fa-wind'></i>" + data.wind.speed + `km/h`;
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