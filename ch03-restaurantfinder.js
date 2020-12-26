const brain = require("brain.js");

const restaurants = {
  "Brilliant Yellow Corral": "Monday",
  "Penny’s": "Tuesday",
  "Right Coast Wings": "Wednesday",
  "The Delusion Last Railway Car": "Thursday",
  "Fun Day Inn": "Friday",
  JHOP: "Saturday",
  Owls: "Sunday",
};

const trainingData = [];

for (let restaurantName in restaurants) {
  const dayOfWeek = restaurants[restaurantName];
  trainingData.push({
    input: { [dayOfWeek]: 1 },
    output: { [restaurantName]: 1 },
  });
}

const neuralNetwork = new brain.NeuralNetwork({ hiddenLayers: [3] });

const stats = neuralNetwork.train(trainingData);

console.log(stats);
console.log(neuralNetwork.run({ Monday: 1 }));
console.log(neuralNetwork.run({ Wednesday: 1 }));
console.log(neuralNetwork.run({ Sunday: 1 }));

function restaurantForDay(dayOfWeek) {
  const result = neuralNetwork.run({ [dayOfWeek]: 1 });
  let highestValue = 0;
  let highestRestaurantName = "";
  for (let restaurantName in result) {
    if (result[restaurantName] > highestValue) {
      highestValue = result[restaurantName];
      highestRestaurantName = restaurantName;
    }
  }
  return highestRestaurantName;
}

console.log(restaurantForDay("Monday"));
console.log(restaurantForDay("Tuesday"));
console.log(restaurantForDay("Wednesday"));
console.log(restaurantForDay("Thursday"));
console.log(restaurantForDay("Friday"));
console.log(restaurantForDay("Saturday"));
console.log(restaurantForDay("Sunday"));
