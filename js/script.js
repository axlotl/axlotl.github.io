$(document).ready(function(){

	setTimeout(function(){
		$('.lightbox').addClass('show');
	}, 2000);
	
	$('.show-video').on({
		mousedown : function(){
			$('.lightbox').addClass('show');
		}
	});

	$('.lb-close').on({
		mousedown : function(){
			$('.lightbox').removeClass('show');
		}
	});
});