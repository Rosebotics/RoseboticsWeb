
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

$(function() {
	loginModalFunctions();
	$('#resume-btn').hover(
			function() {
				console.log('resume mouse in');
				$('#resume-icon').removeClass('glyphicon-pause')
								 .addClass('glyphicon-play');
			},
			function() {
				console.log('resume mouse out');
				$('#resume-icon').removeClass('glyphicon-play')
								 .addClass('glyphicon-pause');
			});

	$('#video-btn').magnificPopup({
		type : 'iframe'
	});

/*	$("#android-course").hover(

	function() {
		console.log("mouse in");
		var circle = new ProgressBar.Circle('#android-course', {
			color : '#FCB03C',
			strokeWidth : 3,
			trailWidth : 1,
			duration : 1500,
			text : {
				value : '0'
			},
			step : function(state, bar) {
				bar.setText((bar.value() * 100).toFixed(0));
			}
		});

		circle.animate(1, function() {
			circle.animate(0);
		})
	},

	function() {
		console.log("mouse out");
	}

	);*/
})