<?php
header("Access-Control-Allow-Origin: *"); // Permite cualquier origen, ten cuidado en producción
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Métodos permitidos
header("Access-Control-Allow-Headers: Content-Type");

try {
    include "conexion.php";
    if(!isset($_GET["id"])){
        if(isset($_GET["src"])){
            $src = $_GET["src"];
        }else{
            $src = "";
        }
        $sel = "SELECT pokemon_name, pokemon_id FROM tbl_pokemon";
        if($src !=""){
            $sel .=" WHERE pokemon_name LIKE '".$src."%'";
        }
        $stmt = $conn->prepare($sel);
        $stmt->execute();
        
        header("Content-Type: application/json; charset=utf-8");
        $pkm = json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
    }else{
        $id = $_GET["id"];
        $sel = "SELECT p.pokemon_id AS 'id', p.pokemon_name AS 'nombre', p.pokemon_categoria AS 'categoria', p.pokemon_description AS 'desc', t.type_name AS 'tipo1',t2.type_name AS 'tipo2', r.region_name AS 'region', a1.ability_name_es AS 'hab1',a1.ability_desc AS 'hab1_des',a2.ability_name_es AS 'hab2',a2.ability_desc AS 'hab2_des', a3.ability_name_es AS 'hab3',a3.ability_desc AS 'hab3_des', s.ps AS 'ps',s.atk AS 'atk',s.def AS 'def',s.spa AS 'spa',s.spd AS 'spd',s.spe AS 'spe'
            FROM tbl_pokemon p 
            INNER JOIN tbl_types t ON p.pokemon_type1 = t.type_id
            LEFT JOIN tbl_types t2 ON p.pokemon_type2 = t2.type_id
            INNER JOIN tbl_region r ON p.pokemon_region = r.region_id
            INNER JOIN tbl_ability a1 ON p.pokemon_ability1 = a1.ability_id
            LEFT JOIN tbl_ability a2 ON p.pokemon_ability2 = a2.ability_id
            LEFT JOIN tbl_ability a3 ON p.pokemon_ability3 = a3.ability_id
            INNER JOIN tbl_stats s ON p.pokemon_id = s.stats_id
            WHERE p.pokemon_id = $id LIMIT 1;";
        $stmt = $conn->prepare($sel);
        $stmt->execute();
        
        header("Content-Type: application/json; charset=utf-8");
        $pkm = json_encode($stmt->fetch(PDO::FETCH_ASSOC));
    }
    echo $pkm;
} catch (\Throwable $th) {
    $error = [
        "status" => "error",
        "detail" => $th->getMessage(),
    ];
    echo json_encode($error);
}
