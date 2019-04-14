$(".pxsv").hide();
function unlock() {
	passwd = $("#passwd").val();
	if (passwd === atob("VFJhTlNGZVI=")) {
		$(".pxsv").show();
		$("input").hide();
		$("button").hide();
	}
}