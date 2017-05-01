$(document).ready(function () {
	$(".dropDown").click(function () {
		if ($("#tabletDropDown").hasClass("onClick")) {
			$("#tabletDropDown").removeClass("onClick");
		} else {
			$("#tabletDropDown").addClass("onClick");
		}
	});
});
