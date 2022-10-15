<?php
header("Content-Type: application/json; charset=utf8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
class user_Controller
{
    public function login($POST)
    {
    }

    public function signup($POST)
    {
    }
}
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $_POST = json_decode(file_get_contents('php://input'));
    print_r($_POST);
    $user = new user_Controller;
    $method = @$_GET['method'] or null;
    if ($method == 'login') {
        // $user->login($_POST)
        echo "Hi Login";
    }
} else header("location:/");
