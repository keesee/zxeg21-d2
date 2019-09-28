var n1 = require('./number.js')
var sqFunction = require('./sq')
var stats = require('simple-statistics')
var numList = require('./numlist')



// var combine = sqFunction(n1)
// console.log(combine)

console.log(stats.min(numList))