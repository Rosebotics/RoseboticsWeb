var HeaderVideo = (function ($,document){

	var settings = {
		container: $('.header-video'),
		header: $('.header-video--media'),
		videoTrigger: $('#video-trigger'),
		autoPlayVideo: false
	}

	var init = function(options){
		settings = $.extend(settings, options);
	}

	return {
		init: init
	};

})(jQuery, document);

var getVideoDetails = function() {
	videoDetails = {
		id: settings.header.attr('data-video-src'),
		teaser: settings.header.attr('data-teaser-source'),
		provider: settings.header.attr('data-provider').toLowerCase(),
		videoHeight: settings.header.attr('data-video-height'),
		videoWidth: settings.header.attr('data-video-width')
	}
	return videoDetails;
};

var setFluidContainer = function () {
	settings.container.data('aspectRatio', videoDetails.videoHeight / videoDetails.videoWidth);

	$(window).resize(function(){
		var winWidth = $(window).width(),
			winHeight = $(window).height();

		settings.container
			.width(winWidth)
			.height(winWidth * settings.container.data('aspectRatio'));

		if(winHeight < settings.container.height()) {
			settings.container
				.width(winWidth)
				.height(winHeight);
		}

	}).trigger('resize');

};

var createFrame = function() {
  if(videoDetails.provider === 'youtube') {
    var html = '<iframe src="//www.youtube.com/embed/'+videoDetails.id+'?rel=0&hd=1&autohide=1&showinfo=0&autoplay=1&enablejsapi=1&origin=*" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
  }
  else if(videoDetails.provider === 'vimeo') {
    var html = '<iframe src="//player.vimeo.com/video/'+videoDetails.id+'?title=0&byline=0&portrait=0&color=3d96d2&autoplay=1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
  }
  else if(videoDetails.provider === 'html5') {
    var html = '<video autoplay="true" loop="loop" id="video"><source src="'+videoDetails.id+'.mp4" type="video/mp4"><source src="'+videoDetails.id+'.ogv" type="video/ogg"></video>';
  }
  return html;
};


var appendFrame = function() {
	settings.header.hide();
	settings.container.append(createFrame());
	$('#teaser-video').hide();
	if(settings.videoTrigger) {
		settings.videoTrigger.fadeOut('slow');
	}
}

var bindClickAction = function() {
	settings.videoTrigger.on('click', function(e) {
		e.preventDefault();
		appendFrame();
	});
};

$(document).ready(function() {
     HeaderVideo.init({
        container: $('.header-video'),
        header: $('.header-video--media'),
        videoTrigger: $("#video-trigger"),
        autoPlayVideo: false
      });    
  });