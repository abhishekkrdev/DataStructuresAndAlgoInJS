let arr = [100, 99, 98, 65, 25, 1, 2, 34];

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min != i) {
      let temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }

  return arr;
};

const result = selectionSort(arr);
console.log(result);
