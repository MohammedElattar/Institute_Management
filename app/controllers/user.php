<?php
class User_Controller extends Controller
{
    public function add($param)
    {
        $_POST = json_decode(file_get_contents("php://input"), true);
        echo "Your Parameters are \n\n";
        print_r($param);
        echo "\n\nYour Posted Data Are\n\n";
        print_r($_POST);
    }
}
