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

	function Change(e) {    
		var language = $('#languageSelect').val();
		console.log( language );
		if( language == 2 )
		{
		    console.log("Language change");
		    $('#iframe').attr( "src", "https://www.youtube.com/embed/k6U-i4gXkLM?controls=0&amp;start=1922&amp;autoplay=1&amp;cc_load_policy=1&amp;&cc_lang_pref=ko" );
		    console.log("Transcript change");
		    $('#hTranscript').html('0. 국민 은 법률 로 인한 배상 은 특별 한 영장 을 청구 할 수 있 어서 최고 득표자 가 제출 한 유일 한 때 에 의하 여 는 경우 를 선거 관리 할 수 없 을 포함 한 사항 은 청구 할 수 있 다국민 투표 의 범죄 에 의하 여 발언 하 지 아니한 회의 는 요건 은 1988 년 으로 대통령 이 의결 한다국민 경제 자문 기구 를 타파 하 기 위하 여 긴급 한 형태 로 정한다국민 은 이 정하 는 헌법 시행 당시 의 심사 할 수 있 다국민 의 기본 질서 를 진다0. 국민 은 법률 로 인한 배상 은 특별 한 영장 을 청구 할 수 있 어서 최고 득표자 가 제출 한 유일 한 때 에 의하 여 는 경우 를 선거 관리 할 수 없 을 포함 한 사항 은 청구 할 수 있 다국민 투표 의 범죄 에 의하 여 발언 하 지 아니한 회의 는 요건 은 1988 년 으로 대통령 이 의결 한다국민 경제 자문 기구 를 타파 하 기 위하 여 긴급 한 형태 로 정한다국민 은 이 정하 는 헌법 시행 당시 의 심사 할 수 있 다국민 의 기본 질서 를 진다0. 국민 은 법률 로 인한 배상 은 특별 한 영장 을 청구 할 수 있 어서 최고 득표자 가 제출 한 유일 한 때 에 의하 여 는 경우 를 선거 관리 할 수 없 을 포함 한 사항 은 청구 할 수 있 다국민 투표 의 범죄 에 의하 여 발언 하 지 아니한 회의 는 요건 은 1988 년 으로 대통령 이 의결 한다국민 경제 자문 기구 를 타파 하 기 위하 여 긴급 한 형태 로 정한다국민 은 이 정하 는 헌법 시행 당시 의 심사 할 수 있 다국민 의 기본 질서 를 진다0. 국민 은 법률 로 인한 배상 은 특별 한 영장 을 청구 할 수 있 어서 최고 득표자 가 제출 한 유일 한 때 에 의하 여 는 경우 를 선거 관리 할 수 없 을 포함 한 사항 은 청구 할 수 있 다국민 투표 의 범죄 에 의하 여 발언 하 지 아니한 회의 는 요건 은 1988 년 으로 대통령 이 의결 한다국민 경제 자문 기구 를 타파 하 기 위하 여 긴급 한 형태 로 정한다국민 은 이 정하 는 헌법 시행 당시 의 심사 할 수 있 다국민 의 기본 질서 를 진다');
		}
		else
		{
			console.log("Language change");
		    $('#iframe').attr( "src", "https://www.youtube.com/embed/k6U-i4gXkLM?controls=0&amp;start=1922&amp;autoplay=1&amp;cc_load_policy=1&amp;&cc_lang_pref=en" );
		    console.log("Transcript change");
		    $('#hTranscript').html('We introduce new techniques for extracting, analyzing, and visualizing textual contents from instructional videos of low production quality. Using Automatic Speech Recognition, approximate transcripts (≈75% Word Error Rate) are obtained from the originally highly compressed videos of university courses, each comprising between 10 to 30 lectures. Text material in the form of books or papers that accompany the course are then used to filter meaningful phrases from the seemingly incoherent transcripts. The resulting index into the transcripts is tied together and visualized in 3 experimental graphs that help in understanding the overall course structure and provide a tool for localizing certain topics for indexing. We specifically discuss a Transcript Index Map, which graphically lays out key phrases for a course, a Textbook Chapter to Transcript Match, and finally a Lecture Transcript Similarity graph, which clusters semantically similar lectures. We test our methods and tools on 7 full courses with 230 hours of video and 273 transcripts. We are able to extract up to 98 unique key terms for a given transcript and up to 347 unique key terms for an entire course. The accuracy of the Textbook Chapter to Transcript Match exceeds 70% on average. The methods used can be applied to genres of video in which there are recurrent thematic words (news, sports, meetings, …) Source: https://arxiv.org/ftp/cs/papers/0408/0408063.pdf ')
		}

		var transcript = $('#transcript').prop('checked');
		if( transcript == false )
			$('#hTranscript').attr('hidden', true );
		else
			$('#hTranscript').attr('hidden', false );

		var subtitle = $('#subtitles').prop('checked');
		if( subtitle == false )
			$('#iframe').attr( "src", "https://www.youtube.com/embed/k6U-i4gXkLM?controls=0&start=1922&autoplay=1" );
		console.log( transcript );
		console.log( subtitle );
		console.log( $('#iframe').attr( "src") );
	};

	$("#Close").click(Change);

}