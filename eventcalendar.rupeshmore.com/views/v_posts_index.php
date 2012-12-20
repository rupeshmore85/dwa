<!DOCTYPE html>
 
<html lang="en">
<head>
    <meta charset="utf-8" />
	<link rel="stylesheet" type="text/css" href="../css/demo_1.css" />
</head>

<body>

<h3> List of people you follow:  </h3> </br>


 <? foreach($users as $user): ?> 

	<u> <?=$user['name']?></u> ,
	
 <? endforeach; ?>

</br></br>

<? foreach($posts as $post): ?>
	
	<h3><?=$post['first_name']?> <?=$post['last_name']?> <i> posted: </i></h3>
	<?=$post['content']?>
	
	<br><br>
	
<? endforeach; ?>
</body>