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

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    try {
        $con = getConnection();

        $data = getBody();

        $con->beginTransaction();

        $stmt = $con->prepare("INSERT INTO aluno (
                            matricula, 
                            curso, 
                            nome, 
                            cpf, 
                            email, 
                            contato, 
                            administrador_id
                        ) VALUES (
                            :matricula, 
                            :curso, 
                            :nome, 
                            :cpf, 
                            :email, 
                            :contato, 
                            :administrador_id
                        )");

        $stmt->execute([
            "matricula" => random_int(0, 1000),
            "curso" => $data['curso'],
            "nome" => $data['nome'],
            "cpf" => $data['cpf'],
            "email" => $data['email'],
            "contato" => $data['contato'],
            "administrador_id" => $data['administrador_id'],
        ]);

        $alunoId = $con->lastInsertId();

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

        $stmt = $con->prepare("INSERT INTO aluno_endereco (aluno_id, endereco_id) VALUES (:aluno_id, :endereco_id)");

        $stmt->execute([
            "aluno_id" => $alunoId,
            "endereco_id" => $enderecoId
        ]);

        $con->commit();

        sendResponse(
            message: "Aluno cadastrado com sucesso!",
            data: ['endereco_id' => $enderecoId, 'aluno_id' => $alunoId],
            error: false
        );
    } catch (\Throwable $th) {
        $con->rollBack();
        sendResponse(
            message: "Erro ao cadastrar aluno.",
            data: null,
            error: true
        );
    }
}
