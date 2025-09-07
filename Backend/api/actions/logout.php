<?php 
require('../utils/helpers.php');

getHeaders();

setcookie('auth', false, time()-3600, '/');
sendResponse(
    message:"Usuário desconectado com sucesso!",
    data: null,
    error:false
);
exit;