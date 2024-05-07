function check(arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
}

var arr = [1, 2, 6, 4, 5];
var target = 10;
var result = check(arr, target);
console.log("🚀 ~ file: DS1.js:14 ~ result:", result); //* The Time complexity O(n2) and The space Complexity O(1)
