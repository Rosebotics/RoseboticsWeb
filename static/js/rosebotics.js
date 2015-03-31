
var showAccountDetailsIfNone = function() {
	var student_name_field = $('#edit-student-details-modal-name-field');
	if(student_name_field.val() === "") {
		var modal = $("#edit-student-details-modal");
		modal.modal("show");
		modal.on('hidden.bs.modal', function (event) {
			if(student_name_field.val() === "") {
				modal.modal("show");
			}
		});
	}
}

$(function() {
	showAccountDetailsIfNone();
})