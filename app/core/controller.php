<?php


class Controller

{
    /**
     * Controller
     *
     * @author  Mohamed Attar
     */

    public function load_model($model_name)
    {
        /**
         * Load Models
         * 
         * returns An Class Object Of Desired Model
         * 
         * @param string $model_name The Model You Want To Call.
         *
         * @return string Returns The File Name of desired model
         */
        if (file_exists(__DIR__ . "/../models/" . strtolower($model_name) . ".class.php")) {
            include __DIR__ . "/../models/" . strtolower($model_name) . ".class.php";
            return new $model_name();
        } else return "Model not found";
    }

    public function isPost()
    {
        return $_SERVER['REQUEST_METHOD'] == 'POST';
    }
}
