const animals = ['ant', 'bison', 'camel', 'duck', 'elephant', "bird"];

console.log(animals);

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

const partsOfAnimals = animals.slice(1, 3);
console.log(partsOfAnimals)
partsOfAnimals[0] = "dog";
console.log(partsOfAnimals);
console.log(animals);


// Using slice, create newCar from myCar.
const myHonda = {
    color: "red", wheels: 4, engine: {cylinders: 4, size: 2.2},
};
const myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
const newCar = myCar.slice(0, 2);

console.log("myCar =", myCar);
console.log("newCar =", newCar);
console.log("myCar[0].color =", myCar[0].color);
console.log("newCar[0].color =", newCar[0].color);

// Change the color of myHonda.
myHonda.color = "purple";
console.log("The new color of my Honda is", myHonda.color);
// object in an array
console.log("myCar[0].color =", myCar[0].color);
console.log("newCar[0].color =", newCar[0].color);

// an object in a array, the array stores the pointer of the object rather than the value
newCar[0].color = "black";
console.log("The new color of my Honda is", myHonda.color);
console.log("myCar[0].color =", myCar[0].color);
console.log("newCar[0].color =", newCar[0].color);

const myFish = ["angel", "clown", "mandarin", "sturgeon"];
console.log(myFish);
const myFirstRemoved = myFish.splice(1);
console.log(myFish);
console.log(myFirstRemoved);

const removed = myFish.splice(2, 0, "drum");
console.log(myFish);
console.log(removed);
// [ 'angel', 'clown', 'mandarin', 'sturgeon' ]
// [ 'angel' ]
// [ 'clown', 'mandarin', 'sturgeon' ]
// [ 'angel', 'drum' ]
// []

