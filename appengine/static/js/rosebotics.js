
var loginModalFunctions = function() {
	var modal = $("#edit-student-details-modal");
	var student_name_field = $('#edit-student-details-modal-name-field');
	modal.on('shown.bs.modal', function () {
		  student_name_field.focus();
	});
	if(student_name_field.val() === "") {
		modal.modal("show");
		modal.on('hidden.bs.modal', function (event) {
			if(student_name_field.val() === "") {
				modal.modal("show");
			}
		});
	}
}

// From Current Course
var progresscolor = '#4285f4';
var googlered = '#db4437';
var googleyellow = '#f4b400';

$(document).ready(function(){
	loginModalFunctions();
	
	$('.resume-btn').hover(
        function(){
            //console.log('resume mouse in');
        	$(this).find('.resume-icon').removeClass('glyphicon-pause').addClass('glyphicon-play');
        },
        function(){
            //console.log('resume mouse out');
        	$(this).find('.resume-icon').removeClass('glyphicon-play').addClass('glyphicon-pause');
        }
    );

    $('.list-group-item').hover(
    	function(){
            //console.log('track mouse in');
            $(this).find('svg').css("background-color","white");          
        },
        function(){
            //console.log('track mouse out');
            $(this).find('svg').css("background-color","#f1f2f2");          
            
        }
    );
   
	var circle = new ProgressBar.Circle('#course-progress-container', {
    trailColor: '#f1f2f2',
    trailWidth: 1,
    color: progresscolor,
    strokeWidth: 3,
    trailWidth: 1,
    duration: 1500,
    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        //console.log((circle.value() * 100).toFixed(0));
        $('#current-progress-percentage').text(Math.abs((circle.value() * 100).toFixed(0)) + "%");
    }
	});

	circle.animate(0.5, {
        easing: "easeIn",
        from: {color: googlered},
        to: {color: googleyellow}
    },function() {
    circle.animate(currentCoursePercent, {
        easing: "easeOut",
        from: {color: googleyellow},
        to: {color: progresscolor}
    });
    });  // Number from 0.0 to 1.0
	for(var i = 0; i < currentCourseTrackPercentages.length; i++) {
			var line = new ProgressBar.Line('#track-progress-container' + (i + 1), {
				color : progresscolor,
				strokeWidth : 3,
				step : function(state, line1) {
					line1.path.setAttribute('stroke', state.color);
				}

			});
			line.animate(currentCourseTrackPercentages[i], {
				from : {
					color : googlered
				},
				to : {
					color : progresscolor
				}
			});	
	}
			
	

});