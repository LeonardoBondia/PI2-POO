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
