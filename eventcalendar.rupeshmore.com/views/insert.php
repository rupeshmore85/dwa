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
		
		//	$allDayIndicator=$this->queryVars['allDay'];
		//	$groupId=$this->queryVars['groupId'];

/*		
		// If the events are already imported from Google Calendar
		if ()
		{
		delete from events where user_id = ;
		}
*/
	
		$query=mysql_query("insert into events(calendar_id,event_name,event_description,all_day,  start_time, end_time) VALUES (1,'$evName', '$desc', '$all_day', '$sTimeStr', '$eTimeStr')");
		//print_r($query);
		if($query){
				echo "Data for $evName and description: $desc inserted successfully! from $sTimeStr  to  $eTimeStr";
				}
		else{ 	echo "An error occurred!"; } 

?>