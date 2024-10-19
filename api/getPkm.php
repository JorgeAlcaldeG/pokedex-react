<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *"); // Permite cualquier origen, ten cuidado en producción
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Métodos permitidos
header("Access-Control-Allow-Headers: Content-Type");

include "conexion.php";

$sel = "SELECT pokemon_name, pokemon_id FROM tbl_pokemon";
$stmt = $conn->prepare($sel);
$stmt->execute();

if ($stmt->rowCount() == 0) {
    echo json_encode(["message" => "Sin resultados"]);
} else {
    header("Content-Type: application/json; charset=utf-8");
    $Allpkm = json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
    echo $Allpkm;
}
