const brain = require("brain.js");

const trainingData = [
  { input: "Happy new year!", output: "happy" },
  { input: "What a great 2020!", output: "sarcastic" },
  { input: "I'm super unhappy with the last one!", output: "sad" },
  { input: "Are we there yet?", output: "excited" },
];

const neuralNetwork = new brain.recurrent.LSTM();

neuralNetwork.train(trainingData, {
  iterations: 150,
  errorThresh: 0.011,
  log: (stats) => console.log(stats),
});
