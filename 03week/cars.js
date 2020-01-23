let cars = ["ford", "dodge", "honda", "chevey"];

console.log(cars.length);

let moreCars = ["mazda", "jaguar", "bmw", "honda"];

let totalCars = cars.concat(moreCars);

console.log(totalCars);

totalCars.indexOf("honda");

console.log(totalCars.indexOf("honda"));

console.log(totalCars.lastIndexOf("ford"));

let stringOfCars = totalCars.join();

console.log(stringOfCars);

let totalCarss = stringOfCars.split(",");

console.log(totalCarss);

let carsInReverse = totalCarss.reverse();

console.log(carsInReverse);

console.log(carsInReverse.sort());

console.log(carsInReverse.indexOf("bmw"));

removedCars = carsInReverse.slice(3, 6);

console.log(removedCars);

let switcheroo = carsInReverse.splice(1, 2, "ford", "honda");

console.log(carsInReverse);

carsInReverse.push("chevey", "dodge");

console.log(carsInReverse);

console.log(carsInReverse.pop());

console.log(carsInReverse.shift());

carsInReverse.unshift("gmc");

console.log(carsInReverse);

let numbers = [23, 45, 0, 2];

numbers.forEach(function(numbers) {
  let numbersarray = [];
  let numbers2 = (numbers += 2);

  numbersarray.push(numbers2);

  console.log(numbersarray);
});
