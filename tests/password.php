<?php
$password = 'zeta';

echo password_hash($password, PASSWORD_BCRYPT);
//echo md5($password);
