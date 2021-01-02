const brain = require("brain.js");

const trainingData = [
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  //   { input: [1, 0], output: [1] },
  //   { input: [1, 1], output: [0] },
];

const neuralNetwork = new brain.NeuralNetwork({ hiddenLayers: [3] });

neuralNetwork.train(trainingData, { log: (stats) => console.log(stats) });

console.log(neuralNetwork.run([0, 0]));
console.log(neuralNetwork.run([0, 1]));
console.log(neuralNetwork.run([1, 0]));
console.log(neuralNetwork.run([1, 1]));
