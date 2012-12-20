<?php

class posts_controller extends base_controller 

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


public function index() 

{
	
	# Set up view
	$this->template->content = View::instance('v_posts_index');
	$this->template->title   = "Posts";
	
	# Build a query of the users this user is following - we're only interested in their posts
	$q = "SELECT * 
		  FROM users_users
		  WHERE user_id = ".$this->user->user_id;

	# Execute our query, storing the results in a variable $connections
	$connections = DB::instance(DB_NAME)->select_rows($q);

	# In order to query for the posts we need, we're going to need a string of user id's, separated by commas
	# To create this, loop through our connections array
	$connections_string = "";
	foreach($connections as $connection) {
		$connections_string .= $connection['user_id_followed'].",";
	}
	
	# Remove the final comma 
	$connections_string = substr($connections_string, 0, -1);
	
	# echo "$connections_string";
	if ($connections_string=="") 
	{
	echo "You are not following anyone! </br> </br> ";
	echo "Please click the ''Change who you're following'' tab to follow friends! ";
	
	}
	
	else 
	{
	# Build the query to grab the posts.
	$q = "SELECT posts.*,users.*
		FROM posts 
		JOIN users USING (user_id)
		WHERE posts.user_id IN (".$connections_string.")";
	
	# Run our query, grabbing all the posts and joining in the users	
	$posts = DB::instance(DB_NAME)->select_rows($q);

	# echo "$q";

	$q1 = "SELECT DISTINCT CONCAT(users.first_name,' ',users.last_name) AS name
		FROM users 
		WHERE user_id IN (".$connections_string.")";

	# echo "$q1";

	# Run our query, grabbing all the posts and joining in the users	
	$users = DB::instance(DB_NAME)->select_rows($q1);
	
	# If we didn't get any users who the current user is following display appropriate message
     if($users == "") 
 
     {
 
 		Router::redirect("/posts/users");
 		
 
  	 }

	# Pass data to the view
	$this->template->content->users = $users;
	
	# echo $this->template;
		
	# Pass data to the view
	$this->template->content->posts = $posts;
	
	# Render view
	echo $this->template;
	}
}


public function follow($user_id_followed) 

	{

		# Prepare our data array to be inserted
		$data = Array(
					  "created" => Time::now(),
					  "user_id" => $this->user->user_id,
					  "user_id_followed" => $user_id_followed
					 );
	
		# Do the insert
		DB::instance(DB_NAME)->insert('users_users', $data);

		# Send them back
		Router::redirect("/posts/users");
	
	}

public function unfollow($user_id_followed) 

	{

		# Delete this connection
		$where_condition = 'WHERE user_id = '.$this->user->user_id.' AND user_id_followed = '.$user_id_followed;
		DB::instance(DB_NAME)->delete('users_users', $where_condition);
	
		# Send them back
		Router::redirect("/posts/users");

	}

public function add() 

	{

		# Set up the view
		$this->template->content = View::instance("v_posts_add");
		$this->template->title = "Add a new post";

		# Render the view
		echo $this->template;
	
	}


public function p_add() 

	{

	//echo $_POST;
	if ($_POST['content']=="")
	{

		echo "<script type='text/javascript'>alert('Post cannot be blank'); window.location.href='/posts/add';</script>";
		//echo "Post cannot be blank";
		//Router::redirect("/posts/add");

	}
	else
	{
		# Associate this post with this user
		$_POST['user_id'] = $this->user->user_id;
		//print_r($_POST);

		# Unix timestamp of when this post was created / modified
		$_POST['created'] = Time::now();
		$_POST['modified'] = Time::now();

		#Insert
		DB::instance(DB_NAME)->insert('posts', $_POST);
?>
<html lang="en">
<head>
    <meta charset="utf-8" />
	<link rel="stylesheet" type="text/css" href="../css/demo_1.css" />
</head>
<?
		echo "Your post has been added. </br> </br> <a href='/posts/add'> Add another if you wish to. </a>";
		echo "</br> </br> <a href='/users/profile'> Home page </a>";

	}
	}
	
public function users() 

	{

		# Set up the view
		$this->template->content = View::instance("v_posts_users");
		$this->template->title   = "Users";
	
		# Build our query to get all the users
		$q = "SELECT *
		      FROM users";
		
		# Execute the query to get all the users. Store the result array in the variable $users
		$users = DB::instance(DB_NAME)->select_rows($q);
	
		# Build our query to figure out what connections does this user already have? I.e. who are they following
		$q = "SELECT * 
			FROM users_users
			WHERE user_id = ".$this->user->user_id;
		
		# Execute this query with the select_array method
		# select_array will return our results in an array and use the "users_id_followed" field as the index.
		# This will come in handy when we get to the view
		# Store our results (an array) in the variable $connections
		$connections = DB::instance(DB_NAME)->select_array($q, 'user_id_followed');
			
		# Pass data (users and connections) to the view
		$this->template->content->users       = $users;
		$this->template->content->connections = $connections;

		# Render the view
		echo $this->template;
	}	

} //end of class