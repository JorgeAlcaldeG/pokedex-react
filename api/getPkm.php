<?php
header("Access-Control-Allow-Origin: *"); // Permite cualquier origen, ten cuidado en producción
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Métodos permitidos
header("Access-Control-Allow-Headers: Content-Type");

include "conexion.php";
$src = $_GET["src"];
$sel = "SELECT pokemon_name, pokemon_id FROM tbl_pokemon";
if($src !=""){
    $sel .=" WHERE pokemon_name LIKE '".$src."%'";
}
$stmt = $conn->prepare($sel);
$stmt->execute();

header("Content-Type: application/json; charset=utf-8");
$Allpkm = json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
echo $Allpkm;
