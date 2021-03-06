var ballard, firstHill, international, sLU, georgetown, ravenna, fremont;
var locationsArray = [ballard, firstHill, international, sLU, georgetown, ravenna, fremont];
var pizzaOdysseys = 0;
var odysseysID = document.getElementById('odysseys');
var ballardTableID = document.getElementById('ballardTable');
var firstHillTableID = document.getElementById('firsthillTable');
var internationalTableID = document.getElementById('internationalTable');
var southlakeunionTableID = document.getElementById('southlakeunionTable');
var georgetownTableID = document.getElementById('georgetownTable');
var ravennaTableID = document.getElementById('ravennaTable');
var formPageID = document.getElementById('formPage');
var mainPageID = document.getElementById('mainPage');

var allPizzaLocations = [];

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
ballard = new PizzaLocation('Ballard');
allPizzaLocations.push(ballard);
 //now ballard is an object with a name and an empty array at ballard.hourlySalesData
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
allPizzaLocations.push(firstHill);
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
allPizzaLocations.push(international);
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
allPizzaLocations.push(sLU);
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
allPizzaLocations.push(georgetown);
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
allPizzaLocations.push(ravenna);
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

////SALES-DATA DOM STUFF BELOW HERE
if (formPageID){
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
  makeTable(firstHill, 'firsthillTable');
  makeTable(international, 'internationalTable');
  makeTable(sLU, 'southlakeunionTable');
  makeTable(georgetown, 'georgetownTable');
  makeTable(ravenna, 'ravennaTable');
}

