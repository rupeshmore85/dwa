<!DOCTYPE html>
 
<html lang="en">
<head>
    <meta charset="utf-8" />
	<link rel="stylesheet" type="text/css" href="../css/demo_1.css" />
    <link rel="stylesheet" href="http://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css" />
    <script src="http://code.jquery.com/jquery-latest.js"></script>
    <script src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>
  <!--  <link rel="stylesheet" href="/resources/demos/style.css" />  -->
    <script>
    $(document).ready(function(){
    	$(function() {
      	  $( "#tabs" ).tabs();
    	});
    });
    </script>
</head>
<body>
 
<div id="tabs">
    <ul>
    	</br></br>
        <li><a href="/posts/" class="button">View posts</a></br></br></li>
		<li><a href="/posts/add" class="button">Add a new post</a></br></br></li>
	    <li><a href="/posts/users/" class="button">Change who you're following</a></br></br></li>
	    <li><a href="/calendar" class="button">Calendar</a></br></br></li>
	    <li><a href="/users/logout" class="button">Logout</a></br></br></li>
    </ul>
</div>
 
 
</body>
</html>