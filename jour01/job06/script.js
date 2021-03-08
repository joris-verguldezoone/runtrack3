// Créez une fonction fizzbuzz qui ne prend pas de paramètre. Dans cette
// fonction, affichez dans la console web les nombres de 1 à 151. Remplacez
// certains nombres par un mot selon les conditions suivantes :
// - Si le nombre est un multiple de 3, affichez “Fizz”.
// - Si le nombre est un multiple de 5, affichez “Buzz”.
// - Si le nombre est un multiple de 3 et de 5, affichez “FizzBuzz”.

function fizzbuzz() { // c'est un nom mignon pour une fonction

    for (let i = 0; i < 151; i++) { // on imprime 1 par 1
        if (i % 3 == 0) { // y'a pas besoin d'explication a part si t'es nul en maths:
            console.log('Fizz'); // du coup les multiple de 3 sont egal a Fizz
        }
        if (i % 5 == 0) {
            console.log('Buzz'); // les multiple de 5 sont egal a Buzz
        }
        if (i % 3 == 0 && i % 5 == 0) // les multiples qui sont a la fois de 3 et 5 impriment FizzBuzz
            console.log('FizzBuzz');
        else {
            console.log(i, ':)'); // ptit smiley pour la bonne humeur 
        }
    }

}
fizzbuzz(); // on appel la fonction