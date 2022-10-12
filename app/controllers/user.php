<?php
class User_Controller extends Controller
{
    public function add($param)
    {
        $_POST = json_decode(file_get_contents('php://input'));
        echo "This is User Add Section , Your Posted Data are \n\n";
        print_r($_POST);
    }
}
