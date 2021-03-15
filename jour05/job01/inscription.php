<?php
if(!isset($_SESSION)){
    session_start();
}
if (isset($_POST['register']) || isset($_POST['tamere'])){
    $prenom = htmlspecialchars(trim($_POST['firstName']));
    $nom = htmlspecialchars(trim($_POST['lastName']));
    $email = htmlspecialchars(trim($_POST['email']));
    $password = htmlspecialchars(trim($_POST['password']));
    $confirmPassword = htmlspecialchars(trim($_POST['confirmPassword']));
    
    if (!empty($prenom)){
        
        if (!empty($nom)){
            
            if (!empty($email)){
                
                if (!empty($password)){
                    
                    if ($password === $confirmPassword){
                        try{
                            $pdo = new PDO('mysql:host=localhost; dbname=utilisateurs', 'root', '');
                        }
                        catch (PDOException $e){
                                die("Erreur :" . $e -> getMessage());
                        }
                            $statement = $pdo->prepare("SELECT * FROM utilisateurs WHERE nom =:nom");

                            $statement -> execute([
                    
                                "nom"=>$nom
                            ]);
                    
                            $resultat = $statement->fetchAll();
                            
                            
                            if(!$resultat){

                                $hashedPassword = password_hash($password, PASSWORD_BCRYPT);
                                $sql = "INSERT INTO utilisateurs (nom,prenom, email, password) VALUES (:nom,:prenom, :email, :password)";
                                $query = $pdo->prepare($sql);
                                $query -> execute([
                                    "nom" => $nom,
                                    "prenom" => $prenom,
                                    "email" => $email,
                                    "password" => $hashedPassword
                                    ]);
                            }
                            else{
                                echo 'utilisateur existe déjà';
                            }

                        
                    }
                    else echo $log = "<p>Mot de passe non identique.</p>";
                }
                else echo $og = "<p>Renseignez un mot de passe.</p>";
            }
            else echo $log = "<p>Renseignez votre email.</p>";
        }
        else echo $log = "<p>Renseignez votre nom.</p>";
    }
    else echo $log = "<p>Renseignez votre prénom.</p>";
}
echo '
<form action="inscription.php" method="POST">
<label for="firstName">
    Prénom :
    </label>
    <input type="text" id="firstName" name="firstName" placeholder="Votre Prénom" value="jorjooo">

<label for="lastName">
    Nom :
    </label>
    <input type="text" id="lastName" name="lastName" placeholder="Votre Nom" value="jorjooo">
<label for="email">
    Email :
    </label>
    <input type="email" id="email" name="email" placeholder="Votre email" value="jorjooo@ok.fr">
<label for="password">
    Password :
    </label>
    <input type="password" id="password" name="password" placeholder="Votre Password" value="jorjooo">
<label for="confirmPassword">
    Confirm Password :
    </label>
    <input type="password" id="confirmPassword" name="confirmPassword" placeholder=" Confirmer votre Password" value="jorjooo">

    <button type="button" id="tamere" name="tamere">inscription</button>
    </form>
';
?>
<script type="text/javascript" src="script.js"></script>

