<?php
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $mail = $_POST['mail'];
    $tel = $_POST['tel'];
    $message = $_POST['message'];

if (!empty($nom) && !empty($prenom) && !empty($mail) && !empty($tel) && !empty($message)) {
    $to = 'contact@mattis-dev.fr';
    $sujet = 'Nouveau message de Mattis-Dev';
    $contenu = "Nom: $nom\nPrénom: $prenom\nAdresse e-mail: $mail\nTéléphone: $tel\nMessage: $message";
    $headers = "From: $mail";
    if (mail($to, $sujet, $contenu, $headers)) {
        header('Location: index.html');
    } else {
        header('Location: index.html');
    }
}
