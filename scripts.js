function randomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}
var counter = 0;
while (counter < 10) {
 var randomNum = randomNumber(6);
 document.write(randomNum + ' ');
 counter += 1;
}