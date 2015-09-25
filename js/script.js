$(document).ready(function(){

	if( readCookie( 'forest-trailer') !== "true"){
		createCookie( 'forest-trailer', true, 1);

		setTimeout(function(){
			showVideo();
		}, 2000);
	}

	
	
	$('.show-video').on({
		mousedown : function(){
			showVideo()

		}
	});

	$('.lb-close').on({
		mousedown : function(e){
			e.preventDefault();
			e.stopPropagation();
			$('.lightbox').removeClass('show');
			setTimeout( function(){
				
				$('.videowrapper iframe').remove();
				
			}, 300);
		}
	});
});

function showVideo(){
	var markup = '<iframe  src="https://www.youtube.com/embed/odkf4SAY8pI?autoplay=1" frameborder="0" allowfullscreen></iframe>';
	$('.videowrapper').append( markup );
	$('.lightbox').addClass('show');
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}