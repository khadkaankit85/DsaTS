function selectionSort(arr: number[]): number[] {
  let targetIndex = arr.length;
  while (targetIndex > 0) {
    let currentMaxIndex = 0;
    let currentMax = arr[0];
    for (let i = 0; i < targetIndex; i++) {
      if (currentMax < arr[i]) {
        currentMaxIndex = i;
        currentMax = arr[i];
      }
    }
    let temp = arr[targetIndex - 1];
    arr[targetIndex - 1] = currentMax;
    arr[currentMaxIndex] = temp;
    targetIndex--;
  }
  return arr;
}
let arr = [1, 3, 6, -5, -3, 8, 4, 9, 2, 0;
console.log(selectionSort(arr));
