![npm](https://img.shields.io/npm/v/gyration_crustacean_mathlib)
[![Coverage Status](https://coveralls.io/repos/github/DrakeVorndran/mathlib/badge.svg)](https://coveralls.io/github/DrakeVorndran/mathlib)
![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/DrakeVorndran/mathlib)
[![Build Status](https://travis-ci.com/DrakeVorndran/mathlib.svg?branch=master)](https://travis-ci.com/DrakeVorndran/mathlib)
# Mathlib
This is just a collection of various math functions that are used frequently in projects

### the functions:
* __round(num, place)__    
  Rounds to the the 1's place unless specified otherwise
  ```js
  round(5.8) // => 6
  round(524, 10) // => 520
  round(73, 5) // => 75
  ```
* __floor(num, place)__  
  floors to the 1's place unless specified otherwise
  ```js
  floor(5.8) // => 5
  floor(524, 10) // => 520
  floor(73, 5) // => 70
  ```
* __ceil(num, place)__  
  ceils to the 1's place unless specified otherwise
  ```js
  ceil(5.8) // => 6
  ceil(524, 10) // => 530
  ceil(73, 5) // => 75
  ```
  
* __pad(num, before, after)__  
  pads with 0's before and after, returns a string. Num must have a decimal point
  ```js
  pad(12.3, 3, 5) // => "012.30000"
  pad(203.0, 1, 1) // => "203.0"
  ```
* __degToRad(degrees)__  
  converts degrees to radians
  ```js
  degToRad(90) // => PI/2 as a decimal
  ```
* __radToDeg(radians)__  
  converts radians to degrees
  ```js
  radToDeg(Math.PI / 2) // => 90
  ```
* __toDollars(amount)__  
  takes a number and converts it into a string in american currency
  ```js
  toDollars(23) // => "$23.00"
  toDollars(8.75) // => "$8.75"
  toDollars(4.628) // => "$4.63"
  ```
* __tax(amount, rate)__  
  returns the total amount of tax
  ```js
  tax(100, 5) // => 5
  ```
* __withTax(amount, rate)__  
  returns the total of the tax and the amound
  ```js
  tax(100, 5) // => 105
  ```
* __calculateInterest(total, years, rate)__  
  calculates the total cost given the total amount of money, the number of years, and the rate at which it's taxed. Returns formated as money
  ```js
  calculateInterest(100, 5, 2) // => "$110.00"
  ```
* __mortage(principle, number_of_payments, intrest)__  
  calculates total payment of a mortage given the principle charge, the total number of payments on said charge, and the amount of intrest. returns formated as money
  ```js
  mortage(120000, 120, 3) // => "$360000.00"
  ```
* __intToHex(integer)__  
  converts and int to a hex value
  ```js
  intToHex(3735928559) // => "#deadbeef"
  ```
