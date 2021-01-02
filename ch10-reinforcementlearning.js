const brain = require("brain.js");

const trainingData = [
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
];

const neuralNetwork = new brain.NeuralNetwork({ hiddenLayers: [3] });

neuralNetwork.train(trainingData);

//BEFORE REINFORCEMENT
console.log("BEFORE REINFORCEMENT");
console.log(neuralNetwork.run([0, 0]));
console.log(neuralNetwork.run([0, 1]));
console.log(neuralNetwork.run([1, 0]));
console.log(neuralNetwork.run([1, 1]));

// 1ST REINFORCEMENT
trainingData.push({ input: [1, 0], output: [1] });
neuralNetwork.train(trainingData);

// AFTER 1ST REINFORCEMENT
console.log("AFTER 1ST REINFORCEMENT");
console.log(neuralNetwork.run([0, 0]));
console.log(neuralNetwork.run([0, 1]));
console.log(neuralNetwork.run([1, 0]));
console.log(neuralNetwork.run([1, 1]));

// 2ND REINFORCEMENT
trainingData.push({ input: [1, 1], output: [0] });
neuralNetwork.train(trainingData);

// AFTER 2ND REINFORCEMENT
console.log("AFTER 2ND REINFORCEMENT");
console.log(neuralNetwork.run([0, 0]));
console.log(neuralNetwork.run([0, 1]));
console.log(neuralNetwork.run([1, 0]));
console.log(neuralNetwork.run([1, 1]));
