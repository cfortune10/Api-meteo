/************************************************************************************************/
/**************************** CREATION D'UNE FONCTION POUR APPELER L'API METEO********************/
/************************************************************************************************/

/*Création de la constante APIKEY et affectation de la valeur de la clé API*/
const APIKEY = `dfd0cf24f3a6ffc667dfda89950271fa`;

/*Appel de l'API avec le nom de ville (city) en paramètre et affectation de l'url de l'API*/
let apiCall = function (city) {

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;
    
    /*Appel à l'API, formatage des informations en format json*/
    fetch(url).then((response) => response.json()
    /*Nouvelle promesse pour récupérer les données et affichage des données en modifiant les pages HTML*/
    .then((data) => {
        document.querySelector(`#city`).innerHTML = data.name;
        document.querySelector(`#temp`).innerHTML = "<i class='fas fa-thermometer-half'></i>" + data.main.temp + `°C`;
        document.querySelector(`#humidity`).innerHTML = "<i class='fas fa-tint'></i>" + data.main.humidity + `%`;
        document.querySelector(`#wind`).innerHTML = "<i class='fas fa-wind'></i>" + data.wind.speed + `km/h`;
    }))

/*Création d'une fonction err pour récupérer le code erreur au cas où l'appel à l'API ne fonctionne pas*/
.catch((err) => {
    console.log(`Erreur :` + err);
    document.querySelector(`#city`).innerHTML = " ";
    document.querySelector(`#temp`).innerHTML = " ";
    document.querySelector(`#humidity`).innerHTML = " ";
    document.querySelector(`#wind`).innerHTML = " ";
    document.querySelector(`#unknownName`).innerHTML = "Ville inconnue";
        }
    );
};

/************************************************************************************************/
//**************** Création d'une fonction pour valider le nom de ville ******************

const validName = function(inputName) {
    //Création de la reg exp pour validation du nom de ville
    let nameRegExp = new RegExp(
        '^[a-zA-Zàâéèêëîïôùûü -]+$', 'g'
    );
   
    let testNameVille = nameRegExp.test(inputName.value);
        
    //Récupération de la balise SMALL
    let small = inputName.previousElementSibling;

    if (testNameVille) {
        small.innerHTML = " ";
        return true;
    }
    else {
        small.innerHTML = "Nom de ville non valide";
        document.querySelector(`#city`).innerHTML = " ";
        document.querySelector(`#temp`).innerHTML = " ";
        document.querySelector(`#humidity`).innerHTML = " ";
        document.querySelector(`#wind`).innerHTML = " ";
        return false;
    }
};

/************************************************************************************************/
/****************************SOUMMISSION DU FORMULAIRE*******************************************/
/************************************************************************************************/

let form = document.querySelector(`#searchForm`);

/* Ecoute de la modification du nom de ville */

form.nameVille.addEventListener(`change`, function() {
    validName(this);
});

/* Ecoute de la soumission du formulaire */
form.addEventListener(`submit`, function(e) {
    e.preventDefault();
    if (validName(form.nameVille)) {
        apiCall(form.nameVille.value);
    };
});

/*Appel par défaut lors du chargement de la page*/

apiCall(`Paris`);