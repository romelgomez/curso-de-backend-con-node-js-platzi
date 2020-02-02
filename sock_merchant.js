//www.hackerrank.com/challenges/sock-merchant/problem

function sockMerchant(n, ar) {
  var count = 0;
  var lost = [];

  if (n < 1) {
    return count;
  }

  for (var i = 0; i < n; i++) {
    var firstIndex = i;
    var lastIndex = n - 1;
    n--;

    if (ar[firstIndex] === ar[lastIndex] && firstIndex !== lastIndex) {
      count++;
    } else {
      if (lost.findIndex(num => num === ar[firstIndex]) >= 0) {
        count++;
        lost.splice(
          lost.findIndex(num => num === ar[firstIndex]),
          1
        );
      } else {
        lost.push(ar[firstIndex]);
      }

      if (
        lost.findIndex(num => num === ar[lastIndex]) >= 0 &&
        firstIndex !== lastIndex
      ) {
        count++;

        lost.splice(
          lost.findIndex(num => num === ar[lastIndex]),
          1
        );
      } else {
        if (firstIndex !== lastIndex) {
          lost.push(ar[lastIndex]);
        }
      }
    }
  }

  return count;
}

const a = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5];
const e = [100];

console.log("result", sockMerchant(a.length, a));
console.log("result", sockMerchant(e.length, e));
