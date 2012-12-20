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
		
		# Any method that loads a view will commonly start with this
		# First, set the content of the template with a view file
			$this->template->content = View::instance('v_calendar');
			
		# Now set the <title> tag
			$this->template->title = "Event Calendar";
	
		# If this view needs any JS or CSS files, 
		# add their paths to this array so they will get loaded in the head
			$client_files = Array(
						""
	                    );
	    
	    	$this->template->client_files = Utils::load_client_files($client_files);   
	      		
		# Render the view
			echo $this->template;

	}
		
} // end class
