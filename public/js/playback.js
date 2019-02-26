'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

var highlight_loop = '';
var highlight = '';
/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");

	// Credits - http://jsfiddle.net/F5NUd/11/
	var i = 0;
	var transcript_text= 'So now I will explain what is the difference between CopyOnWriteArraySet and synchronizedSet. So remember Collections class contain synchronized set method. By using that you can get thread safe portion of set object type. What is the difference between these two things ? CopyOnWriteArraySet is threadsafe and synchronizedSet is also threadsafe. But how we will get threadsafety that is a difference is there.';
	highlight = function()
	{
	        var inputText = $('#hTranscript');
	        var words = transcript_text.split(/[, ]+/);//match(/\w+/g);//inputText.text().match(/\w+/g);
	        if (i >= words.length) {
	            i = 0;
	        }
	        words.splice(i, 0, "<mark style='background-color: yellow;color: black; font-weight:bold'>");
	        words.splice(i + 2, 0, "</mark>");
	        inputText.html(words.slice(0,i+2).join(' '));
	        i += 1;
    }

    highlight_loop = setInterval(highlight, 700);

	function Change(e) {    
		var language = $('#languageSelect').val();
		console.log( language );

		player.setOption("captions", "track", {"languageCode": language});
		var parameters = { "speechText": transcript_text, "toLang": language };
		$.get('/translate', parameters, function(data){

                  var fontSize = $('#fontSelect').val() + "%";
                  console.log( fontSize );
       			  //$('#hTranscript').css("font-size", fontSize+"%");

                  var new_transcript = data;
                  document.getElementById('hTranscript').innerHTML = new_transcript;
                  transcript_text = new_transcript;
                  i = 0;
                  console.log(data);

                  document.getElementById('hTranscript').style.fontSize = fontSize;

        });



		var transcript = $('#transcript').prop('checked');
		if( transcript == false )
			$('#hTranscript').attr('hidden', true );
		else
			$('#hTranscript').attr('hidden', false );

		var subtitles = $('#subtitles').prop('checked');
		if( subtitles == false )
		{
			player.unloadModule("captions"); 
		}
		else
		{
			player.loadModule("captions");
		}
		
	};

	$("#Close").click(Change);

}