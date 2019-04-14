/*
	NAME: Calendar;
	AUTHOR: 3941driB;
	DESCRIPTION: Counts the number of MVWSD school days left
*/
let start = 1534752000000;
let binarr = [
	1, 1, 1, 1, 1, 0, 0,
	1, 1, 1, 1, 1, 0, 0,
	0, 1, 1, 1, 1, 0, 0,
	1, 1, 1, 1, 1, 0, 0,
	1, 1, 1, 1, 1, 0, 0,
	1, 1, 1, 1, 1, 0, 0,
	1, 1, 1, 1, 1, 0, 0,
	1, 1, 1, 1, 1, 0, 0,
	1, 1, 1, 1, 1, 0, 0,
	1, 1, 1, 1, 1, 0, 0,
	1, 1, 1, 1, 1, 0, 0,
	1, 1, 1, 1, 1, 0, 0,
	0, 1, 1, 1, 1, 0, 0,
	1, 1, 0, 0, 0, 0, 0,
	1, 1, 1, 1, 1, 0, 0,
	1, 1, 1, 1, 1, 0, 0,
	1, 1, 1, 1, 1, 0, 0,
	1, 1, 1, 1, 1, 0, 0,
	0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0,
	0, 1, 1, 1, 1, 0, 0,
	1, 1, 1, 1, 1, 0, 0,
	0, 1, 1, 1, 1, 0, 0,
	1, 1, 1, 1, 1, 0, 0,
	1, 1, 1, 1, 1, 0, 0,
	1, 1, 1, 1, 1, 0, 0,
	0, 0, 0, 0, 0, 0, 0,
	1, 1, 1, 1, 1, 0, 0,
	1, 1, 1, 1, 1, 0, 0,
	1, 1, 1, 1, 1, 0, 0,
	0, 0, 1, 1, 1, 0, 0,
	1, 1, 1, 1, 1, 0, 0,
	1, 1, 1, 1, 1, 0, 0,
	1, 1, 1, 1, 1, 0, 0,
	0, 0, 0, 0, 0, 0, 0,
	1, 1, 1, 1, 1, 0, 0,
	1, 1, 1, 1, 1, 0, 0,
	1, 1, 1, 1, 1, 0, 0,
	1, 1, 1, 1, 1, 0, 0,
	1, 1, 1, 1, 1, 0, 0,
	0, 1, 1, 1, 1, 0, 0,
	1, 1, 1, 1, 1
];

function findIndex(bin, begin) {
	date = new Date();
	let millis = date.getTime();

	function daysBetween(cur, start) {
		const millisInDay = 86400000;
		const diff = cur - start;
		return Math.floor(diff / millisInDay);
	}
	let index = daysBetween(millis, begin);
	return index;
}
let ind = findIndex(binarr, start);

function findWorkDays(bin, index) {
	let count = 0;
	let tmp;
	for (tmp=index;tmp<bin.length;tmp++) {
		if (bin[tmp]) {
			count++;
		}
	}
	return count;
}
let result = findWorkDays(binarr, ind);
document.getElementById("out").innerText = result + " days left of school.";
/* That last line used document.getElementById to select the #out paragraph (see index.html), and assigned the final result to its inner text with (duh) innerText */