<?php
class not_found_Controller extends Controller
{
    public function index()
    {
        return $this->view("404");
    }
}
