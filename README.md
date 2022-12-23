# Api-meteo



C.R.Y
Api Météo 



GUIDE D’ACCES






Sommaire

Partie 1 : Comment installer Node.js sur Windows	1
Télécharger le fichier d’installation de Node.js sur Windows	1
Commencer le processus d’installation de Node.js sur Windows	2
Lancer l’installation de Node.js sur Windows	4
Vérifier l’installation de Node.js sur Windows	5
Partie 2 : Accès à C.R.Y Api Météo sur GitHub	7



Partie 1 : Comment installer Node.js sur Windows

Suivez ce guide étape par étape pour installer Node.js sur Windows.

Télécharger le fichier d’installation de Node.js sur Windows

Tout d’abord, vous devez télécharger le fichier d’installation de Node.js pour Windows (x64).

Pour ce faire, commencez par vous rendre sur le site officiel de Node.js :

Ouvrez votre navigateur web :
 
Dans la barre d’adresse de votre navigateur, copiez l’URL (lien internet) du site officiel de Node.js, ci-après : https://nodejs.org/fr/

Ensuite, cliquez sur la version de votre choix, pour démarrer le téléchargement.
Nous vous recommandons la version 18.12.1 LTS.
Télécharger le fichier d’installation de Node.js sur Windows.















Commencer le processus d’installation de Node.js sur Windows

Une fois le téléchargement du fichier d’installation terminé, double-cliquez dessus pour l’ouvrir et lancer le processus d’installation.

L’écran ci-après apparaît :

Cliquez sur le bouton Next (Suivant) pour continuer.
A présent, une boîte de dialogue apparaît, vous demandant d’accepter le contrat de licence de Node.js :

Accepter le contrat de licence de Node.js.

Pour continuer, cochez la case I accept the terms in the License Agreement (« J’accepte ») et cliquez sur Next (Suivant).
Ensuite, sélectionnez la destination où vous voulez installer Node.js. Si vous ne voulez pas changer de répertoire, choisissez l’emplacement par défaut de Windows et cliquez à nouveau sur le bouton Next (Suivant).


Sélection du répertoire d’installation de Node.js.

L’écran suivant vous montrera des options de configuration personnalisées. Si vous voulez une installation standard avec les fonctionnalités par défaut de Node.js, cliquez sur le bouton Next (Suivant).
Sinon, vous pouvez sélectionner des éléments spécifiques à partir des icônes de l’arborescence sur la gauche, avant de cliquer sur Next (Suivant) :

Options « Configuration personnalisée » dans l’installateur de Node.js.


Node.js vous offre des options pour installer des outils. Si vous êtes intéressé par ces derniers, cliquez sur la case à cocher pour marquer vos préférences, ou cliquez sur Next (Suivant) pour continuer avec la valeur par défaut :

Outils dans l’installateur Node.js.

Lancer l’installation de Node.js sur Windows

Enfin – et c’est la partie la plus facile de toutes – cliquez sur le bouton Install (Installer) pour lancer le processus d’installation :

Commencer l’installation de Node.js sur Windows.





Le système terminera l’installation et vous affichera un message confirmant que Node.js a été installé avec succès. Cliquez sur le bouton Finish (Terminer) pour fermer le programme d’installation de Node.js :

Terminer l’installation de Node.js sur Windows.

Le processus d’installation est à présent terminé.

Vérifier l’installation de Node.js sur Windows

Maintenant, vous devez vérifier si Node.js est installé avec succès ou non.

Ouvrez l’invite de commande de l’environnement Windows, en tapant cmd dans la barre de recherche de Windows :



Valider en appuyant sur la touche Enter (Entrée) du clavier.

L’écran ci-après apparaîtra :



Au niveau du prompt de cet écran, saisissez la commande suivante :

node –version

Et pour vérifier la version de npm (gestionnaire de paquets par défaut de Node.js), lancez cette commande :

npm –version



Vérification de l’installation de Node.js sur Windows.

Si Node.js et npm sont correctement installés, vous verrez les noms des versions installées dans l’invite cmd.

Partie 2 : Accès à C.R.Y Api Météo sur GitHub
 
Ouvrez votre navigateur web :
 
Dans la barre d’adresse de votre navigateur, copiez l’URL (lien internet) de C.R.Y Api Météo ci-après : https://github.com/cfortune10/Api-meteo.git

Appuyez sur la touche Enter (Entrée) de votre clavier, pour charger la page du répertoire sur GitHub, ci-après :

Page du répertoire de C.R.Y Api Météo sur GitHub

Récupérez le répertoire Api-meteo et copiez-le sur le disque dur de votre ordinateur.
 
Au niveau de l’invite de commande de l’environnement Windows, tapez :
nodemon server.js



 Puis validez en appuyant sur la touche Enter (Entrée) du clavier.
 
La page d’accueil de C.R.Y. Api Météo s’ouvre dans votre navigateur.

Vous pouvez maintenant consulter la météo sur une ville de votre choix.
