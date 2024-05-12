function sumOfTripledEvens(arr) {
  return arr
    .filter((x) => x % 2 === 0)
    .map((x) => x * 3)
    .reduce((sum, x) => sum + x);
}

console.log(sumOfTripledEvens([1, 2, 3, 4, 5]));
