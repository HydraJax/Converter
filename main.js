function init() {
	function celsius() {
		var c = document.getElementById("to_faren").value;
		var f = (c * 1.8) + 32;
		document.getElementById("toCelsius").value = f;
	}

	document.getElementById("to_faren").addEventListener("change", celsius);

	function faren() {
		var f = document.getElementById("toCelsius").value;
		var c = (f - 32) / 1.8;
		document.getElementById("to_faren").value = c;
	}
	document.getElementById("toCelsius").addEventListener("change", faren);
};

window.onload = init();