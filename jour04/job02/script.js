
// Créez une fonction javascript “jsonValueKey()” qui prend en paramètre une
// chaîne de caractères au format json et une clé. Cette fonction retourne la
// valeur liée à cette clé dans la chaîne de caractères. Par exemple si la
// string passée en paramètre est “{name: "La Plateforme_", address: "8 rue
// d'hozier", city: "Marseille", nb_staff: "11", creation:"2019"}” et la clé est
// “city”, la fonction retourne “Marseille”.

var jaizon = '{ "name": "La Plateform", "adress": "8 rue d hozier", "city": "Marseille", "nb_staff": "11",  "creation": "2019" }';



function jsonValueKey(jaizon, key) {

    var monJson = JSON.parse(jaizon);

    return monJson[key]
}
console.log(jsonValueKey(jaizon, 'city'));
$('body').append(jsonValueKey(jaizon, 'city'))


