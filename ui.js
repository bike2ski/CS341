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

 var initialize = function() {
 	
 	console.log('Initialize!');

 	// Grab the 'About' button element, identified by the
 	// 'about-btn' id.
 	var button = document.getElementById('about-btn');

 	// From this point foward, when the button is clicked, the
 	// toggle function shall be invoked.
 	button.onclick = toggle;
 };

 // When this file is included at the bottom of the page,
 // the js is loaded after the DOM is loaded.  It is a 
 // good time to initialize the UI elements in the page
 initialize();
