// Créez un fichier style.css. Définissez la taille minimal de votre body à
// 4096px. Ajoutez un footer en position fixed en bas de votre fenêtre. De la
// même façon qu’une barre de chargement, la couleur du footer doit évoluer
// en fonction du pourcentage de scrolling.


function loadBarre() {

    const winScroll = document.body.scrollTop || document.documentElement.scrollTop; // calcul le nb de pixel par rapport au top

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight; // resultat du scrollTop

    const scrolled = (winScroll / height) * 100; //  

    document.getElementById("myBar").style.width = scrolled + "%";

}

document.onscroll = function () {

    loadBarre()
};