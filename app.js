var ballard, firstHill, international, sLU, georgetown, ravenna;
var locationsArray = [ballard, firstHill, international, sLU, georgetown, ravenna];
var pizzaOdysseys = 0;
//random number function used to generate pizza sold and delivered numbers
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//constructor function for pizza store locations
function PizzaLocation(name){
  this.name = name;
  this.hourlySalesData = [];
}
//constructor function for hourly sales data that will go into each store 18x
function HourlySalesData(time, minSold, maxSold, minDelivered, maxDelivered){
  this.time = time;
  this.pizzaSold = getRandomIntInclusive(minSold, maxSold);
  this.pizzaDelivered = getRandomIntInclusive(minDelivered, maxDelivered);
  this.driversNeeded = Math.ceil(this.pizzaDelivered / 3); //this works because it is below this.pizzaDelivered
}
//method on the prototype of PizzaLocation to push HourlySalesData into array
PizzaLocation.prototype.pushHourlySalesData = function(data){
  this.hourlySalesData.push(data);
};
//creating Ballard with constructor
ballard = new PizzaLocation('Ballard'); //now ballard is an object with a name and an empty array at ballard.hourlySalesData
//calling the pushHourlySalesData method with completed HourlySalesData constructor as data
ballard.pushHourlySalesData(new HourlySalesData('8:00 am', 0, 3, 1, 7));
ballard.pushHourlySalesData(new HourlySalesData('9:00 am', 0, 3, 1, 7));
ballard.pushHourlySalesData(new HourlySalesData('10:00 am', 0, 3, 1, 7));
ballard.pushHourlySalesData(new HourlySalesData('11:00 am', 5, 10, 2, 8));
ballard.pushHourlySalesData(new HourlySalesData('12:00 pm', 5, 10, 2, 8));
ballard.pushHourlySalesData(new HourlySalesData('1:00 pm', 5, 10, 2, 8));
ballard.pushHourlySalesData(new HourlySalesData('2:00 pm', 2, 13, 1, 7));
ballard.pushHourlySalesData(new HourlySalesData('3:00 pm', 2, 13, 1, 7));
ballard.pushHourlySalesData(new HourlySalesData('4:00 pm', 2, 13, 1, 7));
ballard.pushHourlySalesData(new HourlySalesData('5:00 pm', 0, 15, 2, 9));
ballard.pushHourlySalesData(new HourlySalesData('6:00 pm', 0, 15, 2, 9));
ballard.pushHourlySalesData(new HourlySalesData('7:00 pm', 0, 15, 2, 9));
ballard.pushHourlySalesData(new HourlySalesData('8:00 pm', 1, 3, 4, 12));
ballard.pushHourlySalesData(new HourlySalesData('9:00 pm', 1, 3, 4, 12));
ballard.pushHourlySalesData(new HourlySalesData('10:00 pm', 1, 3, 4, 12));
ballard.pushHourlySalesData(new HourlySalesData('11:00 pm', 8, 15, 6, 16));
ballard.pushHourlySalesData(new HourlySalesData('12:00 am', 8, 15, 6, 16));
ballard.pushHourlySalesData(new HourlySalesData('1:00 am', 8, 15, 6, 16));
//creating First Hill with constructor
firstHill = new PizzaLocation('First Hill');
//calling the pushHourlySalesData method with completed HourlySalesData constructor as data
firstHill.pushHourlySalesData(new HourlySalesData('8:00 am', 1, 3, 1, 7));
firstHill.pushHourlySalesData(new HourlySalesData('9:00 am', 1, 3, 1, 7));
firstHill.pushHourlySalesData(new HourlySalesData('10:00 am', 1, 3, 1, 7));
firstHill.pushHourlySalesData(new HourlySalesData('11:00 am', 5, 9, 2, 8));
firstHill.pushHourlySalesData(new HourlySalesData('12:00 pm', 5, 9, 2, 8));
firstHill.pushHourlySalesData(new HourlySalesData('1:00 pm', 5, 9, 2, 8));
firstHill.pushHourlySalesData(new HourlySalesData('2:00 pm', 2, 13, 1, 6));
firstHill.pushHourlySalesData(new HourlySalesData('3:00 pm', 2, 13, 1, 6));
firstHill.pushHourlySalesData(new HourlySalesData('4:00 pm', 2, 13, 1, 6));
firstHill.pushHourlySalesData(new HourlySalesData('5:00 pm', 18, 32, 3, 9));
firstHill.pushHourlySalesData(new HourlySalesData('6:00 pm', 18, 32, 3, 9));
firstHill.pushHourlySalesData(new HourlySalesData('7:00 pm', 18, 32, 3, 9));
firstHill.pushHourlySalesData(new HourlySalesData('8:00 pm', 1, 3, 5, 12));
firstHill.pushHourlySalesData(new HourlySalesData('9:00 pm', 1, 3, 5, 12));
firstHill.pushHourlySalesData(new HourlySalesData('10:00 pm', 1, 3, 5, 12));
firstHill.pushHourlySalesData(new HourlySalesData('11:00 pm', 8, 20, 6, 16));
firstHill.pushHourlySalesData(new HourlySalesData('12:00 am', 8, 20, 6, 16));
firstHill.pushHourlySalesData(new HourlySalesData('1:00 am', 8, 20, 6, 16));
//creating International District with constructor
international = new PizzaLocation('International District');
//calling the pushHourlySalesData method with completed HourlySalesData constructor as data
international.pushHourlySalesData(new HourlySalesData('8:00 am', 0, 4, 0, 4));
international.pushHourlySalesData(new HourlySalesData('9:00 am', 0, 4, 0, 4));
international.pushHourlySalesData(new HourlySalesData('10:00 am', 0, 4, 0, 4));
international.pushHourlySalesData(new HourlySalesData('11:00 am', 0, 7, 0, 4));
international.pushHourlySalesData(new HourlySalesData('12:00 pm', 0, 7, 0, 4));
international.pushHourlySalesData(new HourlySalesData('1:00 pm', 0, 7, 0, 4));
international.pushHourlySalesData(new HourlySalesData('2:00 pm', 2, 15, 1, 4));
international.pushHourlySalesData(new HourlySalesData('3:00 pm', 2, 15, 1, 4));
international.pushHourlySalesData(new HourlySalesData('4:00 pm', 2, 15, 1, 4));
international.pushHourlySalesData(new HourlySalesData('5:00 pm', 10, 26, 4, 6));
international.pushHourlySalesData(new HourlySalesData('6:00 pm', 10, 26, 4, 6));
international.pushHourlySalesData(new HourlySalesData('7:00 pm', 10, 26, 4, 6));
international.pushHourlySalesData(new HourlySalesData('8:00 pm', 8, 22, 7, 15));
international.pushHourlySalesData(new HourlySalesData('9:00 pm', 8, 22, 7, 15));
international.pushHourlySalesData(new HourlySalesData('10:00 pm', 8, 22, 7, 15));
international.pushHourlySalesData(new HourlySalesData('11:00 pm', 0, 2, 2, 8));
international.pushHourlySalesData(new HourlySalesData('12:00 am', 0, 2, 2, 8));
international.pushHourlySalesData(new HourlySalesData('1:00 am', 0, 2, 2, 8));
//creating South Lake Union with constructor
sLU = new PizzaLocation('South Lake Union');
//calling the pushHourlySalesData method with completed HourlySalesData constructor as data
sLU.pushHourlySalesData(new HourlySalesData('8:00 am', 0, 4, 0, 4));
sLU.pushHourlySalesData(new HourlySalesData('9:00 am', 0, 4, 0, 4));
sLU.pushHourlySalesData(new HourlySalesData('10:00 am', 0, 4, 0, 4));
sLU.pushHourlySalesData(new HourlySalesData('11:00 am', 0, 7, 0, 4));
sLU.pushHourlySalesData(new HourlySalesData('12:00 pm', 0, 7, 0, 4));
sLU.pushHourlySalesData(new HourlySalesData('1:00 pm', 0, 7, 0, 4));
sLU.pushHourlySalesData(new HourlySalesData('2:00 pm', 5, 15, 0, 4));
sLU.pushHourlySalesData(new HourlySalesData('3:00 pm', 5, 15, 0, 4));
sLU.pushHourlySalesData(new HourlySalesData('4:00 pm', 5, 15, 0, 4));
sLU.pushHourlySalesData(new HourlySalesData('5:00 pm', 25, 39, 13, 18));
sLU.pushHourlySalesData(new HourlySalesData('6:00 pm', 25, 39, 13, 18));
sLU.pushHourlySalesData(new HourlySalesData('7:00 pm', 25, 39, 13, 18));
sLU.pushHourlySalesData(new HourlySalesData('8:00 pm', 22, 36, 5, 22));
sLU.pushHourlySalesData(new HourlySalesData('9:00 pm', 22, 36, 5, 22));
sLU.pushHourlySalesData(new HourlySalesData('10:00 pm', 22, 36, 5, 22));
sLU.pushHourlySalesData(new HourlySalesData('11:00 pm', 5, 21, 16, 31));
sLU.pushHourlySalesData(new HourlySalesData('12:00 am', 5, 21, 16, 31));
sLU.pushHourlySalesData(new HourlySalesData('1:00 am', 5, 21, 16, 31));
//creating Georgetown with constructor
georgetown = new PizzaLocation('Georgetown');
//calling the pushHourlySalesData method with completed HourlySalesData constructor as data
georgetown.pushHourlySalesData(new HourlySalesData('8:00 am', 2, 7, 3, 5));
georgetown.pushHourlySalesData(new HourlySalesData('9:00 am', 2, 7, 3, 5));
georgetown.pushHourlySalesData(new HourlySalesData('10:00 am', 2, 7, 3, 5));
georgetown.pushHourlySalesData(new HourlySalesData('11:00 am', 3, 8, 3, 9));
georgetown.pushHourlySalesData(new HourlySalesData('12:00 pm', 3, 8, 3, 9));
georgetown.pushHourlySalesData(new HourlySalesData('1:00 pm', 3, 8, 3, 9));
georgetown.pushHourlySalesData(new HourlySalesData('2:00 pm', 1, 5, 1, 4));
georgetown.pushHourlySalesData(new HourlySalesData('3:00 pm', 1, 5, 1, 4));
georgetown.pushHourlySalesData(new HourlySalesData('4:00 pm', 1, 5, 1, 4));
georgetown.pushHourlySalesData(new HourlySalesData('5:00 pm', 5, 13, 2, 4));
georgetown.pushHourlySalesData(new HourlySalesData('6:00 pm', 5, 13, 2, 4));
georgetown.pushHourlySalesData(new HourlySalesData('7:00 pm', 5, 13, 2, 4));
georgetown.pushHourlySalesData(new HourlySalesData('8:00 pm', 22, 41, 15, 42));
georgetown.pushHourlySalesData(new HourlySalesData('9:00 pm', 22, 41, 15, 42));
georgetown.pushHourlySalesData(new HourlySalesData('10:00 pm', 22, 41, 15, 42));
georgetown.pushHourlySalesData(new HourlySalesData('11:00 pm', 15, 20, 6, 21));
georgetown.pushHourlySalesData(new HourlySalesData('12:00 am', 15, 20, 6, 21));
georgetown.pushHourlySalesData(new HourlySalesData('1:00 am', 15, 20, 6, 21));
//creating Ravenna with constructor
ravenna = new PizzaLocation('Ravenna');
//calling the pushHourlySalesData method with completed HourlySalesData constructor as data
ravenna.pushHourlySalesData(new HourlySalesData('8:00 am', 0, 4, 0, 4));
ravenna.pushHourlySalesData(new HourlySalesData('9:00 am', 0, 4, 0, 4));
ravenna.pushHourlySalesData(new HourlySalesData('10:00 am', 0, 4, 0, 4));
ravenna.pushHourlySalesData(new HourlySalesData('11:00 am', 0, 7, 0, 4));
ravenna.pushHourlySalesData(new HourlySalesData('12:00 pm', 0, 7, 0, 4));
ravenna.pushHourlySalesData(new HourlySalesData('1:00 pm', 0, 7, 0, 4));
ravenna.pushHourlySalesData(new HourlySalesData('2:00 pm', 2, 15, 1, 4));
ravenna.pushHourlySalesData(new HourlySalesData('3:00 pm', 2, 15, 1, 4));
ravenna.pushHourlySalesData(new HourlySalesData('4:00 pm', 2, 15, 1, 4));
ravenna.pushHourlySalesData(new HourlySalesData('5:00 pm', 6, 9, 5, 18));
ravenna.pushHourlySalesData(new HourlySalesData('6:00 pm', 6, 9, 5, 18));
ravenna.pushHourlySalesData(new HourlySalesData('7:00 pm', 6, 9, 5, 18));
ravenna.pushHourlySalesData(new HourlySalesData('8:00 pm', 4, 8, 2, 5));
ravenna.pushHourlySalesData(new HourlySalesData('9:00 pm', 4, 8, 2, 5));
ravenna.pushHourlySalesData(new HourlySalesData('10:00 pm', 4, 8, 2, 5));
ravenna.pushHourlySalesData(new HourlySalesData('11:00 pm', 2, 4, 3, 11));
ravenna.pushHourlySalesData(new HourlySalesData('12:00 am', 2, 4, 3, 11));
ravenna.pushHourlySalesData(new HourlySalesData('1:00 am', 2, 4, 3, 11));

