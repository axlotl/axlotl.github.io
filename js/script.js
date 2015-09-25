$(document).ready(function(){
	resizeVid();
	showVid();

	$(window).on({
		resize: function(){
			resizeVid();
		}
	});
});

var resizeVid = function(){
	$('.videowrap')
};
var showVid = function(){
	$('.videowrapper').addClass('show');
};