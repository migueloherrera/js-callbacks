// Write a function, funcCaller, that takes a func (a function) and an arg (any data type). The function returns the func called with arg(as an argument).

function funcCaller(callback, anyArg) {
  return callback(anyArg);
}

function p(arg1) {
  console.log(arr1);
}

funcCaller(p, 5+5); // 10

// Write a function, firstVal, that takes an array, arr, and a function, func, and calls func with the first index of the arr, the index # and the whole array.

function firstVal(arr, callback) {
  return callback(arr[0], 0, arr);
}

function anyFunction(value, index, array) {
  console.log("Value: " + value + " at Index: " + index + " From: " + array);
}

firstVal([5,4,3,2], anyFunction); // Value: 5 at Index: 0 From: 5,4,3,2

// Change firstVal to work not only with arrays but also objects. Since objects are not ordered, you can use any key-value pair on the object.

function firstVal(arr, callback) {
  if (arr instanceof Array) {
    return callback(arr[0], 0, arr);
  } else {
    for (var i in arr) {
      return callback(arr[i], i, arr);
    }
  }
}

firstVal({'one': 1, 'two': 2}, anyFunction); // Value: 1 at Index: one From: [object Object]

// Write a function, once, that takes a function and returns a version of that function which can only be called once. [Hint: you need a closure] You probably don't want to be able to double charge someone's credit card.

function once(callback){
  var called = 0;
  return function() {
    if (called === 0) {
      called++;
      return callback.apply(this, arguments);
    } else {
      console.log("Operation called already");
    }
  };
}

function chargeCreditCard(card, price) {
  console.log(arguments);
}

var processPayment = once(chargeCreditCard);

processPayment(123, 100);
processPayment(123, 100);
