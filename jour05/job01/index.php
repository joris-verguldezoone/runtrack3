<?php
if(!isset($_SESSION)){
    session_start();
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>Projet</title>
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
</head>
<body>
    <section id="link">
        <button type="button" name="connexion" id="connexion">Connexion</button>
        <button type="button" name="inscription" id="inscription">S'inscrire </button>
    </section>
    <section id="displayForm">
  
        <!-- <button type="button" name="register" id="register">Register</button> -->
    </section>
    <button id="realreturn">Revenir</button>
    <?php var_dump($_POST);
    
    var_dump($_SESSION);
    var_dump($_SESSION['utilisateur']);
     if(isset($_SESSION['utilisateur'])){
         echo "<p>BONJOUR".$_SESSION['utilisateur']['prenom']." CV ???</p>";
     }
    ?>

</body>
     <script type="text/javascript" src="script.js"></script>
</html>