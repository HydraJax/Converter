$(document).ready(function() {

	var celsius = function() {
		var c = $("#to_faren").val();
		var f = (c * 1.8) + 32;
		$("#C_answer").html(f);
	};

	$("#c_to_f").on("click", celsius);

	var faren = function() {
		var f = $("#toCelsius").val();
		var c = (f - 32) / 1.8;
		$("#F_answer").html(c);
	};
	
	$("#f_to_c").on("click", faren);
});