// <!-- Créez un formulaire permettant de trier ces données. Il doit contenir les
// champs suivant : id (input type text), nom (input type text), type (liste
// déroulante) et filtrer (input type button). Lorsque l’on clique sur “filtrer”, le
// script doit à l’aide d’AJAX, récupérer le contenu du fichier et lister les
// éléments répondant aux critères sélectionnés en les affichant sur une page
// HTML. -->



//appel a la fonction qui va chercher les valeurs

// var monJson = $.getJSON("pokemon.json", function (json) {
//     var monJson = json;
//     // console.log(monJson); // this will show the info it in firebug console
//     // document.getElementById('ici').append(monJson[id][nom]);
//     return monJson;
// });

$('#envoyer').click(function () {
    $.ajax({
        url: 'pokemon.json',
        type: 'GET',
        dataType: 'json',

        success: function (data) {

            var idSearch = document.getElementById("id");
            var nomSearch = document.getElementById("nom");
            var typeSearch = document.getElementById("type");


            if (idSearch || nomSearch || typeSearch) { // si ces variable ont une valeur alors on les detecte et on va les utiliser , le || permet de facilement selectionner qu'une variable

                for (var i = 0; i < data.length; i++) { // data.lenght -> tous les pokemon a trier

                    var row = $('<p> Nom : ' + data[i].name.french + '<br> Type : ' + data[i].type + '<br>Attaque : ' + data[i].base.Attack + '</p>');
                    // affichage complet d'un pokemon 
                    if (idSearch) {
                        if ($('#id').val() == data[i].id) { // si l'id est le meme que celui chopé dans le for alors on l'affiche avec row
                            $('#demo').append(row);
                        }
                    }

                    if (nomSearch) {
                        if ($('#nom').val() == data[i].name.french) {
                            $('#demo').append(row);
                        }
                    }
                    console.log(typeSearch);

                    if (typeSearch) {
                        if ($('#type').val() == data[i].type) {
                            $('#demo').append(row);
                        }
                    }
                }
            }
        }

    });
});
// fonction closure -> fonction dans une variable

