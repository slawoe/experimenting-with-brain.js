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
console.log(neuralNetwork.run({ Sunday: 1 }));
