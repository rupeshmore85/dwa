<html>

	<head>

		<link rel="stylesheet" type="text/css" href="../css/demo_1.css" />	
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
		<script type="text/javascript" src="http://www.google.com/jsapi"></script>
		
		<!-- Function to append leading 0 for Hours/minutes and seconds -->
		<script>
			function padHrs(hr) 
			{
					strHr = ""
					if (hr <= 9) 
					{
						strHr = "0".concat(String(hr));
					} else 
					{
						strHr = String(hr);
					}
	
				return strHr;
			}

		</script>
		
		<script type="text/javascript">
			google.load("gdata", "1.s");
			
			var email = "<?= $email ?>";
			var user_id = "<?= $user_id ?>";
			
			console.debug(email);
			var feedUrl = "https://www.google.com/calendar/feeds/"+email+"/public/full";
			console.debug(feedUrl);

			function setupMyService() {
				myService = new google.gdata.calendar.CalendarService('exampleCo-exampleApp-1');
				//logMeIn();
			}
			
			function logMeIn() {
				scope = "https://www.google.com/calendar/feeds/";
				var token = google.accounts.user.login(scope);
			}

			function getMyFeed() {
				setupMyService();
				myService.getEventsFeed(feedUrl, handleMyFeed, handleError);
			}
			
			function handleMyFeed(myResultsFeedRoot) {
				//alert("This feed's title is: " + myResultsFeedRoot.feed.getTitle().getText());
				console.debug(myResultsFeedRoot);
				
				if (myResultsFeedRoot != null) {

					if (myResultsFeedRoot.feed != null) {

						if (myResultsFeedRoot.feed.entry != null && myResultsFeedRoot.feed.entry.length != null) {

							var entries = myResultsFeedRoot.feed.entry;
							for (i = 0; i < entries.length; i++) {
								//console.debug(myResultsFeedRoot.feed.entry[i]);
								
								var entry = entries[i];
								
								var title = (entry.title)?entry.title.$t:"Untitled";
								console.debug(title);
								var subtitle = (entry.content)?entry.content.$t:"Untitled";
								console.debug(subtitle);
								var startTime = (entry.gd$when)?entry.gd$when[0].startTime:"";
								console.debug(startTime);
								var endTime = (entry.gd$when)?entry.gd$when[0].endTime:"";
								console.debug(endTime);
					
 								var startTimeAsDate1 = new Date(startTime);
 								if (startTimeAsDate1.getDate() <= 9)
 								{
 								startTimeAsDate1.setDate(startTimeAsDate1.getDate() + 1);
 								var d = padHrs(startTimeAsDate1.getDate());
 								}
 								else
 								{
 								var d = startTimeAsDate1.getDate();
 								console.debug(d);
 								}
 								var m = padHrs(startTimeAsDate1.getMonth()+1);
 								var y = padHrs(startTimeAsDate1.getFullYear());
 								var h = padHrs(startTimeAsDate1.getHours());
 								var mi = padHrs(startTimeAsDate1.getMinutes());
 								var s = padHrs(startTimeAsDate1.getSeconds());
 								var startTimeAsDate = y + "-" + m + "-" + d + " " + h + ":" + mi + ":" + s;
 								
                                console.debug(startTimeAsDate);

 								var endTimeAsDate1 = new Date(endTime);
								if (endTimeAsDate1.getDate() <= 9)
 								{
 								endTimeAsDate1.setDate(endTimeAsDate1.getDate() + 1);
 								var d1 = padHrs(endTimeAsDate1.getDate());
 								}
 								else
 								{
 								var d1 = endTimeAsDate1.getDate();
 								console.debug(d1);
 								}
 								var m1 = padHrs(endTimeAsDate1.getMonth()+1);
 								var y1 = padHrs(endTimeAsDate1.getFullYear());
 								var h1 = padHrs(endTimeAsDate1.getHours());
 								var mi1 = padHrs(endTimeAsDate1.getMinutes());
 								var s1 = padHrs(endTimeAsDate1.getSeconds());
 								var endTimeAsDate = y1 + "-" + m1 + "-" + d1 + " " + h1 + ":" + mi1 + ":" + s1; 								
                                console.debug(endTimeAsDate);			
				
				
								if (h==h1 && m==m1 && s==s1) 
								{
								 var all_day = 1;
								 console.debug(all_day);
								}
								else
								{
								var all_day = 0;
								console.debug(all_day);
								}
				
								// Google events type identifier for query
								var event_type = 'G';
								
				                // Ajax call to post the values in table 
				                
    							$.post("http://localhost/views/v_insert.php", {title: title,subtitle: subtitle, all_day: all_day, startTimeAsDate: startTimeAsDate, endTimeAsDate: endTimeAsDate, event_type:event_type, user_id:user_id}, function(data){alert(data);});										
								
						/*		if (entry.gd$when[0] != null) {
									startTime = entry.gd$when[0].startTime;
									endTime = entry.gd$when[0].endTime; 
								}
						*/
							}
						}
					}
				}
				
			}
			
			function handleError(e) {
				alert("There was an error!");
				console.error(e.cause ? e.cause.statusText : e.message);
			}
		</script>
	</head>
	
	<body onLoad="getMyFeed()"></body>
</html>