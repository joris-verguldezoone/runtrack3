// //Créez une fonction “afficherjourssemaines”. Cette fonction ne prend pas de paramètre. Créez un tableau de strings “jourssemaines” qui contient 
//  des jours de la semaine, du Lundi au Dimanche. Ensuite à l’aide d’une boucle for (for!), affichez un par un ces jours.

function afficherjourssemaines() {
    let jourssemaines = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']; // on stock les jours
    semaineLength = jourssemaines.length; // on prend la valeur du tableau et pas juste 7
    // console.log(semaineLength);
    for (i = 0; i < semaineLength; i++) { // on imprime 1 par 1
        document.write(jourssemaines[i], '<br />');
    }

}
afficherjourssemaines(); // on appel la fonction