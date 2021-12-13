// Problem Statement

// https://www.codingninjas.com/codestudio/problems/insertion-sort_3155179?source=youtube&campaign=love_babbar_codestudio2&utm_source=youtube&utm_medium=affiliate&utm_campaign=love_babbar_codestudio2

// https://www.youtube.com/watch?v=wWhAhp6PIuQ

const insertionSort = function (arr) {
  for (let i = 1; i < arr.length; i++) {
    let element = arr[i];
    let j = i - 1;

    // for (; j >= 0; j--) {
    //   if (arr[j] > element) {
    //     arr[j + 1] = arr[j];
    //   } else {
    //     break;
    //   }
    // }

    while (j >= 0 && arr[j] > element) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = element;
  }
};
