var clickTimes = 0; //variable to ensure order function is not called more than once
var meatSelect = 0; //Global variable to count number of meats/veggies selected. Global to ensure it is always defined even if no meats are selected.
var veggieSelect = 0;

//Order function, called when html button is clicked
function order(){
	if (clickTimes == 0){
		document.getElementById("order-box").style.opacity = "1";	
		
		//Shows pizza-size and price selected
		var size = $('input[type=radio][name=size]:checked').attr('id'); // Stores size from the id of the selected radio button
		document.getElementById(size+"-order").style.display = "inline";
		document.getElementById(size+"-order").innerHTML += "<br>";
		
		var sizePrice = sizeCalc(size);
		document.getElementById("size-total").innerHTML += '$' + sizePrice;
		
		
		//Shows cheese and price selected
		var cheese = $('input[type=radio][name=cheese]:checked').attr('id'); // Stores cheese from the id of the selected radio button
		document.getElementById(cheese+"-order").style.display = "inline";
		document.getElementById(cheese+"-order").innerHTML += "<br>";
		
		var cheesePrice = cheeseCalc(cheese);
		document.getElementById("cheese-total").innerHTML += '$' + cheesePrice;
		
		
		//Shows sauce and price selected
		var sauce = $('input[type=radio][name=sauce]:checked').attr('id'); // Stores sauce from the id of the selected radio button
		document.getElementById(sauce+"-order").style.display = "inline";
		document.getElementById(sauce+"-order").innerHTML += "<br>";
		
		var saucePrice = 0;
		document.getElementById("sauce-total").innerHTML += '$' + saucePrice;
		
		
		//Shows crust and price selected
		var crust = $('input[type=radio][name=crust]:checked').attr('id'); // Stores cheese from the id of the selected radio button
		document.getElementById(crust+"-order").style.display = "inline";
		document.getElementById(crust+"-order").innerHTML += "<br>";
		
		var crustPrice = crustCalc(crust);
		document.getElementById("crust-total").innerHTML += '$' + crustPrice;
		
		//Shows the meats selected and their prices
		var totalMeatPrice = 0;
		var idSelector = function() { return this.id; };
		var selectedMeats = $("[name='meat']:checkbox:checked").map(idSelector).get();
		for(i = 0; i < selectedMeats.length; i++){
			meatPrice = 1;			
			if(selectedMeats[i] == "pepperoni"){
				document.getElementById("pepperoni-order").style.display = "inline";
				document.getElementById("pepperoni-order").innerHTML += "<br>";
				if(i == 0){
					document.getElementById("pepperoni-total").innerHTML += '$' + 0;
				}
				else{
					document.getElementById("pepperoni-total").innerHTML += '$' + meatPrice;
				}
			}
			else if(selectedMeats[i] == "sausage"){
				document.getElementById("sausage-order").style.display = "inline";
				document.getElementById("sausage-order").innerHTML += "<br>";
				if(i == 0){
					document.getElementById("sausage-total").innerHTML += '$' + 0;
				}
				else{
					document.getElementById("sausage-total").innerHTML += '$' + meatPrice;
				}
			}
			else if(selectedMeats[i] == "bacon"){
				document.getElementById("bacon-order").style.display = "inline";
				document.getElementById("bacon-order").innerHTML += "<br>";
				if(i == 0){
					document.getElementById("bacon-total").innerHTML += '$' + 0;
				}
				else{
					document.getElementById("bacon-total").innerHTML += '$' + meatPrice;
				}
			}
			else if(selectedMeats[i] == "beef"){
				document.getElementById("beef-order").style.display = "inline";
				document.getElementById("beef-order").innerHTML += "<br>";
				if(i == 0){
					document.getElementById("beef-total").innerHTML += '$' + 0;
				}
				else{
					document.getElementById("beef-total").innerHTML += '$' + meatPrice;
				}
			}
			else if(selectedMeats[i] == "anchovy"){
				document.getElementById("anchovy-order").style.display = "inline";
				document.getElementById("anchovy-order").innerHTML += "<br>";
				if(i == 0){
					document.getElementById("anchovy-total").innerHTML += '$' + 0;
				}
				else{
					document.getElementById("anchovy-total").innerHTML += '$' + meatPrice;
				}
			}
			else if(selectedMeats[i] == "chicken"){
				document.getElementById("chicken-order").style.display = "inline";
				document.getElementById("chicken-order").innerHTML += "<br>";
				if(i == 0){
					document.getElementById("chicken-total").innerHTML += '$' + 0;
				}
				else{
					document.getElementById("chicken-total").innerHTML += '$' + meatPrice;
				}
			}
			totalMeatPrice = i;
			meatSelect = selectedMeats.length;
		}
		console.log(totalMeatPrice);
		
		//Shows the Veggies selected and their prices
		var totalVeggiePrice = 0;
		var idSelector = function() { return this.id; };
		var selectedVeggies = $("[name='veg']:checkbox:checked").map(idSelector).get();
		for(j = 0; j < selectedVeggies.length; j++){
			veggiePrice = 1;
			if(selectedVeggies[j] == "tomatoes"){
				document.getElementById("tomatoes-order").style.display = "inline";
				document.getElementById("tomatoes-order").innerHTML += "<br>";
				if(j == 0){
					document.getElementById("tomatoes-total").innerHTML += '$' + 0;
				}
				else{
					document.getElementById("tomatoes-total").innerHTML += '$' + veggiePrice;
				}
			}
			else if(selectedVeggies[j] == "onions"){
				document.getElementById("onions-order").style.display = "inline";
				document.getElementById("onions-order").innerHTML += "<br>";
				if(j == 0){
					document.getElementById("onions-total").innerHTML += '$' + 0;
				}
				else{
					document.getElementById("onions-total").innerHTML += '$' + veggiePrice;
				}
			}
			else if(selectedVeggies[j] == "olives"){
				document.getElementById("olives-order").style.display = "inline";
				document.getElementById("olives-order").innerHTML += "<br>";
				if(j == 0){
					document.getElementById("olives-total").innerHTML += '$' + 0;
				}
				else{
					document.getElementById("olives-total").innerHTML += '$' + veggiePrice;
				}
			}
			else if(selectedVeggies[j] == "pepper"){
				document.getElementById("pepper-order").style.display = "inline";
				document.getElementById("pepper-order").innerHTML += "<br>";
				if(j == 0){
					document.getElementById("pepper-total").innerHTML += '$' + 0;
				}
				else{
					document.getElementById("pepper-total").innerHTML += '$' + veggiePrice;
				}
			}
			else if(selectedVeggies[j] == "mushrooms"){
				document.getElementById("mushrooms-order").style.display = "inline";
				document.getElementById("mushrooms-order").innerHTML += "<br>";
				if(j == 0){
					document.getElementById("mushrooms-total").innerHTML += '$' + 0;
				}
				else{
					document.getElementById("mushrooms-total").innerHTML += '$' + veggiePrice;
				}
			}
			else if(selectedVeggies[j] == "pineapple"){
				document.getElementById("pineapple-order").style.display = "inline";
				document.getElementById("pineapple-order").innerHTML += "<br>";
				if(j == 0){
					document.getElementById("pineapple-total").innerHTML += '$' + 0;
				}
				else{
					document.getElementById("pineapple-total").innerHTML += '$' + veggiePrice;
				}
			}
			else if(selectedVeggies[j] == "spinach"){
				document.getElementById("spinach-order").style.display = "inline";
				document.getElementById("spinach-order").innerHTML += "<br>";
				if(j == 0){
					document.getElementById("spinach-total").innerHTML += '$' + 0;
				}
				else{
					document.getElementById("spinach-total").innerHTML += '$' + veggiePrice;
				}
			}
			else if(selectedVeggies[j] == "jalapenos"){
				document.getElementById("jalapenos-order").style.display = "inline";
				document.getElementById("jalapenos-order").innerHTML += "<br>";
				if(j == 0){
					document.getElementById("jalapenos-total").innerHTML += '$' + 0;
				}
				else{
					document.getElementById("jalapenos-total").innerHTML += '$' + veggiePrice;
				}
			}
			totalVeggiePrice = j;
			veggieSelect = selectedVeggies.length;
		}
		console.log(totalVeggiePrice);
		var totalPrice = totalVeggiePrice + totalMeatPrice + sizePrice + cheesePrice + crustPrice;
		document.getElementById("total-calculation").innerHTML = '$' + totalPrice;
	}
	clickTimes++;
	window.scrollTo(0, 1000);
}

