//  Créez une base de données “utilisateurs” contenant une table “utilisateurs”
// et ayant comme champs “id”, “nom”, “prenom” et “email”. Ajoutez des
// utilisateurs à l’aide de phpmyadmin. Créez une page users.php qui se
// connecte à la base de données, récupère l’ensemble des utilisateurs et
// affiche ces informations au format json.
// Dans votre page index.php, créez un tableau permettant de contenir ces
// informations ainsi qu’un bouton “update”. Sans rafraichir la page, lorsque
// l’on clique sur ce bouton, le tableau doit se mettre à jour et contenir
// l’ensemble des informations des utilisateurs présents dans la base de
// données.

$('#button').click(function () {
    $.ajax({
        url: 'user.php',
        dataType: 'json',
        type: 'GET'


    }).done(function (data) {
        data.forEach(value => {
            console.log(value);
            $("#tBody").append('<tr>')
            for (const property in value) {
                // console.log(`${property}: ${value[property]}`);
                $("#tBody").append('<td>' + value[property] + '</td>')
            }
            $("#tBody").append('</tr>')

        })





        // console.log(data);
    })
})


