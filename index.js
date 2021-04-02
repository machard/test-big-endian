const bn = require("bignumber.js");
const _ = require("lodash");

const data = [9, 94, 167, 179, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 222, 241, 192, 222, 217, 190, 199, 241, 161, 103, 8, 25, 131, 50, 64, 240, 39, 178, 94, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 240, 150, 251, 77, 162, 0, 0];
const amountBigEndian = _.range(32).map((i) => data[36 + i]);

console.log("data", data);
console.log("amountBigEndian", amountBigEndian);
let value = amountBigEndian.reduce(
  (value, byte, i) =>
      bn(2)
      .pow(31 - i)
      .times(byte)
      .plus(value),
  bn(0)
);
console.log("value", value.toString());