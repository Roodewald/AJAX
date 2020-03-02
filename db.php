<?php

$dbUsername = 'g614';
$dbPassword ='DiplomaGroup614';

 
try {
    $jdata = array();
    //соединение с БД
    $dbcon = new PDO('mysql:host=localhost;dbname=pract', $dbUsername, $dbPassword);
    $dbcon->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
 
    //получаем данные
    $data = $dbcon->query('SELECT * FROM Savchenko');
 
    //выводим результат
    foreach($data as $rows) {
        array_push($jdata, array(
            "id"      => $rows['id'],
            "name"    => $rows['name'],
            "surname" => $rows['surname'],
            "brith"   => date('d/m/Y', strtotime($rows['brith']))
        ));
    }
 echo json_encode($jdata);
} catch(PDOException $e) {
    echo 'Ошибка: ' . $e->getMessage();
};
