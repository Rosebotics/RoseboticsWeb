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
    color: '#FCB03C',
    strokeWidth: 3

	});

	var line2 = new ProgressBar.Line('#track-progress-container2', {
    color: '#FCB03C',
    strokeWidth: 3

	});

	var line3 = new ProgressBar.Line('#track-progress-container3', {
    color: '#FCB03C',
    strokeWidth: 3

	});

	var circle = new ProgressBar.Circle('#course-progress-container', {
    color: '#FCB03C',
    strokeWidth: 3,
    trailWidth: 1,
    duration: 1500,
    text: {
        value: '0'
    }
	});

	circle.animate(1.0);  // Number from 0.0 to 1.0

	line1.animate(1.0);  // Number from 0.0 to 1.0
	line2.animate(0.6);  // Number from 0.0 to 1.0
	line3.animate(0.3);  // Number from 0.0 to 1.0
});