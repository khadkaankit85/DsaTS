/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
You must write an algorithm that runs in O(n) time.
*/

function longestConsecutive(nums) {
  //how to check if a number is part of a sequence??? create a hashmap, if the number is part of a sequence then we should have num-1 on our memory
  const store = new Set();
  for (const num of nums) {
    store.add(num);
  }

  let result = 0;

  if (!nums) return 0;

  for (const num of store) {
    //if the number -1 exists, then skip it as it cannot be the start of a sequence

    if (store.has(num - 1)) continue;
    //if it is the begnning of a sequence, then keep checking until current + 1 exists

    let curr = num + 1;
    let temp = 1;
    while (store.has(curr)) {
      temp++;
      curr++;
    }
    result = Math.max(result, temp);
  }
  return result;
}

const input = [100, 4, 200, 1, 3, 2];
const expected = 4;
const output = longestConsecutive(input);
console.log("Output:", output);
console.log("Test passed:", output === expected);
