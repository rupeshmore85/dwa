<?php

class users_controller extends base_controller {

public function __construct() {
parent::__construct();
}

public function signup() {
echo "display the signup page";
}

public function login() {
echo "display the login page";
}

public function logout() {
echo "display the logout page";
}

publics function profile($user_name = NULL) {
echo "This is the profile of ".$user_name;
}
else {

$this -> template 
}

}