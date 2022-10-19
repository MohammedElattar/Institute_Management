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
        else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $res['not-valid-email'] = '1';
        else if (!$password) $res['empty-pass'] = '1';
        else if (!in_array($role, ['student', 'manager', 'teacher'])) $res['role-not-exists'] = '1';
        else {
            $db = DB::get_instance();
            $user = $db->read("SELECT id FROM {$roles[$role]} WHERE email=? AND password=?", [$email, sha1($password)], true);
            if (!$user[1]) $res['user-not-exists'] = '1';
            else {
                $user = $user[0][0];
                $_SESSION['logged'] = '1';
                $res['data'] = [];
                $res['data']['user']['id'] = $user['id'];
                $res['data']['user']['email'] = $email;
                if ($role == 'manager') {
                    // gettings teachers information

                    $teachers = $db->read("SELECT teachers.id , teachers.name , total_salary , taken_salary ,teachers.subject, subjects.name as subject_name , subjects.cost as subject_cost FROM teachers JOIN subjects ON subjects.id= teachers.subject", [], true);
                    $res['data']['teachers']['cnt'] = $teachers[1];
                    $res['data']['teachers']['data'] = $teachers[0];

                    $students = $db->read("SELECT id , name , email FROM students", [], true);
                    $res['data']['students']['cnt'] = $students[1];
                    $res['data']['students']['data'] = $students[0];
                }
                $res['success'] = '1';
            }
        }
        return $res;
    }
}
