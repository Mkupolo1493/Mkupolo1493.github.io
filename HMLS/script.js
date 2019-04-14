$(".pps").hide()
function check() {
	if ($("#passwd").val() === atob("JDMyMg==")) {
		$(".passwd").remove();
		$(".pps").show();
	}
}