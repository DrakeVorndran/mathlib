/* eslint-disable no-undef */
const {round, floor, ceil, pad, degToRad, radToDeg, toDollars, tax, withTax, calculateInterest, mortage, intToHex } = require('../index.js')

test('Sanity Check', () => {
  //this test should pass
})

test("Testing round()", () => {
  expect(round(5.04)).toBe(5)
  expect(round(5.74)).toBe(6)
  expect(round(9)).toBe(9)
  expect(round(9.99)).toBe(10)
  expect(round(0.0001)).toBe(0)
  expect(round(27, 10)).toBe(30)
  expect(round(76, 5)).toBe(75)
})

test("Testing floor()", () => {
  expect(floor(5.04)).toBe(5)
  expect(floor(5.74)).toBe(5)
  expect(floor(9)).toBe(9)
  expect(floor(9.99)).toBe(9)
  expect(floor(0.0001)).toBe(0)
  expect(floor(27, 10)).toBe(20)
  expect(floor(76, 5)).toBe(75)
})

test("Testing ceil()", () => {
  expect(ceil(5.04)).toBe(6)
  expect(ceil(5.74)).toBe(6)
  expect(ceil(9)).toBe(9)
  expect(ceil(9.99)).toBe(10)
  expect(ceil(0.0001)).toBe(1)
  expect(ceil(27, 10)).toBe(30)
  expect(ceil(76, 5)).toBe(80)
})

test("Testing pad()", () => {
  expect(pad(12.42, 4, 4)).toBe("0012.4200")
  expect(pad(9.12, 2, 4)).toBe("09.1200")
  expect(pad(1049.12, 3, 1)).toBe("1049.12")
  expect(pad(12, 2, 3)).toBe('12.000')
})

test("Testing degToRad()", () => {
  expect(degToRad(180)).toBe(Math.PI)
  expect(degToRad(360)).toBe(2 * Math.PI)
  expect(degToRad(90)).toBe(.5 * Math.PI)
})

test("Testing radToDeg()", () => {
  expect(radToDeg(Math.PI)).toBe(180)
  expect(radToDeg(2 * Math.PI)).toBe(360)
  expect(radToDeg(.5 * Math.PI)).toBe(90)
})

test("Testing toDollars()", () => {
  expect(toDollars(5.8)).toBe("$5.80")
  expect(toDollars(0.63)).toBe("$0.63")
  expect(toDollars(204.123)).toBe("$204.12")
})

test("Testing tax()", () => {
  expect(tax(5, 0.4)).toBe(2)
  expect(tax(10, 0.02)).toBe(.2)
  expect(tax(-12, .8)).toBe(-9.6)
})

test("Testing withTax()", () => {
  expect(withTax(5, 0.4)).toBe(7)
  expect(withTax(10, 0.02)).toBe(10.2)
  expect(withTax(-12, .8)).toBe(-21.6)
})

test("Testing intrest()", () => {
  expect(calculateInterest(500, 3, .1)).toBe("$501.50")
  expect(calculateInterest(10000, 10, 3)).toBe("$13439.16")
  expect(calculateInterest(99999999, 200, .6)).toBe("$330823338.22")
})

test("Testing mortage()", () => {
  expect(mortage(120000, 120, 3)).toBe("$360000.00")
})

test("Testing intToHex", () => {
  expect(intToHex(15)).toBe('f')
  expect(intToHex(593)).toBe('251')
})