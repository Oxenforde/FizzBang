let i = 0;  //global variable

function CHECKNUMBERi () {
	"use strict"
	if ((i % 3 === 0) && (i % 5 !== 0)) {
		document.write('<span class="blu"> Fizz </span>');
	}//3 (blue)
	if ((i % 3 !== 0) &&(i % 5 === 0)) {
		document.write('<span class="grn"> Bang');
	}//5 (green)
	if ((i % 3 === 0) && (i % 5 === 0)) {
		document.write('<span class="red"> FIZZ BANG!!!');
	}// 3 & 5 (red)
	if ((i % 3 !== 0) && (i % 5 !== 0)) {
		document.write('<span class="blk">');
		document.write(i);
	}// Not 3 nor 5 (black)
}//function CHECKNUMBERi

for (i = 1; i <= 100; i++) { // starts at 1 (not 0) ends at 100
	CHECKNUMBERi ();
	document.write("<br>");
}//for i


// Strictly speaking, the function "CHECKNUMBERi" isn't really necessary.  It could very easily be inserted into the for-loop.  I separated it for clarity.
// "CHECKNUMBERi" checks the value of the global variable "i".
