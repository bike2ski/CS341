/*
 * ui.js
 *
 * Defines:
 * - Functionality for instrumenting the user-interface
 *
 * @author: Tyler Honsinger
 * @since: Sept 8, 2015
 */

 var toggle = function() {
 	// Grab the html element with the ID "about"
 	var aboutButton = document.getElementById('about');

 	test = hasClass(aboutButton, 'show');
 	// Find out if the "about" element has the show class already
 	if (!test) {
 		// Add the class "show" to the element.
 		addClass(aboutButton, 'show');
 	}
 	else removeClass(aboutButton, 'show');
 };

  var fetch = function() {
 	var yearToLook = document.getElementById('year');
 	yearToLook = yearToLook.value;
 	console.log(yearToLook);
 	vizController(yearToLook);
 };

 var initialize = function() {
 	
 	console.log('Initialize!');

 	// Grab the 'About' button element, identified by the
 	// 'about-btn' id.
 	var button = document.getElementById('about-btn');

 	// From this point foward, when the button is clicked, the
 	// toggle function shall be invoked.
 	button.onclick = toggle;

 	// Grab the 'Submit' button element, identified by the 
 	// 'submit-btn' id.
 	button = document.getElementById('submit-btn');

 	// From this point forward, when the button is clicked, the
 	// fetch function shall be invoked.
 	button.onclick = fetch;
 };



 // When this file is included at the bottom of the page,
 // the js is loaded after the DOM is loaded.  It is a 
 // good time to initialize the UI elements in the page
 initialize();
