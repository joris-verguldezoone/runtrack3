// <!-- Créez un formulaire permettant de trier ces données. Il doit contenir les
// champs suivant : id (input type text), nom (input type text), type (liste
// déroulante) et filtrer (input type button). Lorsque l’on clique sur “filtrer”, le
// script doit à l’aide d’AJAX, récupérer le contenu du fichier et lister les
// éléments répondant aux critères sélectionnés en les affichant sur une page
// HTML. -->

var id = $('id').val()
var nom = $('nom').val()
var select = $('select').val()
console.log(id)
console.log(nom)
console.log(select)
//appel a la fonction qui va chercher les valeurs

$('#submit').click(function () {
    $.ajax({
        url: 'pokemon.json',
        dataType: 'json',

    }).done(function () {
        console.log()
    })

})
// il faut récuperer id name type base
function jsonValueKey(jayzon, key) {

    var monJson = JSON.parse(jayzon);

    return monJson[key]
}
console.log(jsonValueKey(jaizon, 'Dragon'));
$('body').append(jsonValueKey(jaizon, 'Dragon'))
