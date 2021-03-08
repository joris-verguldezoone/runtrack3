// Créez une fonction “jourtravaille” qui prend en paramètre une date au format Date. 
// Si la date correspond à un jour férié de l’année 2020, la fonction affiche “Le $jour $mois $année est un jour férié”.
// Si elle correspond à un samedi ou un dimanche, alors le message affiché est “Non, $jour $mois $année est un week-end”,
// sinon afficher “Oui, $jour $mois $année est un jour travaillé”. ex : “Oui, 9 mars 2020 est un jour travaillé”. $jour correspond au numéro du jour, 
// $mois au mois et $année à l’année. Les jours fériés sont référencés 
// sur

function jourTravaille(date) {
    let jourFeries = [
        '2020-01-01',
        '2020-04-13',
        '2020-05-01',
        '2020-05-08',
        '2020-05-21',
        '2020-06-01',
        '2020-07-14',
        '2020-09-15',
        '2020-11-01',
        '2020-11-11',
        '2020-12-25']; // on stock les jours fériés dans un tableau pour les mettre en condition
    let dateType = new Date(date); // on déclare un objet qui possede le parametre de la fonction
    console.log("DATE = " + date);  // pour savoir ou on en est

    //définition du jour
    let jour = new Intl.DateTimeFormat('fr', { weekday: 'long' }).format(dateType); // intl format permet de moduler des date, ici on formate quel jours on est dans la semaine
    console.log("JOUR DE LA SEMAINE = " + jour);

    //définition du n° du jour dans le mois
    let numeroday = new Intl.DateTimeFormat('fr', { day: 'numeric' }).format(dateType); // quel jour on est dans le mois numero 
    console.log("Numero du jour dans le mois = " + numeroday);

    //definition du mois
    let mois = new Intl.DateTimeFormat('fr', { month: 'long' }).format(dateType); // quel mois l'on est
    console.log("Le mois = " + mois);

    //définition année
    let annee = new Intl.DateTimeFormat('fr', { year: 'numeric' }).format(dateType); // quelle année
    console.log("annee = " + annee);



    if (jourFeries.includes(date)) { // on véréfie avec tout le tableau des jours férié + la date entrée
        console.log("Le " + jour + " " + numeroday + " " + mois + " " + annee + " est un jour férié")
    }
    else if (jour === "samedi" || jour === "dimanche") { // les week-end
        console.log("Non, le " + jour + " " + numeroday + " " + mois + " " + annee + " est un weekend")
    }
    else if (!jourFeries.includes(date)) { // si c'est un jour travaillé
        console.log("Oui, le " + jour + " " + numeroday + " " + mois + " " + annee + " est un jour travaillé")
    }
}
console.log(jourTravaille('2020-12-28')); // on imprime le résultat de l'appel a notre fonction