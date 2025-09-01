<?php

require_once('../db/connection.php');
require('../utils/helpers.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST'){

    try {
        $con = getConnection();

        $data = getBody();

        $stmt = $con->prepare("SELECT * FROM administrador WHERE email = :email");
        $stmt->execute([
            "email" => $data['email']
        ]);

        $result = $stmt->fetch(PDO::FETCH_ASSOC);

        if(!$result || !password_verify($data['senha'], $result['senha'])){
            http_response_code(401);
            sendResponse(
                message: "Email/Senha inválida.",
                data: null,
                error: true
            );
            exit;
        }
        
        setcookie("auth", $result['id'], time()+3600, "/");
        sendResponse(
            message: "Login efetuado com sucesso!",
            data: [
                "email" => $result["email"],
                "id" => $result["id"]
            ],
            error: false
        );
        exit;
    } catch (\Throwable $th) {
        sendResponse(
            message: "Erro ao se conectar ao banco de dados.",
            data: null,
            error: true
        );
        exit;
    }
}