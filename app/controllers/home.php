<?php
class Home_Controller extends Controller
{
    public function index()
    {
        $data['title'] = "Home Page";
        $this->view("index", $data);
    }
}