function generateRowData(inputArray){
  var row = document.createElement('tr');
  var col;
  for (var i = 0; i < inputArray.length; i++){
    col = document.createElement('td');
    col.textContent = inputArray[i];
    row.appendChild(col);
  }
  return row;
}

function makeTable(storeLocation, storeID){

  var someTable = document.getElementById(storeID);
  for (var i = 0; i < storeLocation.hourlySalesData.length; i++){
    var someRow = generateRowData([storeLocation.hourlySalesData[i].time, storeLocation.hourlySalesData[i].pizzaSold, storeLocation.hourlySalesData[i].pizzaDelivered, storeLocation.hourlySalesData[i].driversNeeded]);
    someTable.appendChild(someRow);
  }
}

makeTable(ballard, 'ballardTable');
makeTable(firstHill, 'firstHillTable');
makeTable(international, 'internationalTable');
makeTable(sLU, 'sluTable');
makeTable(georgetown, 'georgetownTable');
makeTable(ravenna, 'ravennaTable');

function addOdysseys(storeLocation){
  for (var i = 0; i < storeLocation.hourlySalesData.length; i++){
    pizzaOdysseys += storeLocation.hourlySalesData[i].pizzaSold;
  }
}

addOdysseys(ballard);
addOdysseys(firstHill);
addOdysseys(international);
addOdysseys(sLU);
addOdysseys(georgetown);
addOdysseys(ravenna);

document.getElementById('odysseys').textContent = pizzaOdysseys + ' happy pizza odysseys this week!';
