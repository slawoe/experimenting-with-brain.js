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
