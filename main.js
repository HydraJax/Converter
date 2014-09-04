function init() {
	document.getElementById("c_to_f").onclick = celsius;
	document.getElementById("f_to_c").onclick = faren;
	
	function celsius() {
		var C = document.getElementById("to_faren").value;
		F = (C * 1.8) + 32;
		console.log(F);
		cSolution();
	}
	function faren() {
		var F = document.getElementById("toCelsius").value;
		C = (F - 32) / 1.8;
		fSolution();
	}
	function cSolution() {
		document.getElementById("C_answer").innerHTML = F;
	}
	function fSolution() {
		document.getElementById("F_answer").innerHTML = C;
	}
};

window.onload = init();