
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
})