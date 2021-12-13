let arr = [2, 3, 4, 1, 2, 3, 8, 9, 10, 21];

const mergeSortedArray = (arr1, arr2) => {
  let index1 = 0;
  let index2 = 0;

  let sortedArray = [];

  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] < arr2[index2]) {
      sortedArray.push(arr1[index1]);
      index1++;
    } else {
      sortedArray.push(arr2[index2]);
      index2++;
    }
  }

  while (index1 < arr1.length) {
    sortedArray.push(arr1[index1]);
    index1++;
  }

  while (index2 < arr2.length) {
    sortedArray.push(arr2[index2]);
    index2++;
  }

  return sortedArray;
};

const mergeSort = (arr, left, right) => {
  if (left === right) {
    return [arr[left]];
  }

  let mid = Math.floor(left + (right - left) / 2);
  const leftSortedArray = mergeSort(arr, left, mid);
  const rightSortedArray = mergeSort(arr, mid + 1, right);
  const sortedArray = mergeSortedArray(leftSortedArray, rightSortedArray);
  return sortedArray;
};

const result = mergeSort(arr, 0, arr.length - 1);

console.log(result);
