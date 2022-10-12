<?php
header("Content-Type: application/json; charset=utf8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
// header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
$method = $_GET['method'];
print_r($method);
function add($param = '')
{
    $_POST = json_decode(file_get_contents('php://input'), true);
    echo "This is User Add Section , Your Posted Data are \n\n";
    print_r($_POST);
}
add();
