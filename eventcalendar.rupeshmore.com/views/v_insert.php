<?php

 $con = mysql_connect("rupeshmo_p2_rupeshmore_com","rupeshmo_admin","Password_test1@");
 
 if (!$con) 
 		{
		 die('Could not connect: ' . mysql_error());	 
		}
		
		mysql_select_db("rupeshmo_p2_rupeshmore_com", $con);
		
	 //Pull data 
	 
	 	$sTimeStr=$_POST['startTimeAsDate'];
	 	$eTimeStr=$_POST['endTimeAsDate'];
		$evName=$_POST['title'];
		$all_day=$_POST['all_day'];		
	
		// Sanitize event name
		$evName=filter_var($evName,FILTER_SANITIZE_SPECIAL_CHARS, FILTER_FLAG_STRIP_LOW);
		
		$desc=$_POST['subtitle'];
		
		// Sanitize event description

		$desc=filter_var($desc,FILTER_SANITIZE_SPECIAL_CHARS, FILTER_FLAG_STRIP_LOW);
		
		$event_type=$_POST['event_type'];
		$user_id=$_POST['user_id'];
		
		//	$allDayIndicator=$this->queryVars['allDay'];
		//	$groupId=$this->queryVars['groupId'];

		$result = mysql_query("SELECT * FROM events WHERE event_type = 'G' and user_id = ".$user_id);


		// If the events are already imported from Google Calendar then delete those from database in order to avoid duplicate events		
		while($row = mysql_fetch_array($result))
  		{
  			if ($row['event_name'] = $evName )
  			{
  				mysql_query("DELETE FROM events WHERE user_id = ".$user_id." and event_type = 'G' and event_name = SUBSTR('".$evName."',1,20)");
  			}
  		}
		
/*
		if ($event_type == 'G' AND user_id == $user_id)
		
		{
			mysql_query("DELETE FROM events WHERE user_id = $user_id and event_type = 'G'");
		}	
*/

	
		$query=mysql_query("insert into events(calendar_id,event_name,event_description,all_day,  start_time, end_time,event_type, user_id) VALUES (1,'$evName', '$desc', '$all_day', '$sTimeStr', '$eTimeStr','$event_type','$user_id')");
		
		//print_r($query);
		if($query){
				echo "Data for Event Name : $evName and Event Description: $desc inserted successfully! from Time : $sTimeStr  to $eTimeStr";
				}
		else{ 	echo "An error occurred!"; } 

?>