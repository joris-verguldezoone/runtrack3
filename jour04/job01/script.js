// Créez un button ayant comme id “button”. Créez un fichier expression.txt
// contenant votre expression favorite. Lorsqu’un utilisateur clique sur le
// bouton, à l’aide d’AJAX, récupérez le contenu du fichier expression.txt,
// placez le dans un paragraphe et insérez le dans le corps de votre page.

$('#button').click(function () {
    $.ajax({
        url: 'expression.txt', // virgule pcq c'est comme un tableau sauf que c'est un objet , si on met l'url en MAJ ça marche plus (:
        // type: 'GET', // le type de la requete en HTTP
        dataType: 'text',

    })
        .done(function (dataToPrint) {
            $('<p>' + dataToPrint + '</p>').appendTo('#ici'); // appendTo ça fonctionne a l'envers
            console.log(dataToPrint);
        })
        
});
