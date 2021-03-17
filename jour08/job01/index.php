<!-- Créez un fichier index.php contenant les balises html de base (doctype,
html, head, body). Dans votre body, créez un header avec une nav et un
footer contenant une liste de quatre liens (Accueil, Inscription, Connexion
et Rechercher). Ils doivent tous pointer vers votre page index.php.
Ajoutez une section avec un formulaire de création de compte contenant :
- Des inputs radios pour la civilité
- Des inputs de type text pour prénom, nom et adresse
- Des inputs de type email pour l’adresse email
- Des inputs de type password pour le password et sa validation
- Des checkbox pour choisir ses passions (informatique, voyages, sport,
lecture)
- Un bouton pour valider le formulaire -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="index.php">Accueil</a></li>
                <li><a href="index.php">Inscription</a></li>

                <li><a href="index.php">Connexion</a></li>
                <li><a href="index.php">Recherche</a></li>

            </ul>
        </nav>
    </header>
    <main>



        <form action="" method="POST">
        
            <label name="gender">
                <input type='radio' class="with-gap" name='gender' id='homme'>
                <span>Homme</span>
            </label>

            <label name="gender">
                <input type='radio' class="with-gap" name='gender' id='femme'>
                <span>Femme</span>
            </label>

            <label name="prenom"> 
                <input type='text' name='prenom' id='prenom'>
                <span>Prenom</span>
            </label>

            <label name="nom"> 
                <input type='text' name='nom' id='nom'>
                <span>Nom</span>
            </label>

            <label name="adress">
                <input type='text' name='adress' id='adress'>
                <span>Adresse</span>
            </label>

            <label name="email">
                <input type='email' name='email' id='email'>
                <span>Email</span>
            </label>

            <label name="password"> 
                <input type='password' name='password' id='password'>
                <span>Mot de passe</span>
            </label>

            <label name="confirmPassword"> 
                <input type='password' name='confirmPassword' id='confirmPassword'>
                <span>Confirmation du mot de passe</span> 
            </label>

            <label name="sport">
                <input type='checkbox' name='sport' id='sport'>
                <span>Sport</span>
            </label>
            
            <label name="science">
                <input type='checkbox' name='science' id='science'>
                <span>Science</span>
            </label>


            <label name="cuisine">
                <input type='checkbox' name='cuisine' id='cuisine'>
                <span>Cuisine</span>
            </label>

            <label name="cinema">
                <input type='checkbox' name='cinema' id='cinema'>
                <span>Cinema</span>
            </label>

            <label name="musique">
                <input type='checkbox' name='musique' id='musique'>
                <span>Musique</span>
            </label>

            <label name="jeuxVideo">
            <input type='checkbox' name='jeuxVideo' id='jeuxVideo'>
            <span>Jeux Videos</span>
            </label>

            <input type="submit" id='submit1' name="submit1">
            
            
        </form>
    </main>
    <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Fin du site :)</h5>
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Accueil</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Inscription</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Connexion</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Recherche</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
                <img src="3lcum282clw41.jpg" style="height:100px;width:100px;">
          </div>
    </footer>
</body>
</html>
