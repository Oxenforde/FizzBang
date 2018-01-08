let i = 0;
function CheckNumber (i) {
"use strict"
if ((i % 3 == 0) && (i % 5 != 0)) {
document.write('<span class="blu"> Fizz </span>');
}//3 (blue)
if ((i % 3 != 0) &&(i % 5 == 0)) {
document.write('<span class="grn"> Bang');
}//5 (blue)
if ((i % 3 == 0) && (i % 5 == 0)) {
document.write('<span class="red"> FIZZ BANG!!!');
}// 3 & 5 (red)
if ((i % 3 != 0) && (i % 5 != 0)) {
document.write('<span class="blk">');
document.write(i);
}// Not 3 nor 5
  
  
}//function CheckNumber
for (i = 1; i <= 100; i++) { // starts at 1 (not 0) ends at 100
CheckNumber (i);
document.write("<br>");
}//for i
