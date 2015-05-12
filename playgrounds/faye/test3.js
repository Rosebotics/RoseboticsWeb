$(document).ready(function(){
	$('#video-btn').click(function(){
		$('#video-container').fadeIn(1000).removeClass('hidden');
	});

	$('.list-group-item').click(function(){
		$(this).find("span").toggleClass("glyphicon-chevron-down").toggleClass("glyphicon-chevron-right");
	});
});