
var loginModalFunctions = function() {
	var modal = $("#edit-student-details-modal");
	var student_name_field = $('#edit-student-details-modal-name-field');
  var rosefire_button = $('input[name="getToken"]');
  var logging_in = false;
  rosefire_button.click(function() {
    if (!logging_in) {
      logging_in = true;
      var registryToken = 'ef9309a0f6789c5e9ae471609c2e0372a75a5edfdf8b57cd6a758bf49bfae9471f96b4a56b0c119bd04a2168958cb97eFjjRfqJBcZKe7B/AshEyeybTgYJqfrAWycL++Q6/e74YWX9ekdDCEeJPIxZ3HL37VROZPuNs9ys/xuYK389NjQ==';
      Rosefire.signIn(registryToken, function(err, token) {
        if (!err) {
          var uid = JSON.parse(atob(token.split('.')[1])).d.uid;
          $('input[name="rosefire_token"]').val(token);
          rosefire_button.val("Linked with " + uid);
          rosefire_button.removeClass('btn-primary');
          rosefire_button.addClass('btn-success');
          rosefire_button.addClass('disabled');
          rosefire_button.unbind();
        }          
        logging_in = false;
      }.bind(this));
    }
  });
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
	$('[data-toggle="tooltip"]').tooltip({'html':true});
	loginModalFunctions();
	$('#video-btn').click(function(){
		$('#theater').fadeIn(1000).removeClass('hidden');
	});
	$('#close-btn').click(function(){
		$('#theater').fadeOut(1000);
	});
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
   if(typeof currentCoursePercent !== 'undefined') {
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
	        to: {color: currentCourseColor}
	    });
    });  // Number from 0.0 to 1.0
   }
	if(typeof currentCourseTrackPercentages !== 'undefined') {
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
	}
	

});
