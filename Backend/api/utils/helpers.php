<?php

function dd(mixed ...$items)
{
    echo '<pre>';
    foreach ($items as $item) {
        var_dump($item);
    }
    echo '</pre>';
    exit;
}

function sendResponse($message, $data, $error)
{
    echo json_encode(['message' => $message, 'data' => $data, 'error' => $error]);
}

function getBody(): array
{
    $body = file_get_contents('php://input');

    $data = json_decode($body, true);
    return $data;
}

function isAuth(){
    return isset($_COOKIE['auth']);
}

function getHeaders() {
    // Definir os headers de CORS primeiro
    header('Access-Control-Allow-Origin: http://localhost:5500'); 
    header('Access-Control-Allow-Methods: POST, OPTIONS, GET');
    
    // Inclua todos os headers que seu front-end pode enviar
    header('Access-Control-Allow-Headers: Content-Type, Authorization'); 
    
    header('Access-Control-Allow-Credentials: true');
    header('Content-Type: application/json');

    // **TRATAR A REQUISIÇÃO OPTIONS AQUI E SAIR DO SCRIPT**
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        http_response_code(200);
        exit(); // Finaliza o script imediatamente
    }
}