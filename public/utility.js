/**                                                                                                                
 * utility.js
 *                                                                                                                 
 * Defines generic helper functionality for instrumenting the
 * user-interface.  Based on the tutorials at:
 *
 * http://www.kirupa.com/snippets/add_class_and_remove_class_snippet.htm
 *    and
 * http://sonnyt.com/javascript-check-if-element-has-class/
 *                                                                                                                 
 */


// hasClass
//
// Given an element and a className, return true if the element has
// the class className.
var hasClass = function(element, className) {

    return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
};

// addClass
//
// Given an element and a classToAdd, add the class to the element
// if it doesn't already have it.
var addClass = function(element, classToAdd) {

    var currentClassValue = element.className;

    if (currentClassValue.indexOf(classToAdd) == -1) {
        if ((currentClassValue == null) || (currentClassValue === "")) {
            element.className = classToAdd;
        } else {
            element.className += " " + classToAdd;
        }
    }
};

// removeClass
//
// Given an element and a classToRemove, remove the class
// from the element if it is present.
var removeClass = function(element, classToRemove) {
    var currentClassValue = element.className;
    
    // removing a class value when there is more than one class
    // value present and the class you want to remove is not the
    // first one
    if (currentClassValue.indexOf(" " + classToRemove) != -1) {
	element.className = element.className.replace(" " + classToRemove, "");
	return;
    }
    
    // removing the first class value when there is more than one
    // class value present
    if (currentClassValue.indexOf(classToRemove + " ") != -1) {
	element.className = element.className.replace(classToRemove + " ", "");
	return;
    }
    
    // removing the first class value when there is only one class
    // value present
    if (currentClassValue.indexOf(classToRemove) != -1) {
	element.className = element.className.replace(classToRemove, "");
	return;
    }
};