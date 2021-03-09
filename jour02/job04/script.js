// Créez un textarea dont l’id est “keylogger”. Chaque fois que l’utilisateur
// tape une lettre sur son clavier (a-z), celle-ci est ajoutée dans le textarea
// (même si le focus en cours n’est pas le textarea). Si c’est le cas, la lettre
// doit être ajoutée deux fois.

function keylogger(e) {
    var keynum;

    if (document.event) { // IE                  
        keynum = e.keyCode; // genre entrer c'est la touche 20 jcrois, la on récupère un numéro de touche
    } else if (e.which) { // Netscape/Firefox/Opera  Which va lire ce qui est pressé sur le clavier , a priori which ne sert qu'à ça                
        keynum = e.which; // si l'event a détecté une touche alors on va lui attribuer le numéro de touche keyCode et l'attribuer a keynum 
    }
    document.getElementById('textarea').textContent += String.fromCharCode(keynum); // selection de l'id, qu'on va stocker dans .textContent et formater 
    // a chaque nouvelle valeur entrée, on additionne la précédente
    // if (document.event.focus) {
    //     console.log("mabite");
    // }

}
// document.onkeypress = function () { keylogger(e) };
document.addEventListener("keypress", keylogger, true); // normalement on met un booléen mais on a pas compris donc on utilise pas
// addEventListener va executer keylogger() a chaque fois qu'un event à lieu, notamment le fait d'appuyer sur une touche
