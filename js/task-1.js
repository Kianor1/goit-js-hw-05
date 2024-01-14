function isEnoughCapacity(products, containerSize) {
  let totalProd = 0;
  for (const prod of Object.values(products)) {
    totalProd += prod;
  }
  return totalProd <= containerSize;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
