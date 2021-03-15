<?php
echo ('
<label for="email">
    Email :
    </label>
    <input type="email" id="email" name="email" placeholder="Votre email">
<label for="password">
    Password :
    </label>
    <input type="password" id="password" name="password" placeholder="Votre Password">

    <button type="submit" id="connect" name="connect">Connect</button>
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

            $data = $pdo -> prepare("SELECT * FROM utilisateurs WHERE email = :email AND password = :password");
            $data -> execute([
                "email" => $email,
                "password" => $checkPassword
            ]);

            $infoUser = $data -> fetch(PDO::FETCH_ASSOC);
            $_SESSION['utilisateur'] = $infoUser;

        } else echo $log = "<p>Mot de passe incorrect.</p>";
    } else echo $log = "<p>Utilisateur introuvable.</p>";
}