$("a").hide();
function leave() {
	if ($("#passwd").val() === btoa("surviv")) {
		alert("Correct!");
		$("div").hide();
		$("a").show();
	}
	else {
		alert("Nope.");
	}
}