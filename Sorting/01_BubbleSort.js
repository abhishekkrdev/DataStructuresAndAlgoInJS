let arr = [100, 99, 98, 65, 25, 1, 2, 34];

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let swap = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap = true;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (!swap) {
      false;
    }
  }

  return arr;
};

const result = bubbleSort(arr);
console.log(result);
