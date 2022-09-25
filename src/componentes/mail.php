<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$to = "yorch1905@gmail.com";
$subject = "Proyecto desde portafolio";

$headers = "De: ".$name. "\r\n";
$txt ="Haz recibido un mensaje de ".$name ."\r\nEmail: ".$email ."\r\nMensaje: ".$message;

if($email!=NULL){
    mail($to, $subject, $txt, $headers);
}
header('Location: proyectos.js');
?>