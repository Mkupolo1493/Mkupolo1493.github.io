$("#wrap").hide();
var password = null;
var triesLeft = 3;
var correct = false;
function prompted() {
	if (correct) {
		$("#wrap").show();
		$("#fscreen").show();
		$("#a").show();
	}
	else if (triesLeft) {
		password = $("#passwd").val();
		correct = password === atob("TkVXUFg=");
		if (correct) {
			alert('Correct!');
			$("#passwd").remove();
			$("#show").remove();
			$("#wrap").show();
			$("#fscreen").show();
			$("#a").show();
		}
		else {
			alert('Incorrect...');
			triesLeft--;
			if (!triesLeft) {
				alert('Sorry, you failed thrice. :(')
				$("#passwd").remove();
				$("#show").remove();
			}
		}
	}
}