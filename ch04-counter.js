const brain = require("brain.js");

const trainingData = [
  [1, 2, 3, 4, 5],
  [5, 4, 3, 2, 1],
];

const neuralNetwork = new brain.recurrent.LSTMTimeStep();

const stats = neuralNetwork.train(trainingData);

console.log(stats);
console.log(neuralNetwork.run([1, 2, 3]));
console.log(neuralNetwork.run([5, 4, 3]));
