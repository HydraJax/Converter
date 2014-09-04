function init() {
	document.getElementById("c_to_f").onclick = celsius;
	document.getElementById("f_to_c").onclick = faren;
	
	function celsius() {
		var c = document.getElementById("to_faren").value;
		var f = (c * 1.8) + 32;
		document.getElementById("C_answer").innerHTML = f;
	}

	function faren() {
		var f = document.getElementById("toCelsius").value;
		var c = (f - 32) / 1.8;
		document.getElementById("F_answer").innerHTML = c;
	}
};

window.onload = init();