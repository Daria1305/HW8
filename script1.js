function Machine(power) {
   this._power = power;
   this._enabled = false;

 var self = this;

 this.enable = function() {
   self._enabled = true;
 };

 this.disable = function() {
   self._enabled = false;
 };
}


function Fridge(power) {
Machine.apply(this, arguments)

let food = []

this.addFood = function(anything) {
if (this._enabled === false) {
 console.log('Frigo is turned off');
}
else if (food.length + 1 > power / 100) {
 console.log('Your frigo is not so powerfull');
}
else if (this._enalbed === true) {
 food.push(anything)
}
}

this.getFood = function() {
let allFood = food.slice();
return allFood;
}

}
function Sell(power, years_old, condition) {
Fridge.apply(this, arguments)

this.price = 100

this.addPrice = function(anything){
price = price + 10
}

this.reducePrice = function (anything) {
price = price - 10
}


if (food.length = 0) {
alert("You can sell this fridge")
if (power > 1000) {
 this.addPrice()
}
else if (power < 500) {
 this.reducePrice()
}
if (years_old < 5) {
 this.addPrice()
}
else if (years_old > 5) {
 this.reducePrice()
}
if (condition == 1 && condition == 2 && condition == 3) {
 this.reducePrice()
}
else if (condition == 4 && condition == 5) {
 this.addPrice()
}
}
else if (food.length != 0) {
alert("You can not sell this fridge.")
}
}
