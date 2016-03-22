var timeArray = [];
var am8, am9, am10, am11, pm12, pm1, pm2, pm3, pm4, pm5, pm6, pm7, pm8, pm9, pm10, pm11, am12, am1;
var ballardStore, firstHillStore, internationalStore, sluStore, georgetownStore, ravennaStore;
var driverNum;

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
//first block of 3 hours: 8-11, zaSold(0,4), zaDelivered(0,4)
am8 = {
  hour: '8:00am',
  zaSold: getRandomIntInclusive(0,4),
  zaDelivered: getRandomIntInclusive(0,4)
};

am9 = {
  hour: '9:00am',
  zaSold: getRandomIntInclusive(0,4),
  zaDelivered: getRandomIntInclusive(0,4)
};

am10 = {
  hour: '10:00am',
  zaSold: getRandomIntInclusive(0,4),
  zaDelivered: getRandomIntInclusive(0,4)
};
//second block of hours: 11-2, zaSold(0,7), zaDelivered(0,4)
am11 = {
  hour: '11:00am',
  zaSold: getRandomIntInclusive(0,7),
  zaDelivered: getRandomIntInclusive(0,4)
};

pm12 = {
  hour: '12:00pm',
  zaSold: getRandomIntInclusive(0,7),
  zaDelivered: getRandomIntInclusive(0,4)
};

pm1 = {
  hour: '1:00pm',
  zaSold: getRandomIntInclusive(0,7),
  zaDelivered: getRandomIntInclusive(0,4)
};
//third block of hours: 2-5, zaSold(2,15), zaDelivered(1,4)
pm2 = {
  hour: '2:00pm',
  zaSold: getRandomIntInclusive(2,15),
  zaDelivered: getRandomIntInclusive(1,4)
};

pm3 = {
  hour: '3:00pm',
  zaSold: getRandomIntInclusive(2,15),
  zaDelivered: getRandomIntInclusive(1,4)
};

pm4 = {
  hour: '4:00pm',
  zaSold: getRandomIntInclusive(2,15),
  zaDelivered: getRandomIntInclusive(1,4)
};
//fourth block of hours: 5-8, zaSold(15,35), zaDelivered(3,8)
pm5 = {
  hour: '5:00pm',
  zaSold: getRandomIntInclusive(15,35),
  zaDelivered: getRandomIntInclusive(3,8)
};

pm6 = {
  hour: '6:00pm',
  zaSold: getRandomIntInclusive(15,35),
  zaDelivered: getRandomIntInclusive(3,8)
};

pm7 = {
  hour: '7:00pm',
  zaSold: getRandomIntInclusive(15,35),
  zaDelivered: getRandomIntInclusive(3,8)
};
//fifth block of hours: 8-11pm, zaSold(12,31), zaDelivered(5,12)
pm8 = {
  hour: '8:00pm',
  zaSold: getRandomIntInclusive(12,31),
  zaDelivered: getRandomIntInclusive(5,12)
};

pm9 = {
  hour: '9:00pm',
  zaSold: getRandomIntInclusive(12,31),
  zaDelivered: getRandomIntInclusive(5,12)
};

pm10 = {
  hour: '10:00pm',
  zaSold: getRandomIntInclusive(12,31),
  zaDelivered: getRandomIntInclusive(5,12)
};
//sixth block of hours: 11-2pm, zaSold(5,20), zaDelivered(6,11)
pm11 = {
  hour: '11:00pm',
  zaSold: getRandomIntInclusive(5,20),
  zaDelivered: getRandomIntInclusive(6,11)
};

am12 = {
  hour: '12:00am',
  zaSold: getRandomIntInclusive(5,20),
  zaDelivered: getRandomIntInclusive(6,11)
};

am1 = {
  hour: '1:00am',
  zaSold: getRandomIntInclusive(5,20),
  zaDelivered: getRandomIntInclusive(6,11)
};

timeArray.push(am8, am9, am10, am11, pm12, pm1, pm2, pm3, pm4, pm5, pm6, pm7, pm8, pm9, pm10, pm11, am12, am1);

ballardStore = {
  name: 'Ballard',
  salesData: timeArray,
  storeHours: '8:00am to 2:00am, Tuesday - Sunday, Closed on Mondays.'
};

firstHillStore = {
  name: 'First Hill',
  salesData: timeArray,
  storeHours: '8:00am to 2:00am, Tuesday - Sunday, Closed on Mondays.'
};

internationalStore = {
  name: 'International District',
  salesData: timeArray,
  storeHours: '8:00am to 2:00am, Tuesday - Sunday, Closed on Mondays.'
};

sluStore = {
  name: 'South Lake Union',
  salesData: timeArray,
  storeHours: '8:00am to 2:00am, Tuesday - Sunday, Closed on Mondays.'
};

georgetownStore = {
  name: 'Georgetown',
  salesData: timeArray,
  storeHours: '8:00am to 2:00am, Tuesday - Sunday, Closed on Mondays.'
};

ravennaStore = {
  name: 'Ravenna',
  salesData: timeArray,
  storeHours: '8:00am to 2:00am, Tuesday - Sunday, Closed on Mondays.'
};

function howManyDeliveryBoys(zaDelivered){
  driverNum = Math.ceil(zaDelivered / 3);
  return driverNum;
};

function driversRecommended(driverNum) {
  if (driverNum === 0) {
    return '[ driver not recommended ]';
  } else {
    return '[ drivers recommended: ' + driverNum + ' ]';
  }
};
