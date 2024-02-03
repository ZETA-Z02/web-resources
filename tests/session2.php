<?php 
session_start();

$_SESSION['sesion2'] = 'sesion2Iniciado';

echo $_SESSION['sesion1'];

?>

<h1>session 2</h1>

<a href="session3.php">ir a session 3</a><br>
<a href="session1.php">ir a session 1</a>