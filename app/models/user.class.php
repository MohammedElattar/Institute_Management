<?php
class User
{
    public function login($POST)
    {
        $email = @trim(htmlentities($POST['email'])) or null;
        $password = @trim(htmlentities($POST['password'])) or null;
        $role = @trim(htmlentities($POST['role'])) or null;
        $res = [];
        $roles = ['student' => 'students', 'manager' => 'manager', 'teacher' => 'teachers'];
        if (!$email) $res['empty-email'] = '1';
        else if (filter_var($email, FILTER_VALIDATE_EMAIL)) $res['not-valid-email'] = '1';
        else if (!$password) $res['empty-pass'] = '1';
        else if (!in_array($role, ['student', 'manager', 'teacher'])) $res['role-not-exists'] = '1';
        else {
            $db = DB::get_instance();
            $user = $db->read("SELECT id FROM $roles[$role] WHERE email=? AND password=?", [$email, sha1($password), true]);
            if (!$user[1]) $res['user-not-exists'] = '1';
            else {
                $user = $user[0][0];
                $_SESSION['logged'] = '1';
                $_SESSION['data']['id'] = $user['id'];
                $_SESSION['data']['email'] = $email;
                $_SESSION['data']['role'] = $role;
                $res['success'] = '1';
            }
        }
        return $res;
    }
    public function signup()
    {
    }
}
