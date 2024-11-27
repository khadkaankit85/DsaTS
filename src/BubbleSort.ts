//implementing bubble sort in TS
const unsortedArray = [1, 3, 6, -5, -3, 8, 4, 9, 2, 0];
function bubbleSort(arr: number[]): number[] {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let index in arr) {
      let currentIndex: number = parseInt(index);
      let nextIndex = parseInt(index) + 1;
      if (arr[currentIndex] > arr[nextIndex]) {
        const temp = arr[currentIndex];
        arr[currentIndex] = arr[nextIndex];
        arr[nextIndex] = temp;
        swapped = true;
      }
    }
  }
  return arr;
}
console.log(bubbleSort(unsortedArray));
// the time complexity is O(n^2)
