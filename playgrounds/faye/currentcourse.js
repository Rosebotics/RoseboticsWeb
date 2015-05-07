var progresscolor = '#4285f4';
var googlered = '#db4437';
var googleyellow = '#f4b400';

$(document).ready(function(){

	$('#resume-btn').hover(
        function(){
            console.log('resume mouse in');
            $('#resume-icon').removeClass('glyphicon-pause').addClass('glyphicon-play');
        },
        function(){
            console.log('resume mouse out');
            $('#resume-icon').removeClass('glyphicon-play').addClass('glyphicon-pause');
        }
    );


	$('#resume-btn2').hover(
        function(){
            console.log('resume mouse in');
            $('#resume-icon2').removeClass('glyphicon-pause').addClass('glyphicon-play');
        },
        function(){
            console.log('resume mouse out');
            $('#resume-icon2').removeClass('glyphicon-play').addClass('glyphicon-pause');
        }
    );

    $('.list-group-item').hover(
    	function(){
            console.log('track mouse in');
            $(this).find('svg').css("background-color","white");          
        },
        function(){
            console.log('track mouse out');
            $(this).find('svg').css("background-color","#f1f2f2");          
            
        }
    );

	var line1 = new ProgressBar.Line('#track-progress-container1', {
    color: progresscolor,
    strokeWidth: 3,
    step: function(state, line1) {
        line1.path.setAttribute('stroke', state.color);
    }

	});

	var line2 = new ProgressBar.Line('#track-progress-container2', {
    color: progresscolor,
    strokeWidth: 3,
    step: function(state, line2) {
        line2.path.setAttribute('stroke', state.color);
    }

	});

	var line3 = new ProgressBar.Line('#track-progress-container3', {
    color: progresscolor,
    strokeWidth: 3,
    step: function(state, line3) {
        line3.path.setAttribute('stroke', state.color);
    }
	});

	var circle = new ProgressBar.Circle('#course-progress-container', {
    trailColor: '#f1f2f2',
    trailWidth: 1,
    color: progresscolor,
    strokeWidth: 3,
    trailWidth: 1,
    duration: 1500,

    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        console.log((circle.value() * 100).toFixed(0));
        $('#current-progress-percentage').text((circle.value() * 100).toFixed(0));
    }
	});



	circle.animate(0.5, {
        easing: "easeIn",
        from: {color: googlered},
        to: {color: googleyellow}
    },function() {
    circle.animate(1.0, {
        easing: "easeOut",
        from: {color: googleyellow},
        to: {color: progresscolor}
    });
    });  // Number from 0.0 to 1.0

	line1.animate(1.0, {
    from: {color: googlered},
    to: {color: progresscolor}
    });  // Number from 0.0 to 1.0
    // Number from 0.0 to 1.0
	line2.animate(0.6, {
    from: {color: googlered},
    to: {color: progresscolor}
    });  // Number from 0.0 to 1.0
      // Number from 0.0 to 1.0
	line3.animate(0.3, {
    from: {color: googlered},
    to: {color: progresscolor}
    });  // Number from 0.0 to 1.0
     // Number from 0.0 to 1.0
});