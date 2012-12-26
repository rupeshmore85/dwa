<?php

class calendar_controller extends base_controller 

{

	public function __construct() 
	{

		parent::__construct();
		
		# The user should be logged in
		if(!$this->user) 
		
		{

		die("Members only. <a href='/users/login'> Please login </a> ");

		}
		
	}

	public function index() {

 	# If user is blank, they are not logged in, show the message and don't do anything
 	if(!$this->user)
 	
 	{
 		
 		 echo "Members only. <a href='/users/login'>Login</a>";
  
  		 # Return will force this method to exit here so the rest of the code won't be executed and the profile view won't be displayed.
  		 return false;
	
	 }
	 		
		# Any method that loads a view will commonly start with this
		# First, set the content of the template with a view file
			$this->template->content = View::instance('v_calendar');
		# Now set the <title> tag
			$this->template->title = "Event Calendar of ".$this->user->first_name;		
	
		# If this view needs any JS or CSS files, 
		# add their paths to this array so they will get loaded in the head
			$client_files = Array(
						""
	                    );
	    
	    	$this->template->client_files = Utils::load_client_files($client_files);   
	      		
		# Render the view
			echo $this->template;

	}
	
	
	public function sync() {
		
		# Any method that loads a view will commonly start with this
		# First, set the content of the template with a view file
			$this->template->content = View::instance('v_google_sync');

		# Now set the <title> tag
			$this->template->title = "Google Sync"; 

			$email = $this->user->email;

		# Pass data to the view
			$this->template->content->email = $email;

   		$q = "SELECT user_id
     		  FROM users
     		  WHERE email = '".$this->user->email."'";
	  
	    $user_id = DB::instance(DB_NAME)->select_field($q);
	    
	    # Pass data to the view
			$this->template->content->user_id = $user_id;
	      		
		# Render the view
			echo $this->template;

	}
		
} // end class
