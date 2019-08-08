/* eslint-disable no-undef */
//Decided to not add to prototype and make all seperate functions

const round = (num, place = 1) => {
  return Number((num + (.5 * place) - ((((num / place) + .5) % 1) * place)).toFixed(Math.abs(Math.log10(place))))
};

const floor = (num, place = 1) => {
  return Number((num - (((num / place) % 1) * place)).toFixed(Math.abs(Math.log10(place))))
};

const ceil = (num, place = 1) => {
  return Number((num % place > 0 ? num + ((1 - ((num / place) % 1)) * place) : num).toFixed(Math.abs(Math.log10(place))))
};

const pad = (num, before = 0, after = 0) => {
  let l = String(num).split('.');
  if (l.length === 1) {
    l.push('0');
  }
  l[0] = l[0].length < before ? '0'.repeat((before - l[0].length)) + l[0] : l[0];
  l[1] = l[1].length < after ? l[1] + '0'.repeat((after - l[1].length)) : l[1];
  return l.join('.')
};

const degToRad = (num) => {
  return num * Math.PI / 180
};

const radToDeg = (num) => {
  return num * 180 / Math.PI
};

const toDollars = (num) => {
  return "$" + pad(round(num, .01), 0, 2)
};

const tax = (num, rate) => {
  return floor(num * rate, .01)
};

const withTax = (num, rate) => {
  return num + tax(num, rate)
};

const calculateInterest = (total, year, rate) => {
  var interest = rate / 100 + 1;
  return toDollars(total * Math.pow(interest, year))
};

const mortage = (p, n, i) => {
  return toDollars(p * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1))
};

const intToHex = (int) => {
  return "#" + int.toString(16)
};



module.exports = { round, floor, ceil, pad, degToRad, radToDeg, toDollars, tax, withTax, calculateInterest, mortage, intToHex };
