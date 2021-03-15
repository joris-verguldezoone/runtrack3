<?php

echo ('
<label for="email">
    Email :
    </label>
    <input type="email" id="email" name="email" placeholder="Votre email" value="jorjooo@ok.fr">
<label for="password">
    Password :
    </label>
    <input type="password" id="password" name="password" placeholder="Votre Password" value="jorjooo">

    <button type="submit" id="tonpere" name="tonpere">Connect</button>
');

if (isset($_POST['connect'])){
    try {
        $pdo = new PDO('mysql:host=localhost; dbname=utilisateurs', 'root', '');
    }
    catch (PDOException $e) {
        die("Erreur :" . $e -> getMessage());
    }

    $email = htmlspecialchars(trim($_POST['email']));
    $password = htmlspecialchars(trim($_POST['password']));

    $getPassword = $pdo -> prepare("SELECT password FROM utilisateurs WHERE email = :email");
    $getPassword -> execute([
        "email" => $email
    ]);

    $result = $getPassword -> fetch();

    if ($result) {

        $checkPassword = $result['password'];

        if (password_verify($password, $checkPassword)){

            $sql = "SELECT * FROM utilisateurs WHERE email = :email AND password = :password";
            $data = $pdo->prepare($data);
            $data->execute([
                "email" => $email,
                "password" => $checkPassword
                ]);

            $infoUser = $data -> fetch(PDO::FETCH_ASSOC);
            $_SESSION['utilisateur'] = $infoUser;
                // header('Location: index.php');

        } else echo $log = "<p>Mot de passe incorrect.</p>";
    } else echo $log = "<p>Utilisateur introuvable.</p>";
}
?>
     <script type="text/javascript" src="script.js"></script>
