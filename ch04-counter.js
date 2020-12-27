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

const trainingData2 = [
  [5, 6, 7, 8, 9, 10],
  [10, 9, 8, 7, 6, 5],
];

const neuralNetwork2 = new brain.recurrent.LSTMTimeStep();

const stats2 = neuralNetwork2.train(trainingData2);

console.log(stats2);
console.log(neuralNetwork2.run([5, 6, 7]));
console.log(neuralNetwork2.run([9, 8]));
