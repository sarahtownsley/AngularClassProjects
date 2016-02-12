var goombaPrice = document.getElementById("goomba-price").innerText;
var goombaCaught = document.getElementById("goomba-caught").innerText;
var goombaTotal = goombaPrice * goombaCaught;

document.getElementById("goomba-total").innerHTML = goombaTotal;

var bombPrice = document.getElementById("bomb-price").innerText;
var bombCaught = document.getElementById("bomb-caught").innerText;
var bombTotal = bombPrice * bombCaught;

document.getElementById("bomb-total").innerHTML = bombTotal;

var cheepPrice = document.getElementById("cheep-price").innerText;
var cheepCaught = document.getElementById("cheep-caught").innerText;
var cheepTotal = cheepPrice * cheepCaught;

document.getElementById("cheep-total").innerHTML = cheepTotal;

var grandTotal = goombaTotal + bombTotal + cheepTotal;

document.getElementById("grand-total").innerHTML = grandTotal;



