<?php

$pdo = null;

function getConnection()
{
    global $pdo;
    $hostname = 'db';
    $database = 'pi';
    $username = 'pi.dev';
    $password = '123';
    try {
        if($pdo == null){
            $pdo = new PDO("mysql:host=$hostname;dbname=$database", $username, $password);
        }
        return $pdo;
    } catch (PDOException $error) {
        echo "Erro: " . $error->getMessage();
    }
}
