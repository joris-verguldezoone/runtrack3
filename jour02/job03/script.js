// Créez un button ayant comme id “button”. Créez un article ayant comme id
// “compteur” et contenant “0”. Ce contenu doit évoluer proportionnellement
// au nombre d'événements click reçu par le bouton. Vous ne devez pas
// utiliser “onclick()” dans votre html. La fonction permettant d’effectuer la
// modification doit s'appeler “addone()”.
function addOne() {
    let button = document.getElementById("button"); // on recupere les id 
    let nb = 0; // on initialise le compteur
    button.onclick = function oneMore() {
        nb = nb + 1;
        document.getElementById("compteur").innerHTML = nb; // DOM STRING -> innerHTML permet de choper nb par rapport au element html qui en sont parents
    };  // donc ici l'id compteur sera egal a la valeur de nb dans la fonction addOne
}