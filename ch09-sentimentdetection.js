const brain = require("brain.js");

const trainingData = [
  { input: "Have a great 2021!", output: "happy" },
  { input: "It was a fantastic year!", output: "sarcastic" },
  { input: "I'm super unhappy with 2020!", output: "sad" },
  { input: "Are we there yet?", output: "excited" },
];

const neuralNetwork = new brain.recurrent.LSTM();

neuralNetwork.train(trainingData, {
  iterations: 1000,
});

console.log(neuralNetwork.run("Have a great 2021!"));
console.log(neuralNetwork.run("It was a fantastic year!"));
console.log(neuralNetwork.run("I'm super unhappy with 2020!"));
console.log(neuralNetwork.run("Are we there yet?"));
console.log(neuralNetwork.run("I love brain.js"));
