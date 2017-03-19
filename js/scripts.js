// backend
function userPizza (crust, toppings, size){
  this.crust = crust;
  this.toppings = toppings;
  this.size = size;
}

userPizza.prototype.price = function(price) {
  for (i=1;i<=this.toppings.length;i++){
    var numberOfToppings = i;
  }
  console.log(numberOfToppings);
  var pizzaPrice = (numberOfToppings + this.size + delivery) * 1.1;
  console.log(pizzaPrice);
  return pizzaPrice.toFixed(2);
}

function my() {
  location.reload(true)
}
var delivery = 0;

function location (zip){
  if (zip === 98122) {
    $("#make").show();
    $("#get, #zip").hide();
    delivery=5;
    console.log(delivery)
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
    console.log(getPizza);
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
    console.log(userZip);
    location(userZip);
  })
  $("form#make").submit(function(event){
    event.preventDefault();
    var toppings = []
    $('input:checkbox:checked').each(function(){
      var toppingChoice = $(this).val();
      toppings.push(toppingChoice);
    })
    console.log(toppings);
    var size = parseInt($("#sizes").val());
    console.log(size);
    var crust = $("#crusts").val();
    console.log(crust);
    var pizzaChoice = new userPizza (crust, toppings, size);
    console.log(pizzaChoice);
    var pizzaPrice = pizzaChoice.price();
    console.log(pizzaPrice);
  })
})
