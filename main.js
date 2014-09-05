$(document).ready(function() {

	var celsius = function() {
		var c = $("#to_faren").val();
		var f = (c * 1.8) + 32;
		$("#toCelsius").val(f);
	};

	$("#to_faren").on("change", celsius);

	var faren = function() {
		var f = $("#toCelsius").val();
		var c = (f - 32) / 1.8;
		$("#to_faren").val(c);
	};
	
	$("#toCelsius").on("change", faren);
});