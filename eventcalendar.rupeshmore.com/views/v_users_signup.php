<!DOCTYPE html>
<html lang="en" class="no-js">
    <head>
        <meta charset="UTF-8" />
        <title>Signup Form </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
        <meta name="description" content="Signup Form" />
        <meta name="keywords" content="html5, css3, form, switch, animation, :target, pseudo-class" />
        <link rel="stylesheet" type="text/css" href="../css/demo.css" />
        <link rel="stylesheet" type="text/css" href="../css/style.css" />
		<link rel="stylesheet" type="text/css" href="../css/animate-custom.css" />

    </head>
    <body>
        <div class="container">
            <header>
                <h1>Please Sign Up </h1>
            </header>
            <section>				
                <div id="container_demo" >
                    <a class="hiddenanchor" id="tologin"></a>
                    <div id="wrapper">
                        <div id="login" class="animate form">
             
                                <h1>Sign Up</h1> 
                                <form method="POST" action="/users/p_signup">
                                <p> 
                                    <label for="First Name" > First Name </label>
                                    <input id="First Name" required="required" type="text" name='first_name'"/>
                                </p>
                                <br>
                                <p> 
                                    <label for="Last Name" > Last Name </label>
                                    <input id="Last Name" required="required" type="text" name='last_name'"/>
                                </p>     
                                <p> 
                                    <label for="Email" class="ename" data-icon="e" > Email </label>
                                    <input id="Email" required="required" type="text" name='email' placeholder="mymail@mail.com" "/>
                                </p>                            
                                <p> 
                                    <label for="password" class="youpasswd" data-icon="p"> Password </label>
                                    <input id="password" required="required" type="password" name="password" placeholder="E.g. Peter4#" /> 
                                </p>
                                <p class="signin button"> 
									<input type="submit" value="Sign up"/> 
								</p>
                                <p class="change_link">
									Already a member ?
									<a href="/users/login" class="to_register">Login</a>
								</p>								
                                </form>
                        </div>
						
                    </div>
                </div>  
            </section>
        </div>
		
    </body>
</html>
