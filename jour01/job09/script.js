// Créez une fonction “tri” qui prend en paramètres un tableau de nombres
// nommé “numbers” et une variable “order” qui contient “asc” ou “desc”. A
// l’aide d’un algorithme, cette fonction doit trier le tableau dans l’ordre
// ascendant ou décroissant, selon le paramètre passé, puis retourner le
// tableau.

function desc(x, y) { // je voulais pas déclarer d'autre fonction mais j'ai trouvé que comme ça, 
    //sinon on pouvait mettre dans la fonction direct dans le if mais je ne comprends pas trop l'interet
    // autant tout déclarer proprement 
    return y - x;
}
function asc(x, y) {
    return x - y;
}

// fonction de tri 

function tri(numbers, order) {

    let newArray = numbers;
    let temp = numbers;

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            switch (order) {
                case 'desc':
                    if (numbers[i] > newArray[j]) {
                        temp = numbers[i];
                        numbers[i] = newArray[j];
                        newArray[j] = temp;
                    }
                    break;
                case 'asc':
                    if (numbers[i] < newArray[j]) {
                        temp = numbers[i];
                        numbers[i] = newArray[j]
                        newArray[j] = temp;
                    }
                    break;
            }


        }
    }
    return console.log(newArray);


    //     if (order == 'asc') {
    //         result = numbers.sort(asc);
    //         console.log(result);
    //     }
    //     if (order == "desc") {
    //         result = numbers.sort(desc);
    //         console.log(result);
    //     }
}

numbers = [5, 8, 10, 13, 2, 3, 4, 6, 7]; // on donne un tableau prédéfini 
tri(numbers, 'asc');