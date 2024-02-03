<?php 
session_start();

$_SESSION['sesion3'] = 'sesion3Iniciado';

echo $_SESSION['sesion1'];

if($_SESSION['sesion1']=='sesion1Iniciado'){
    echo 'ingresa a la session1';
    ob_flush();
    flush();
    sleep(2);
    echo '<script>window.location.href = "session1.php";</script>';
    //header("location: session1.php");
}else{
    echo 'no puedes ingresar';
}

?>

<h1>session 3</h1>

<a href="session1.php">ir a session 1</a><br>
<a href="session2.php">ir a session 2</a>