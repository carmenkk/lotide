# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @carmenk/lotide`

**Require it:**

`const _ = require('@carmenk/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: function that return the first element from the array
* `function2(tail)`: function that return  elements from the array expect the first element
* `function3(middle)`: function that return the middle element from the array
* `function4(map)`: function that creates a new array which is the results of callback function on every element in an array.
* `function5(findKey)`: function that return the first key for which the callback returns a truthy value
* `function6(findKeyByValue)`: function that return a key on an object where its value matches a given value
* `function7(countOnly)`: function that return counts for a specific subset of those items
* `function8(countLetters)`: function that return count of the specific letters 
* `function9(letterPositions)`: function that return the index of the specific letter
* `function10(takeUntil)`:function that creates a slice of array.Elements are taken until the given callback elements
* `function11(without)`: function that remove items from an array
* `function12(eqArrays)`: function that compare equality of two arrays
* `function13(eqObjects)`: function that compare equality of two objects
* `function14(asserEqual)`: function that asser if two inputs are equal 
* `function15(assertArraysEqual)`: function that asser if  two arrays are equal
* `function16(assertObjectsEqual)`: function that asser if two objects are equal