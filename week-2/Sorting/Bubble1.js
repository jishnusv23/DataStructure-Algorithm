function bubbleSort(arr) {
  let swapp
  do {
     swapp = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapp = true;
      }
    }
  } while (swapp);
}
let arr = [-3, 6, 20, 80, 78, 54];
bubbleSort(arr);
console.log(arr);
