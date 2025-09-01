<?php 
require('../utils/helpers.php');

setcookie('auth', false, time()-3600, '/');
sendResponse(
    message:"Usuário desconectado com sucesso!",
    data: null,
    error:false
);
exit;