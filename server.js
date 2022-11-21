//on appele express
const { response } = require('express');
const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path')
//inistialisation d'express
const app = express();
//on declare le port
const port = 3000;

app.engine('hbs', engine({defaultlayout:"main", extname:"hbs"}));
app.set('view engine', 'hbs');
app.set('views', './views');

app.use('/public', express.static(path.join(__dirname, 'assets')))

//on créer un callback
app.get('/', (request, response) => {
    response.render('index', {'index': true});
})

app.get('/une-autre-page', (request, response) => {
    response.render('une-autre-page', {'page2': true});
})

app.get('/encore-une-autre-page', (request, response) => {
    response.render('encore-une-autre-page', {page3: true});
})


//on lance l'ecoute sur le port declaré plus haut
app.listen(port, () => {
    console.log(`le serveur ecoute à l'adresse http://localhost:${port}`);
})


