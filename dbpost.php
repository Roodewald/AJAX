<?php

$dbUsername = 'g614';
$dbPassword ='DiplomaGroup614';

/*$name = $_POST["name"];
$surname = $_POST["surname"];
$date = $_POST["date"];*/

$name = $_GET["name"];
$surname = $_GET["surname"];
$date = $_GET["date"];

try {
    $json_data = array();
    //соединение с БД
    $dbcon = new PDO('mysql:host=localhost;dbname=pract', $dbUsername, $dbPassword);
    $dbcon->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
 
    $data = $dbcon->prepare('INSERT INTO Savchenko (`name`, `surname`) VALUES(:name, :surname)');
  
    $data->execute(array(
        ':name' => $name,
        ':surname' => $surname
    ));

    array_push($json_data, array(
        "status" => true,
        "message"  => ""
    ));
    echo json_encode($json_data);

} catch(PDOException $e) {

    array_push($json_data, array(
        "status"  => false,
        "message"  => $e->getMessage()
    ));

    echo json_encode($json_data);
}

