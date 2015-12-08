document.getElementById("profile_button").onclick = function() {
	document.getElementById("website_body2").innerHTML = "<h1>Profile</h1><h2>Welcome to my website!</h2><p>I made it with HTML, CSS, and JavaScript.  Hosted on Google Drive.</p><p>A little about me: I grew up in Colorado and attended the University of Colorado in Boulder, graduating in 2012 with a BA in Economics.  I worked for 2 years as a data specialist, helping me discover my passion for programming through Excel, VBA, and SQL.</p><p>My hobbies include programming, learning new languages (programming or otherwise), gardening, and flying my small quadcopter.</p><p>Please click the button above to visit my GitHub profile!</p>"; 
}

document.getElementById("resume_button").onclick = function() {
	document.getElementById("website_body2").innerHTML = "<h1>Resume</h1><h2>Experience</h2><p>TransFirst, LLC</p><p>Data Specialist</p><ul><li>Developed and maintained VBA macros to scrape transaction freports from data store, fix broken transaction data, and automate manual data entry into Attachmate</li><li>Maintained Access database for rejected transactions</li><li>Tested code releases and performed regression testing on the backend transaction clearing system</li><li>Created queries to research problems and audit processes using SQL Server Management Studio 2012</li><li>Assisted in development of transaction processing flowcharts</li></ul><h2>Skills</h2><ul><li>HTML</li><li>CSS</li><li>JavaScript</li><li>VBA</li><li>Python</li><li>SQL</li></ul>";
}

document.getElementById("portfolio_button").onclick = function() {
	document.getElementById("website_body2").innerHTML = "<h1>Portfolio</h1><a href='test_page.html'>test</a>";
}

document.getElementById("contact_button").onclick = function() {
	document.getElementById("website_body2").innerHTML = "<h1>Contact</h1><h3>Email: john.h.hazlitt@gmail.com</h3><h3>Phone: 720-979-5870</h3><h3>Skype: john.hazlitt</h3>";
}
