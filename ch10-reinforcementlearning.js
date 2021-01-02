const brain = require("brain.js");

const trainingData = [
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  // JUST AS INFORMATION WHAT WILL BE ADDED TO ARRAY IN FUTURE FOR REINFORCEMENT
  //   { input: [1, 0], output: [1] },
  //   { input: [1, 1], output: [0] },
];

const neuralNetwork = new brain.NeuralNetwork({ hiddenLayers: [3] });

neuralNetwork.train(trainingData);

//BEFORE REINFORCEMENT
console.log(neuralNetwork.run([0, 0]));
console.log(neuralNetwork.run([0, 1]));
console.log(neuralNetwork.run([1, 0]));
console.log(neuralNetwork.run([1, 1]));

// FIRST REINFORCEMENT
trainingData.push({ input: [1, 0], output: [1] });
neuralNetwork.train(trainingData);

// AFTER FIRST REINFORCEMENT
console.log(neuralNetwork.run([0, 0]));
console.log(neuralNetwork.run([0, 1]));
console.log(neuralNetwork.run([1, 0]));
console.log(neuralNetwork.run([1, 1]));
