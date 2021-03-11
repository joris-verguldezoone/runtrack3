<!-- Créez un formulaire permettant de trier ces données. Il doit contenir les
champs suivant : id (input type text), nom (input type text), type (liste
déroulante) et filtrer (input type button). Lorsque l’on clique sur “filtrer”, le
script doit à l’aide d’AJAX, récupérer le contenu du fichier et lister les
éléments répondant aux critères sélectionnés en les affichant sur une page
HTML. -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AJAX</title>
    <script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        crossorigin="anonymous">
    </script>
</head>
<body>
<form action='' method='GET'>

    <label for='id'>ID</label>
    <input type='text' id='id' name='id'>

    <label for='nom'>Nom</label>
    <input type='text' id='nom' name='nom'>

    <select name='select' id='select'>
        <option value='Bug'> Bug  </option>
        <option value='Dragon'> Dragon  </option>
        <option value='Fire'> Fire  </option>
        <option value='Water'> Water  </option>
        <option value='Flying'> Flying  </option>
        <option value='Normal'> Normal  </option>
        <option value='Electric'> Electric  </option>
        <option value='Grand'> Grand  </option>
        <option value='Fairy'> Fairy  </option>
        <option value='Fighting'> Fighting  </option>
        <option value='Psychic'> Psychic  </option>
        <option value='Rock'> Rock  </option>
        <option value='Steel'> Steel  </option>
        <option value='Ice'> Ice  </option>
        <option value='Ghost'> Ghost  </option>
        <option value='Grass'> Grass  </option>
        <option value='Poison'> Poison  </option>
    
    </select>

    <input type='submit' id='submit'>

</form>

<div id='ici'> </div>

    <script type="text/javascript" src="script.js"></script>

</body>
</html>