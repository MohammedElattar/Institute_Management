<?php
header("Content-Type: application/json; charset=utf8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
class user_Controller extends Controller
{
    public function login($POST)
    {
        $user_model = $this->load_model("User");
        return $user_model->login($POST);
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
        echo json_encode($user->login($_POST));
    }
} else header("location:/");
