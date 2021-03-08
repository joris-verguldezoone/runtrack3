// Créez une fonction “sommenombrespremiers” qui prend en paramètres
// deux variables. Si ces deux variables sont des nombres premiers, alors la
// fonction retourne leur somme. Sinon, la fonction retourne false.

function sommenombrepremiers(param1, param2) {


    bool = true; //on detecter/valide si $i est un nbr premier ou pas 

    for (let i = 2; i < param1; i++) { // on vérifie si param1 est un nombre premier a l'aide d'une vérification arithmétique sisi 
        if (param1 % i === 0) {
            console.log('false param1');
            return false

        }
        else {
            console.log(i);
            bool1 = true; // si c vrai on le dit dans le console log
        }
    }
    for (let y = 2; y < param2; y++) { //pareil qu'en haut 

        if (param2 % y === 0) {
            console.log('false param2');
            return false

        }
        else {
            console.log(y);
            bool2 = true;

        }
    }

    if (bool == true && bool2 == true) {
        result = param1 + param2;
        console.log(result);
        return result;
    }
    else {
        console.log('falseeee'); // 2bad everthing is bad
        return false
    }


}

sommenombrepremiers(89, 83);