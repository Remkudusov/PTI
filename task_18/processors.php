<?php

//header("Content-Type: application/json");

$action = $_GET['action'];

if($action == 'getPrices') {
    echo getPrices();
}

function getPrices() {
    $json = file_get_contents('pricelist.json');
    return $json;
}

 ?>