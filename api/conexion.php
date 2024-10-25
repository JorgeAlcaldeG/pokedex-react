<?php
$servidor = "mysql:dbname=db_pokedex;host:localhost";
$user="root";
$pass="";

try {
    $conn = new PDO($servidor,$user,$pass,array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
    $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

} catch (\Throwable $th){
    $error = [
        "status" => "error",
        "detail" => $th->getMessage(),
    ];
    echo json_encode($error);
    die();
}
