//Generate two random integers and print their mean, variance, and standard deviation.
 var a = parseInt(Math.random()*100)
var b = parseInt(Math.random()*100)
var mean = (a+b)/2

var math1 = function (a,b) {
  var mean = (a+b)/2
  return mean
}

var math2 = function (a,b) {
var mean = (a+b)/2
var stnDev = ((Math.abs(a - mean))^2 + (Math.abs(b- mean))^2)
var stnDev2 = Math.sqrt(stnDev)
return stnDev
}


console.log("num a = " + a)
console.log("num b = " + b)
console.log("mean: " + math1(a,b))
console.log("standard deviation: " + math2(a,b))



// Generate a single random number, from 0 to 100, then output all the even integers from 0 to the random number.

 for (var i = 0; i < a ; i+= 2) {
     console.log(i)
   }



//Generate a single random number, from 0 to 100. If the number is greater than 40 then output all the odd integers from 40 to the random number. If the number is less than 40, output all the odd integers from 0 to 40.

if (a > 40) {
  for (var i = 41; i < a; i+=2) {
    console.log(i)
  }
} else {
  for (var i = 1; i < a; i +=2) {
    console.log(i)
  }
}

//Generate twenty random integers from 0 to 100 and print the largest and smallest integers.

randomNum = []

for (i=0; i <20 ; i++) {
  randomNum.push(parseInt(Math.random()*100))

}
console.log(" max:" + Math.max(randomNum))
console.log("min: " + Math.min(randomNum))
