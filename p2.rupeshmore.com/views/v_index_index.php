<!DOCTYPE html>
<html lang="en" class="no-js">
    <head>
        <meta charset="UTF-8" />
        <title>Login and Signup Form </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
        <meta name="description" content="Login and Signup Form" />
        <meta name="keywords" content="html5, css3, form, switch, animation, :target, pseudo-class" />
        <link rel="stylesheet" type="text/css" href="css/demo.css" />
        <link rel="stylesheet" type="text/css" href="css/style.css" />
		<link rel="stylesheet" type="text/css" href="css/animate-custom.css" />

    </head>
    <body>
        <div class="container">
            <header>
                <h1>Welcome to my Microblogging website </h1>
            </header>
            <section>				
                <div id="container_demo" >
                    <a class="hiddenanchor" id="tologin"></a>
                    <div id="wrapper">
                        <div id="login" class="animate form"> 
                                <h1>Log in</h1> 
                                <form method="POST" action="/users/p_login">
                                <p> 
                                    <label for="Email" class="ename" data-icon="e" > Email </label>
                                    <input id="Email" name="email" required="required" type="text" placeholder="mymail@mail.com"/>
                                </p>
                                <p> 
                                    <label for="password" class="youpasswd" data-icon="p"> Password </label>
                                    <input id="password" name="password" required="required" type="password" placeholder="Peter4#" /> 
                                </p>
                                <p class="keeplogin"> 
									<input type="checkbox" name="loginkeeping" id="loginkeeping" value="loginkeeping" /> 
									<label for="loginkeeping">Keep me logged in</label>
								</p>
                                <p class="login button"> 
                                    <input type="submit" value="Login" /> 
								</p>
                                <p class="change_link">
									Not a member yet ?
									<a href="/users/signup" class="to_register">Join us</a>
								</p>
                            </form>
                        </div>
						
                    </div>
                </div>  
            </section>
        </div>
		
    </body>
</html>