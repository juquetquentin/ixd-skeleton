'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
	var i = 0;
	var options = ["Recently uploaded", "Favourites", "Class A", "Class B", "Class C"];

	function changeScreen(e) { 
	    i = (i+1)%5;
	    var newlabel = options[i];
		console.log( newlabel );
	    $("#screenlabel").text( newlabel );
	};
	
	$("#goleft").click(changeScreen);
	$("#goright").click(changeScreen);

}