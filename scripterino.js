window.onload=function()
{
	sessionStorage.clear();
};
function backToHotel(){
  location.replace("hotel.html");
}
var cartPrice = [];

function iLikeBuyEggMattMuffin(){
	document.getElementById('eggMattMuffin').innerHTML="PURCHASED 1 Egg Matt Muffin";
	document.getElementById('eggMattMuffin').style.fontSize = "50";
	sessionStorage.setItem("key1", " Egg Matt Muffin ");
	cartPrice.push(3.00);
	var total = 0;
	for (var i = 0; i < cartPrice.length; i++) {
	var cost = total += cartPrice[i]; }
	document.getElementById('subtotal').innerHTML= "Sub Total:  $" + cost.toFixed(2);
	document.getElementById('total').innerHTML= "Total With Tax: $" + (cost * 1.04712).toFixed(2);
}
function iLikeBuyBigMatt(){
	document.getElementById('bigMatt').innerHTML="PURCHASED 1 BigMatt sandwich";
	document.getElementById('bigMatt').style.fontSize = "50";
	sessionStorage.setItem("key2", " Big Matt Sandwich ");
	cartPrice.push(6.00);
	var total = 0;
	for (var i = 0; i < cartPrice.length; i++) {
	var cost = total += cartPrice[i]; }
	document.getElementById('subtotal').innerHTML= "Sub Total:  $" + cost.toFixed(2);
	document.getElementById('total').innerHTML= "Total With Tax: $" + (cost * 1.04712).toFixed(2);
}
function iLikeBuyMattChicken(){
	document.getElementById('mattChicken').innerHTML="PURCHASED 1 MattChicken sandwich";
	document.getElementById('mattChicken').style.fontSize = "50";
	sessionStorage.setItem("key3", " Matt Chicken Sandwich ");
	cartPrice.push(2.00);
	var total = 0;
	for (var i = 0; i < cartPrice.length; i++) {
	var cost = total += cartPrice[i]; }
	document.getElementById('subtotal').innerHTML= "Sub Total:  $" + cost.toFixed(2);
	document.getElementById('total').innerHTML= "Total With Tax: $" + (cost * 1.04712).toFixed(2);
}
function iLikeBuyMattFlurry(){
	document.getElementById('mattFlurry').innerHTML="PURCHASED 1 MattFlurry Cup";
	document.getElementById('mattFlurry').style.fontSize = "50";
	sessionStorage.setItem("key4", " Matt Flurry ");
	cartPrice.push(2.00);
	var total = 0;
	for (var i = 0; i < cartPrice.length; i++) {
	var cost = total += cartPrice[i]; }
	document.getElementById('subtotal').innerHTML= "Sub Total:  $" + cost.toFixed(2);
	document.getElementById('total').innerHTML= "Total With Tax: $" + (cost * 1.04712).toFixed(2);
}
function iLikeBuyChickenMattNuggets(){
	document.getElementById('chickenMattNuggets').innerHTML="PURCHASED 10 MattNuggets";
	document.getElementById('chickenMattNuggets').style.fontSize = "50";
	sessionStorage.setItem("key5", "10 Chicken Matt Nuggets " );
	cartPrice.push(5.00);
	var total = 0;
	for (var i = 0; i < cartPrice.length; i++) {
	var cost = total += cartPrice[i]; }
	document.getElementById('subtotal').innerHTML= "Sub Total:  $" + cost.toFixed(2);
	document.getElementById('total').innerHTML= "Total With Tax: $" + (cost * 1.04712).toFixed(2);
}
function viewDatCart(){
		cartContents=[];
		for (var i = 0; i < sessionStorage.length; i++){
		cartContents.push(sessionStorage.getItem(sessionStorage.key(i)));
		document.getElementById('cartStorageArea').innerHTML = cartContents;
}
}
function lesGoBro(){
  localStorage.setItem("cancer",JSON.stringify(cartContents));
  localStorage.setItem("moreCancer", JSON.stringify(cartPrice));
  location.href="RecieptPage.html";
}
function backToHotel(){
  location.replace('index.html');
}
//EVERYTHING BELOW THIS LINE IS FOR RECIEPT PAGE





//this is a broken function for diplaying the local storage for the cartContents array the "correct" way
/*    for (i = 0; i < b.length; i++){
      var newItem = document.createElement('li');
      var newText = document.createTextNode('b[i]')
      newItem.appendChild(newText);
   var position = document.getElementsByTagName('ul')[0];
   position.appendChild(newItem);
 }
var totals = 0;
for (var i = 0; i < b.length; i++){
  total += b[i];
*/

//these two getElementById things are for calculating the subtotal and total of my menu items.
//document.getElementById(‘subTotal’).innerHTML = “Sub Total: “ + cost.toFixed(2);                   -this also forces the value to be simplified to 2 decimals
//document.getElementById(‘grandTotal’).innerHTML = Total With Tax: “ + (cost * 1.04712).toFixed(2);
//}
