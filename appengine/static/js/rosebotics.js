
var loginModalFunctions = function() {
	var modal = $("#edit-student-details-modal");
	var student_name_field = $('#edit-student-details-modal-name-field');
  var rosefire_button = $('input[name="getToken"]');
  rosefire_button.click(function() {
    $('#rosefire-modal').modal('show', {backdrop: false});
    $('#rosefire-error').addClass('hidden');
  });
  var rosefire_login = $('#rosefire-login');
  var logging_in = false;
  rosefire_login.click(function() {
    var rose_email = $('#rose-email').val();
    var rose_password = $('#rose-password').val();    
    if (!logging_in) {
      logging_in = true;
      var creds = {
        email: rose_email + "@rose-hulman.edu",
        password: rose_password,
        registryToken: '85bee1dadcaf0093246a8b3b6c627545a887539d92f71480ec70ba34c67a5f2dc736c47e0c04039844eef9dd9f2ea7b8kENtxsdDt+Oo9mGExHXYBR56vm1r31eCnF0OVXIPQbY1ExYlnCQMZteHQIuCZ4AS/BrFZs9GWNAbit+ph74f5geBc6lN4ZaS3NomanSmFiM='
      };
      Rosefire.getToken(creds, function(err, token) {
        if (err) {
          $('#rosefire-error').removeClass('hidden');
        } else {
          $('#rosefire-error').addClass('hidden');
          $('input[name="rosefire_token"]').val(token);
          rosefire_button.val("Linked with " + rose_email);
          rosefire_button.removeClass('btn-primary');
          rosefire_button.addClass('btn-success');
          rosefire_button.addClass('disabled');
          rosefire_button.unbind();
          $('#rosefire-modal').modal('hide');
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
