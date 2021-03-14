<!-- Créez une base de données “utilisateurs” contenant une table “utilisateurs”
et ayant comme champs “id”, “nom”, “prenom” et “email”. Ajoutez des
utilisateurs à l’aide de phpmyadmin. Créez une page users.php qui se
connecte à la base de données, récupère l’ensemble des utilisateurs et
affiche ces informations au format json.
Dans votre page index.php, créez un tableau permettant de contenir ces
informations ainsi qu’un bouton “update”. Sans rafraichir la page, lorsque
l’on clique sur ce bouton, le tableau doit se mettre à jour et contenir
l’ensemble des informations des utilisateurs présents dans la base de
données. -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        crossorigin="anonymous">
    </script>
    <title>Exercice 4</title>
</head>
<body>
<table>
    <th>id</th>
    <th>login</th>
    <th>prenom</th>
    <th>email</th>
<tbody id='tBody'>
</tbody>
</table>
<button type='button' id='button'>Update</button>
<script type="text/javascript" src="script.js"></script>

    
</body>
</html>