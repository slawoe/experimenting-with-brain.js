const brain = require("brain.js");

const zero = toArray(
  "#######" +
    "#     #" +
    "#     #" +
    "#     #" +
    "#     #" +
    "#     #" +
    "#######"
);
const one = toArray(
  "   #   " +
    "   #   " +
    "   #   " +
    "   #   " +
    "   #   " +
    "   #   " +
    "   #   "
);
const two = toArray(
  "#######" +
    "#     #" +
    "      #" +
    "     # " +
    "   #   " +
    " #     " +
    "#######"
);
const three = toArray(
  "#######" +
    "      #" +
    "      #" +
    " ######" +
    "      #" +
    "      #" +
    "#######"
);
const four = toArray(
  "#     #" +
    "#     #" +
    "#     #" +
    "#######" +
    "      #" +
    "      #" +
    "      #"
);
const five = toArray(
  "#######" +
    "#      " +
    "#      " +
    "#######" +
    "      #" +
    "      #" +
    "#######"
);
const six = toArray(
  "      #" +
    "    #  " +
    "  #    " +
    " ######" +
    "#     #" +
    "#     #" +
    "#######"
);
const seven = toArray(
  "#######" +
    "     # " +
    "    #  " +
    "   #   " +
    "  #    " +
    " #     " +
    "#      "
);
const eight = toArray(
  "#######" +
    "#     #" +
    "#     #" +
    "#######" +
    "#     #" +
    "#     #" +
    "#######"
);
const nine = toArray(
  "#######" +
    "#     #" +
    "#     #" +
    "###### " +
    "    #  " +
    "   #   " +
    " #     "
);

function toNumber(character) {
  return character === "#" ? 1 : 0;
}

function toArray(string) {
  if (string.length !== 7 * 7) throw new Error("String has a wrong size");
  return string.split("").map(toNumber);
}

const trainingData = [
  { input: zero, output: { zero: 1 } },
  { input: one, output: { one: 1 } },
  { input: two, output: { two: 1 } },
  { input: three, output: { three: 1 } },
  { input: four, output: { four: 1 } },
  { input: five, output: { five: 1 } },
  { input: six, output: { six: 1 } },
  { input: seven, output: { seven: 1 } },
  { input: eight, output: { eight: 1 } },
  { input: nine, output: { nine: 1 } },
];

const neuralNetwork = new brain.NeuralNetwork();

neuralNetwork.train(trainingData);

//nine
const result = brain.likely(
  toArray(
    "#######" +
      "#     #" +
      "#     #" +
      "###### " +
      "    #  " +
      "   #   " +
      " #     "
  ),
  neuralNetwork
);

//damaged nine!
const result2 = brain.likely(
  toArray(
    "# ### #" +
      "#     #" +
      "#      " +
      "# ###  " +
      "    #  " +
      "       " +
      " #     "
  ),
  neuralNetwork
);

//four
const result3 = brain.likely(
  toArray(
    "#     #" +
      "#     #" +
      "#     #" +
      "#######" +
      "      #" +
      "      #" +
      "      #"
  ),
  neuralNetwork
);

//damaged four!
const result4 = brain.likely(
  toArray(
    "      #" +
      "#      " +
      "      #" +
      "# ## ##" +
      "      #" +
      "       " +
      "      #"
  ),
  neuralNetwork
);

//not a number!
const result5 = brain.likely(
  toArray(
    "#  #  #" +
      "#  #  #" +
      "#  #  #" +
      "#  #  #" +
      "#  #  #" +
      "#  #  #" +
      "#  #  #"
  ),
  neuralNetwork
);

console.log(result, result2, result3, result4, result5);
