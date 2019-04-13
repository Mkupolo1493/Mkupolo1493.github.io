$("#less").hide();
var password = null;
var triesLeft = 3;
var correct = false;
function prompted() {
	if (correct) {
		displayLinks();
	}
	else if (triesLeft) {
		password = $("#passwd").val();
		correct = password === atob("TkVXUFg=");
		if (correct) {
			document.body.innerHTML += '<p class="status success">Correct!</p>';
			setTimeout(function() {
				$("#passwd").remove();
				$(".status").remove();
				displayLinks();	
			}, 1000);
		}
		else {
			document.body.innerHTML += '<p class="status fail">Incorrect.</p>';
			triesLeft--;
			if (!triesLeft) {
				document.body.innerHTML += '<p class="status fail">Authentication failure</p>';
				$("#passwd").remove();
				$("#more").remove();
				setTimeout(function() {$(".status").remove()}, 1000);
			}
		}
	}
	function displayLinks() {
		document.body.innerHTML += '<br class="link">\
		<a href="https://agar.io" class="link">Agar</a>\
		<a href="https://hole.io" class="link">Hole</a>\
		<a href="https://krunker.io" class="link">Krunker</a>\
		<a href="https://relmz.io" class="link">Relmz</a>\
		<a href="https://slither.io" class="link">Slither</a>\
		<a href="https://spinz.io" class="link">Spinz</a>\
		<a href="https://splix.io" class="link">Splix</a>\
		<a href="https://squadd.io" class="link">Squadd</a>\
		<a href="https://surviv.io" class="link">Surviv</a>\
		<a href="https://warbrokers.io" class="link">War Brokers</a>\
		<a href="https://wings.io" class="link">Wings</a>\
		<a href="https://zombs.io" class="link">Zombs</a>\
		<a href="https://zombsroyale.io" class="link">Zombs Royale</a>\
		<button onclick="redirect()" id="browse" class="url">Browse...</button>';
		$("#more").hide();
		$("#less").show();
	}
}

function remove() {
	$(".link").remove();
	$(".url").remove();
	$("#more").show();
	$("#less").hide();
}

function redirect() {
	var urlin = '<input type="text" id="url"  class="url"/>';
	var submit = '<button onclick="getUrl()" id="url-submit" class="url">Submit URL</button>';
	$("#browse").hide();
	$("body").append(urlin, submit);
}
function getUrl() {
	var url = $("#url").val();
	$("#browse").show();
	$(".url").remove();
	location.replace(url);
}