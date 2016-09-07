function calcTotal(a,b) {
  return a + b;
}

function higherOrder(fn, a , b) {
  console.log(fn(a,b));
}

higherOrder(calcTotal, 2, 5);