//Price calculation functions
function sizeCalc(size){
	price = 0;
	if(size == "personal"){
		price = 6.00;
	}
	else if(size == "medium"){
		price = 10.00
	}
	else if(size == "large"){
		price = 14.00;
	}
	else if(size == "extra-large"){
		price = 16.00;
	}
	return price;
}

function cheeseCalc(cheese){
	price = 0;
	if(cheese == "extra-cheese"){
		price = 3.00;
	}
	return price;
}

function crustCalc(crust){
	price = 0;
	if(crust == "cheese-stuffed"){
		price = 3.00;
	}
	return price;
}

//CANCEL Function
function cancel(){
	document.getElementById("order-box").style.opacity = "0"; //Will hide order box
	
	$(".price").empty();	//Will delete total from previous order
	
	var totalSelected = meatSelect + veggieSelect + 4;
	console.log(totalSelected);
	
	$('p.ingred br').remove(); //Deletes all line breaks added previously in the ingredient section
	//Restores default radio/checkboxes
	$("[name='size']:radio").prop("checked", false);
	$("[name='size'][id='personal']:radio").prop("checked", true);
	$("[name='cheese']:radio").prop("checked", false);
	$("[name='cheese'][id='regular-cheese']:radio").prop("checked", true);
	$("[name='sauce']:radio").prop("checked", false);
	$("[name='sauce'][id='marinara-sauce']:radio").prop("checked", true);
	$("[name='crust']:radio").prop("checked", false);
	$("[name='crust'][id='plain']:radio").prop("checked", true);
	$("[name='meat']:checkbox").prop("checked", false);
	$("[name='veg']:checkbox").prop("checked", false);
	clickTimes = 0;
	
	for(k = 0; k < 30; k++){ 	//Deletes ingredients from previous order
		document.getElementsByClassName("ingred")[k].style.display = "none";
	}
	$("html, body").animate({ scrollTop: 0 }, "slow");
}