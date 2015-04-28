
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

});
