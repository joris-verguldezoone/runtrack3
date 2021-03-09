// Créez une balise button ayant comme id “button”. Lorsque l’on clique
// dessus, un <article> contenant le texte suivant est ajouté au contenu de la
// page : “L'important n'est pas la chute, mais l'atterrissage.”. Si on clique à
// nouveau sur ce bouton, l’article disparaît. L’apparition / Disparition doivent
// être gérées dans une fonction nommée “showhide()”.

function showHide() {
    let button = document.getElementById("button");
    // équivalent de if(isset(onclick)) mais les dev en C t'insulte 
    button.onclick = function showAndHide() {
        let article = document.getElementById("article");
        if (article.style.display === "none")
        // si rien est affiché, (car style->display:none;) alors on affiche style->display:block;

        {
            article.style.display = "block";
        }
        else
        // si le click n'est pas fait ou qu'on retire le premier alors style->display:none;
        {
            article.style.display = "none";
        }
    }
}