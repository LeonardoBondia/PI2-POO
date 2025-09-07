<?php

require_once('../db/connection.php');
require('../utils/helpers.php');

getHeaders();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    try {
        $con = getConnection();

        $data = getBody();
        $stmt = $con->prepare("INSERT INTO administrador (email, senha) VALUES (:email, :senha)");

        $stmt->execute([
            "email" => $data['email'],
            "senha" => password_hash($data['senha'], PASSWORD_DEFAULT)
        ]);

        header('Content-Type: application/json; charset=utf-8');
        sendResponse(
            message: 'Administrador criado com sucesso', 
            data: $con->lastInsertId(), 
            error: false
        );
        exit;
    } catch (Exception $e) {
        sendResponse(
            message: 'Não foi possivel criar o Administrador', 
            data: null, 
            error: true
        );
        exit;
    }
} else {
    sendResponse(
        message: 'Método inválido', 
        data: null, 
        error: true
    );
    exit;
}
