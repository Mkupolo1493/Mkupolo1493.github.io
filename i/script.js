var endOfYear = [6, 8];
var date = new Date();
var month = date.getMonth() + 1; /* Months are like an array, they start
with 0, and I don't want myself to get myself mixed up in the fact that
days start with 1 and months don't. */
var day = date.getDate();

if (month > endOfYear[0]) {
	var monthsLeft = 12 - month + endOfYear[0];
}
else {
	var monthsLeft = endOfYear[0] - month;
}

if (day > endOfYear[1]) {
	var daysLeft = 31 - day + endOfYear[1];
	monthsLeft--;
}
else {
	var daysLeft = endOfYear[1] - day;
}

document.getElementById("out").innerText = monthsLeft + " months, " + daysLeft + " days left of school.";