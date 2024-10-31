<?php
header("Access-Control-Allow-Origin: *"); // Permite cualquier origen, ten cuidado en producción
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Métodos permitidos
header("Access-Control-Allow-Headers: Content-Type");
try {
    include './conexion.php';
    
    $sel = "SELECT nom_natu, baja, sube FROM tbl_naturalezas ORDER BY nom_natu";
    $stmt = $conn->prepare($sel);
    $stmt->execute();
    
    header("Content-Type: application/json; charset=utf-8");
    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
} catch (\Throwable $th) {
    $error = [
        "status" => "error",
        "detail" => $th->getMessage(),
    ];
    echo json_encode($error);
}