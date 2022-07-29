// Example 1:
// Input: arr = [1,2,4,5,7,8], K = 9
// Output: 3

// Example 2:
// Input: arr = [1,2,4,5,7,8,9], K = 10
// Output: 2

// Example 3:
// Input: arr = [1,1,2,4,5,7,8,9,11,14,16,17], K = 18
// Output: 5
// 1, 17
// 2, 16
// 4, 14
// 11, 7

var findPairs = (arr, n) => {
  let map = new Map();
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], i);
  }

  for (let i = 0; i < arr.length; i++) {
    let complement = n - arr[i];
    if (map.has(complement) && complement !== arr[i]) {
      count++;
      map.delete(arr[i]);
      map.delete(complement);
      //console.log(map);
    }
  }

  return count;
};

console.log(findPairs([1, 1, 2, 4, 5, 7, 8, 9, 11, 14, 16, 17], 18));

console.log(findPairs([1, 2, 4, 5, 7, 8, 9], 10));

console.log(findPairs([1, 2, 4, 5, 7, 8], 9));