//TEMPORARY SPOT FOR NEW TABLE CODE BELOW
if (formPageID){
  function collectPizzaLocationData(event){
    event.preventDefault();

    var pizzaLocationName = event.target.storeNameForm.value;
    var minSold8a = parseInt(event.target.minSoldForm8aBlock.value);
    var maxSold8a = parseInt(event.target.maxSoldForm8aBlock.value);
    var minSold11a = parseInt(event.target.minSoldForm11aBlock.value);
    var maxSold11a = parseInt(event.target.maxSoldForm11aBlock.value);
    var minSold2p = parseInt(event.target.minSoldForm2pBlock.value);
    var maxSold2p = parseInt(event.target.maxSoldForm2pBlock.value);
    var minSold5p = parseInt(event.target.minSoldForm5pBlock.value);
    var maxSold5p = parseInt(event.target.maxSoldForm5pBlock.value);
    var minSold8p = parseInt(event.target.minSoldForm8pBlock.value);
    var maxSold8p = parseInt(event.target.maxSoldForm8pBlock.value);
    var minSold11p = parseInt(event.target.minSoldForm11pBlock.value);
    var maxSold11p = parseInt(event.target.maxSoldForm11pBlock.value);
    var minDelivered8a = parseInt(event.target.minDeliveredForm8aBlock.value);
    var maxDelivered8a = parseInt(event.target.maxDeliveredForm8aBlock.value);
    var minDelivered11a = parseInt(event.target.minDeliveredForm11aBlock.value);
    var maxDelivered11a = parseInt(event.target.maxDeliveredForm11aBlock.value);
    var minDelivered2p = parseInt(event.target.minDeliveredForm2pBlock.value);
    var maxDelivered2p = parseInt(event.target.maxDeliveredForm2pBlock.value);
    var minDelivered5p = parseInt(event.target.minDeliveredForm5pBlock.value);
    var maxDelivered5p = parseInt(event.target.maxDeliveredForm5pBlock.value);
    var minDelivered8p = parseInt(event.target.minDeliveredForm8pBlock.value);
    var maxDelivered8p = parseInt(event.target.maxDeliveredForm8pBlock.value);
    var minDelivered11p = parseInt(event.target.minDeliveredForm11pBlock.value);
    var maxDelivered11p = parseInt(event.target.maxDeliveredForm11pBlock.value);

    pizzaLocationName = new PizzaLocation(pizzaLocationName);
    console.log(pizzaLocationName);

    pizzaLocationName.pushHourlySalesData(new HourlySalesData('8:00 am', minSold8a, maxSold8a, minDelivered8a, maxDelivered8a));
    pizzaLocationName.pushHourlySalesData(new HourlySalesData('9:00 am', minSold8a, maxSold8a, minDelivered8a, maxDelivered8a));
    pizzaLocationName.pushHourlySalesData(new HourlySalesData('10:00 am', minSold8a, maxSold8a, minDelivered8a, maxDelivered8a));
    pizzaLocationName.pushHourlySalesData(new HourlySalesData('11:00 am', minSold11a, maxSold11a, minDelivered11a, maxDelivered11a));
    pizzaLocationName.pushHourlySalesData(new HourlySalesData('12:00 pm', minSold11a, maxSold11a, minDelivered11a, maxDelivered11a));
    pizzaLocationName.pushHourlySalesData(new HourlySalesData('1:00 pm', minSold11a, maxSold11a, minDelivered11a, maxDelivered11a));
    pizzaLocationName.pushHourlySalesData(new HourlySalesData('2:00 pm', minSold2p, maxSold2p, minDelivered2p, maxDelivered2p));
    pizzaLocationName.pushHourlySalesData(new HourlySalesData('3:00 pm', minSold2p, maxSold2p, minDelivered2p, maxDelivered2p));
    pizzaLocationName.pushHourlySalesData(new HourlySalesData('4:00 pm', minSold2p, maxSold2p, minDelivered2p, maxDelivered2p));
    pizzaLocationName.pushHourlySalesData(new HourlySalesData('5:00 pm', minSold5p, maxSold5p, minDelivered5p, maxDelivered5p));
    pizzaLocationName.pushHourlySalesData(new HourlySalesData('6:00 pm', minSold5p, maxSold5p, minDelivered5p, maxDelivered5p));
    pizzaLocationName.pushHourlySalesData(new HourlySalesData('7:00 pm', minSold5p, maxSold5p, minDelivered5p, maxDelivered5p));
    pizzaLocationName.pushHourlySalesData(new HourlySalesData('8:00 pm', minSold8p, maxSold8p, minDelivered8p, maxDelivered8p));
    pizzaLocationName.pushHourlySalesData(new HourlySalesData('9:00 pm', minSold8p, maxSold8p, minDelivered8p, maxDelivered8p));
    pizzaLocationName.pushHourlySalesData(new HourlySalesData('10:00 pm', minSold8p, maxSold8p, minDelivered8p, maxDelivered8p));
    pizzaLocationName.pushHourlySalesData(new HourlySalesData('11:00 pm', minSold11p, maxSold11p, minDelivered11p, maxDelivered11p));
    pizzaLocationName.pushHourlySalesData(new HourlySalesData('12:00 am', minSold11p, maxSold11p, minDelivered11p, maxDelivered11p));
    pizzaLocationName.pushHourlySalesData(new HourlySalesData('1:00 am', minSold11p, maxSold11p, minDelivered11p, maxDelivered11p));

    var updatedID = pizzaLocationName.name;
    updatedID = updatedID.split(' ').join('').toLowerCase() + 'Table';

    var createdTable = document.createElement('table');
    createdTable.setAttribute('id', updatedID);
    createdTable.setAttribute('class', 'dataTable');
    var createdTableTR = document.createElement('tr');
    createdTable.appendChild(createdTableTR);
    var labelRow = document.createElement('th');
    labelRow.setAttribute('class', 'locationName');
    labelRow.setAttribute('colspan', '4');
    labelRow.textContent = pizzaLocationName.name;
    createdTableTR.appendChild(labelRow);
    var topRow = document.createElement('tr');
    createdTable.appendChild(topRow);
    var topTime = document.createElement('th');
    topTime.textContent = 'Time';
    topRow.appendChild(topTime);
    var topSold = document.createElement('th');
    topSold.textContent = 'Pizzas Sold';
    topRow.appendChild(topSold);
    var topDelivered = document.createElement('th');
    topDelivered.textContent = 'Pizzas Delivered';
    topRow.appendChild(topDelivered);
    var topDrivers = document.createElement('th');
    topDrivers.textContent = 'Drivers Recommended';
    topRow.appendChild(topDrivers);

    document.getElementById('salesDataArticle').appendChild(createdTable);

    makeTable(pizzaLocationName, updatedID);
    //document.getElementById('tableFromFormHeader').textContent = pizzaLocationName.name;
  }

  var createPizzaLocationTable = document.getElementById('createStoreForm');
  createPizzaLocationTable.addEventListener('submit', collectPizzaLocationData);
}
//TEMPORARY SPOT FOR NEW TABLE CODE ABOVE

////SALES-DATA DOM STUFF ABOVE HERE

////INDEX DOM STUFF BELOW
function addOdysseys(storeLocation){
  for (var i = 0; i < storeLocation.hourlySalesData.length; i++){
    pizzaOdysseys += storeLocation.hourlySalesData[i].pizzaSold;
  }
}

if (mainPageID){
  addOdysseys(ballard);
  addOdysseys(firstHill);
  addOdysseys(international);
  addOdysseys(sLU);
  addOdysseys(georgetown);
  addOdysseys(ravenna);
  odysseysID.textContent = pizzaOdysseys * 6 + ' happy pizza odysseys this week!';
}
////INDEX DOM STUFF ABOVE
