let i = 0;
function CheckNumber (i) {
"use strict"
if ((i % 3 == 0) && (i % 5 != 0)) {
document.write('<span class="blu"> Fizz </span>');
}//3 (blue)
if ((i % 5 == 0) && (i % 3 != 0)) {
document.write('<span class="blu"> Bang');
}//5 (blue)
if ((i % 3 == 0) && (i % 5 == 0)) {
document.write('<span class="red"> FIZZ BANG!!!');
}// 3 & 5 (red)
}//function CheckNumber
for (i = 1; i <= 100; i++) { // starts at 1 (not 0) ends at 100
document.write('<span class="blk">');
document.write("Number: ");
document.write(i);
document.write ("  ");
CheckNumber (i);
document.write("<br>");
}//for i
