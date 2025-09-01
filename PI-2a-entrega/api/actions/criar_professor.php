<?php 

require_once('../db/connection.php');
require('../utils/helpers.php');

if(!isAuth()){
    http_response_code(401);

    sendResponse(
        message: "Não autorizado!",
        data: null,
        error: true
    );
    exit;
}

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    try{
        $con = getConnection();
        $data = getBody();
        $con->beginTransaction();
        
        $stmt = $con->prepare("INSERT INTO professor (
                            disciplina,
                            nome, 
                            cpf, 
                            email, 
                            contato, 
                            administrador_id
                        ) VALUES (
                            :disciplina,
                            :nome, 
                            :cpf, 
                            :email, 
                            :contato, 
                            :administrador_id
                        )");

        $stmt->execute([
            "disciplina" => $data['disciplina'],
            "nome" => $data['nome'],
            "cpf" => $data['cpf'],
            "email" => $data['email'],
            "contato" => $data['contato'],
            "administrador_id" => $data['administrador_id'],
        ]);

        $professorId = $con->lastInsertId();

        $stmt = $con->prepare("INSERT INTO endereco (
                            cep,
                            rua,
                            bairro,
                            numero,
                            uf,
                            complemento
                        ) VALUES (
                            :cep,
                            :rua,
                            :bairro,
                            :numero,
                            :uf,
                            :complemento
                        )");

        $stmt->execute([
            "cep" => $data['cep'],
            "rua" => $data['rua'],
            "bairro" => $data['bairro'],
            "numero" => $data['numero'],
            "uf" => $data['uf'],
            "complemento" => $data['complemento'],
        ]);

        $enderecoId = $con->lastInsertId();

        $stmt = $con->prepare("INSERT INTO professor_endereco (professor_id, endereco_id) VALUES (:professor_id, :endereco_id)");

        $stmt->execute([
            "professor_id" => $professorId,
            "endereco_id" => $enderecoId
        ]);

        $con->commit();

        sendResponse(
            message: "Professor cadastrado com sucesso!",
            data:['endereco_id' => $enderecoId, 'professor_id' => $professorId],
            error: false
        );
    }catch(\Throwable $th){
        $con->rollBack();
        sendResponse(
            message: "Erro ao cadastrar Professor.",
            data: null,
            error: true
        );
        exit;
    }
}