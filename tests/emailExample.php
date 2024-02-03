<?php
require "PHPMailer/PHPMailer.php";
require "PHPMailer/Exception.php";
require "PHPMailer/SMTP.php";
function enviarCorreo($destinatario, $asunto, $cuerpo)
{
    $mail = new PHPMailer(true);
    // try {
    $mail->isSMTP();
    $mail->Host = 'soluxapp.com';
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;
    $mail->Username = '';
    $mail->Password = '';
    $mail->setFrom('noreply@soluxapp.com', 'Solux');
    $mail->addAddress($destinatario);
    $mail->addReplyTo('contacto@soluxapp.com', 'Contacto');
    $mail->Subject = "$asunto ";
    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Encoding = 'base64';
    $mail->Body = $cuerpo;
}
