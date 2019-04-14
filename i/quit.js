function prompted() {
	if ($("#passwd").val() === btoa("surviv")) {
		document.body.innerHTML += '<a href="https://mkupolo1493.github.io/5282/index.html">5282</a> | <a href="https://mkupolo1493.github.io/HTMLFRP/index.html">REPL Portal</a>';
		$("#passwd").remove();
		$("button").hide();
	}
	else {
		alert('No.');
	}
}
