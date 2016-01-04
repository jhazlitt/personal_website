document.getElementById("profile_button").onclick = function() {
	document.getElementById("website_body2").innerHTML = "<h1>Profile</h1><h2>Welcome to my website!</h2><p>I made it with HTML, CSS, and JavaScript.  Hosted using Amazon EC2</p><p>A little about me: I grew up in Colorado and attended the University of Colorado in Boulder, graduating in 2012 with a BA in Economics.  I worked for 2 years as a data specialist, helping me discover my passion for programming through Excel, VBA, and SQL.</p><p>My hobbies include programming, learning new languages (programming or otherwise), gardening, and flying my small quadcopter.</p><p>Please click the button above to visit my GitHub profile!</p>"; 
}

document.getElementById("resume_button").onclick = function() {
	document.getElementById("website_body2").innerHTML = "<h1>Resume</h1><h2>Experience</h2><p>TransFirst, LLC</p><p>Data Specialist</p><ul><li>Developed and maintained VBA macros to scrape transaction freports from data store, fix broken transaction data, and automate manual data entry into Attachmate</li><li>Maintained Access database for rejected transactions</li><li>Tested code releases and performed regression testing on the backend transaction clearing system</li><li>Created queries to research problems and audit processes using SQL Server Management Studio 2012</li><li>Assisted in development of transaction processing flowcharts</li></ul><h2>Skills</h2><ul><li>HTML</li><li>CSS</li><li>JavaScript</li><li>VBA</li><li>Python</li><li>SQL</li></ul>";
}

document.getElementById("portfolio_button").onclick = function() {
	document.getElementById("website_body2").innerHTML = "<h1>Portfolio</h1>" + 
"<table id='project_table'><tr><td><a href='space_creepers_game/space_creepers.html'><img src='img/space_shooter_logo.png' id='project_logo'></img></a></td><td><a href='space_creepers_game/space_creepers.html'><h1>Space Shooter</h1></a><h3>A game similar to Asteroids.  Made with HTML, CSS, JavaScript, and jQuery.</h3></td></tr>" + 
"<table id='project_table'><tr><td><a href='floppy_bird_game/floppy_bird.html'><img src='img/floppy_bird_logo.png' id='project_logo'></img></a></td><td><a href='floppy_bird_game/floppy_bird.html'><h1>Blocky Bird</h1></a><h3>A Flappy Bird clone.  Made with HTML, CSS, JavaScript, and jQuery.</h3></td></tr>" + 
"<table id='project_table'><tr><td><a href='snake_game/snake.html'><img src='img/snake_logo.png' id='project_logo'></img></a></td><td><a href='snake_game/snake.html'><h1>Snake</h1></a><h3>A Snake clone.  Made with HTML, CSS, JavaScript, and jQuery.</h3></td></tr>" + 
"<table id='project_table'><tr><td><a href='color_match_game/color_match.html'><img src='img/color_match_logo.png' id='project_logo'></img></a></td><td><a href='color_match_game/color_match.html'><h1>Color Match</h1></a><h3>A game where you match colored tiles.  Made with HTML, CSS, JavaScript, and jQuery.</h3></td></tr>" +
"<table id='project_table'><tr><td><a href='ball_dodge_game/ball_dodge.html'><img src='img/ball_dodge_logo.png' id='project_logo'></img></a></td><td><a href='ball_dodge_game/ball_dodge.html'><h1>Ball Dodge</h1></a><h3>My first (admittedly not great) attempt at a game with jQuery.  Made with HTML, CSS, JavaScript, and jQuery.</h3></td></tr>"; 

}

document.getElementById("contact_button").onclick = function() {
	document.getElementById("website_body2").innerHTML = "<h1>Contact</h1><h3>Email: john.h.hazlitt@gmail.com</h3><h3>Phone: 720-979-5870</h3><h3>Skype: john.hazlitt</h3>";
}
