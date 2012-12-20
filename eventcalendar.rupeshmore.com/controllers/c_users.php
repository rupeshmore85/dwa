<?php

ob_start();

# The class users_controller extends base_controller
class users_controller extends base_controller 

{
	# The construct method is a magic method which is called every time this class is called
	public function __construct() 
	
	{
		
		parent::__construct();
	
	}
	
public function signup() {

        # Setup view
			$this->template->content = View::instance('v_users_signup');
			$this->template->title   = "Signup";
			
		# Render template
			echo $this->template;
    }

public function p_signup() {
		
		# Dump out the results of POST to see what the form submitted
	    # print_r($_POST);
	    
	    # Encrypt the password
	    $_POST['password'] = sha1(PASSWORD_SALT.$_POST['password']);
	    
	    # More data we want stored with the user
	    $_POST['created']  = Time::now();
    	$_POST['modified'] = Time::now();
	    $_POST['token']    = sha1(TOKEN_SALT.$_POST['email'].Utils::generate_random_string());
		
		# Variables to store the first name & email of the user
		$firstname = $_POST['first_name'];
		$email = $_POST['email'];
		
		
		# Variable which will store the email which is fetched from database 
		$email_verify = DB::instance(DB_NAME)->select_row("SELECT email FROM users WHERE email = '".$_POST['email']."'");
		
		# print_r($email_verify);
		
		if($email_verify=="") 
		{
			# Insert this user into the database
			$user_id = DB::instance(DB_NAME)->insert("users", $_POST);
		
    		# Confirmation to the user on successfully signing up
			echo "Congratulations $firstname !! You have successfully signed up</br></br>";
			
    		# Login again in order to follow users
			echo "You need to login again in order to follow users </br>";
			echo "<a href='/users/login'> Login </a>";

         }
         
         else
         
         {
         	#To Display to the user that the email records exist in database.
         	echo " $firstname, Your email '$email' matches with our records in database.</br>
         	You will be redirected to the signup page in 10 seconds. </br></br>";
            
            echo "<a href='/users/signup'> Signup </a> </br></br>";
            
            echo "<a href='/users/login'> Login </a>"; 
            
            #Refresh the page and redirect to signup page after 10 secs.
            header('Refresh: 10; URL=/users/signup');
            ob_end_flush();           
            
         }
        }

public function login($error = NULL) 

 {

	#Setup view
	$this->template->content = View::instance('v_users_login');
		
	#Pass data to the view with the title
	$this->template->content->error = $error;
		
	# Render the view
	echo $this->template;

 }

public function p_login() 

 {

   # Sanitize the user entered data to prevent any undesired results
   $_POST = DB::instance(DB_NAME)->sanitize($_POST);

   # Hash submitted password so we can compare it against one in db
   $_POST['password'] = sha1(PASSWORD_SALT.$_POST['password']);

   # Search the database for this email and password and get the token associated.
   $q = "SELECT token
         FROM users
         WHERE email = '".$_POST['email']."'
         AND password = '".$_POST['password']."'";
	  
   $token = DB::instance(DB_NAME)->select_field($q);
 
   # If we didn't get a token back then login failed
     if($token == "") 
 
     {
 
	 	# Send them back to the login page with a error message
 		Router::redirect("/users/login");
 		
 
  	 }
   # If we did display login successful
	 else 
 
     {
 
        # Store this token in the cookie of his browser
 	   	  setcookie("token", $token, strtotime('+1 year'),'/');
 
        # Send them to the profile 
    	  Router::redirect("/users/profile");
    	  
 
     }
 
 }
 
 public function profile()
 
 {
 
 	# If user is blank, they are not logged in, show the message and don't do anything
 	if(!$this->user)
 	
 	{
 		
 		 echo "Members only. <a href='/users/login'>Login</a>";
  
  		 # Return will force this method to exit here so the rest of the code won't be executed and the profile view won't be displayed.
  		 return false;
	
	 }
 
	 # Setup view
 	 $this->template->content = View::instance('v_users_profile');
 	 $this->template->title   = "Profile of ".$this->user->first_name;
 
	 # Render template
	 echo $this->template;
	 
	 #Setup View to display tabs
	 $this->template->content = View::instance('v_users_tabs');
	 
	 # Render template
	 echo $this->template;
	 
/* ?>
     <head> <link rel="stylesheet" type="text/css" href="../css/demo_1.css" /> </head>
 	 <!-- Display the menu -->
 	 <body>
 	 <ul id="tabs">
 	 </br></br>
	 <li><a href="/posts/" class="button">View posts</a></br></br></li>
	 <li><a href="/posts/add" class="button">Add a new post</a></br></br></li>
	 <li><a href="/posts/users/" class="button">Change who you're following</a></br></br></li>
	 <li><a href="/users/logout" class="button">Logout</a></br></br></li>
	 </ul>
    

 <?  */
 }
 
 
 
public function logout() {
	
	# Generate and save a new token for next login
	$new_token = sha1(TOKEN_SALT.$this->user->email.Utils::generate_random_string());
	
	# Create the data array we'll use with the update method
	# In this case, we're only updating one field, so our array only has one entry
	$data = Array("token" => $new_token);
	
	# Do the update
	DB::instance(DB_NAME)->update("users", $data, "WHERE token = '".$this->user->token."'");
	
	# Delete their token cookie - effectively logging them out
	setcookie("token", "", strtotime('-1 year'), '/');
	
	
	# Send them back to the main landing page
	// window.location.href = "/users/login";
	
	#Setup view
	//$this->template->content = View::instance('v_users_login');
		
	# Render the view
	//echo $this->template;
	Router::redirect("/users/login");

} 
} # end of class
?>