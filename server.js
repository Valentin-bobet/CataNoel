const express = require('express');
const app = express();

const Jouet = require('./Jouet.js');
const TrancheAge = require('./trancheAge.js');
const Categorie = require('./Categorie.js');

    // DONNEES
let tranche02 =  new TrancheAge("tranche02",0,2);
let tranche25 =  new TrancheAge("tranche25",2,5);
let tranche48 =  new TrancheAge("tranche48",4,8);

let categorie1 = new Categorie("Plein Air");
let categorie2 = new Categorie("Jeux d'imagination");
let categorie3 = new Categorie("Jeux d'eveil");

let lesJouets = [];
let unJouet1 = new Jouet(1,"Draisienne junior bleue",tranche25,categorie1);
lesJouets.push(unJouet1);

let unJouet2 = new Jouet(2,"Trottinette 2 en 1 space Blanche",tranche48, categorie1);
lesJouets.push(unJouet2);

let unJouet3 = new Jouet(3,"Atelier de bricolage Tap tap Véhicules",tranche48,categorie2);
lesJouets.push(unJouet3);


    //ROUTES
app.get('/', function (req,res) {
    let responseText = 'Bienvenue dans le catalogue de jouet';
    res.send(responseText);
});

//affiche tous les jouets
app.get('/jouets',
        (req,res) =>  {
            let responseText = 'Voici la liste des jouets </br>';
            lesJouets.forEach(
                    (unJouet) => {responseText += `Jouet : ${unJouet.libelle}  </br>`;}
    	  	);
            responseText += '<hr>';
                    responseText += 'Ajout d\'un nouveau jouet </br>';
                    responseText += '<form action="/jouets" method="post">';
                    responseText += 'Libelle :<br>';
                    responseText += '<input type="text" name="libelle" value=""><br>';
                    responseText += 'Categorie :<br>';
                    responseText += '<select>';
                    responseText += `<option value="cat1"> ${categorie1.libelle}</option>`;
                    responseText += `<option value="cat2"> ${categorie2.libelle}</option>`;
                    responseText += `<option value="cat3"> ${categorie3.libelle}</option>`;
                    responseText +='</select><br>';
                    responseText += 'Tranche d\'âge :<br>';
                    responseText += '<select>';
                    responseText += `<option value="t02"> ${tranche02.toString()}</option>`;
                    responseText += `<option value="t25"> ${tranche25.toString()}</option>`;
                    responseText += `<option value="t48"> ${tranche48.toString()}</option>`;
                    responseText +='</select><br>';
                    responseText += '<input type="submit" value="Envoyer">';
                    responseText += '</form>';
            res.send(responseText);
        });

//Affiche le jouet d'id :id
    app.get('/jouets/:id',
            (req, res) => {

            let id=req.params.id;

                if (id < lesJouets.length+1){
                    let responseText = `Jouet : ${lesJouets[id-1].libelle}`;
                    res.send(responseText);
                }
            else
            {
                res.status(404).send('Sorry ! Toy doesn\'t exist');
            }
    });


            // DEMARRAGE DU SERVEUR
                try {
        app.listen(8081,'127.0.0.1',() => {
               console.log("Serveur demarré");
            });
    } catch (err) {
    	console.error(' Erreur de démarrage du serveur!', err);
    }