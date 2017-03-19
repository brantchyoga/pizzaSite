// backend
function userPizza (crust, toppings, size){
  this.crust = crust;
  this.toppings = toppings;
  this.size = size;
}

userPizza.prototype.price = function(price) {
  var pizzaPriceStart = this.size;
  var tax = 1.1;
  for (i=1;i<=this.toppings.length;i++){
    var numberOfToppings = i;
  }
  if (this.crust === "GlutenFree") {
    var pizzaPriceG =  (pizzaPriceStart + 3 + numberOfToppings)*tax;
    return pizzaPriceG;
 } else if (numberOfToppings <= 3) {
   var pizzaPrice = (pizzaPriceStart + numberOfToppings)*tax;
   return pizzaPrice;
 } else {
   return (pizzaPriceStart)*tax;
 }
}

var delivery = 0;

function location (zip){
  if (zip === 98122) {
    $("#make").show();
    $("#get, #zip").hide();
    delivery=5;
  } else {
    alert("You are outside Brantch's Delivery Range, Please come in for Carryout")
    my();
  }
}

// userinterface
$(function(){
  $("form#get").submit(function(event){
    event.preventDefault();
    var getPizza = $("#getting").val();
    if (getPizza === "Delivery"){
      $("#zip").show();
    } else {
      $("#make").show();
      $("#get").hide();
    }
  })
  $("form#zip").submit(function(event){
    event.preventDefault();
    var userStreet = $("#address").val();
    var userZip = parseInt($("#inputZip").val());
    location(userZip);
  })
  $("form#make").submit(function(event){
    event.preventDefault();
    var toppings = []
    $('input:checkbox:checked').each(function(){
      var toppingChoice = $(this).val();
      toppings.push(toppingChoice);
    })

    var size = parseInt($("#sizes").val());

    var crust = $("#crusts").val();

    var pizzaChoice = new userPizza (crust, toppings, size);

    var pizzaPriceFinal = pizzaChoice.price();

    $("#text").text("Your pizza is " + size + " inches and includes Cheese, " + toppings.join(", ") + " with a " + crust + " crust. It will cost $" + pizzaPriceFinal.toFixed(2) +".");
  })
})
