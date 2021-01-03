const brain = require("brain.js");

const trainingData = [
  { input: { blue: 1 }, output: [1] },
  { input: { red: 1 }, output: [1] },
  { input: { black: 1 }, output: [0] },
  { input: { green: 1 }, output: [0] },
  { input: { brown: 1 }, output: [0] },
];

const neuralNetwork = new brain.NeuralNetwork();

neuralNetwork.train(trainingData);

console.log(neuralNetwork.run({ blue: 1 }));
console.log(neuralNetwork.run({ brown: 1 }));
