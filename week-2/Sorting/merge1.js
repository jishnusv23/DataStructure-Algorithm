function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const midd = Math.floor(arr.length / 2);
  const left = arr.slice(0, midd);
  const right = arr.slice(midd);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(leftArr, rightArr) {
  const SortArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      SortArr.push(leftArr.shift());
    } else {
      SortArr.push(rightArr.shift());
    }
  }
  return[...SortArr,...leftArr,...rightArr]
}

const arr = [8, 20, -2, 4, -6,-56];
console.log(mergeSort(arr));
