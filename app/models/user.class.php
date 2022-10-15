<?php
class User
{
    public function login($POST)
    {
        $username = @$POST['username'] or null;
        $password = @$POST['password'] or null;
        $role = @$POST['role'] or null;
    }
    public function signup()
    {
    }
}
