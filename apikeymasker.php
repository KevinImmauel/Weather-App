<?php
    // Get the contents of the JSON file 
    $strJsonFileContents = file_get_contents("secrets.json");
    // Convert to array 
    $secrets = json_decode($strJsonFileContents, false);
    $apikey = $secrets->apikey;

    if(isset($_GET["q"]))
    {
        $q = $_GET["q"];
        echo(file_get_contents('https://api.openweathermap.org/data/2.5/weather?q=' . $q . '&appid=' . $apikey . '&units=metric'));
    }
    else
    {
        $lat = $_GET["lat"];
        $lon = $_GET["lon"];
        echo(file_get_contents('https://api.openweathermap.org/data/2.5/weather?lat=' . $lat . '&lon=' . $lon . '&appid=' . $apikey . '&units=metric'));
    }
?>