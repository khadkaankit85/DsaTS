/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The solution must be done without using division and in O(n) time.
*/

function productExceptSelf(nums) {
  // find the prefix and postfix product, as easy as that
  const n = nums.length;
  const result = Array(n).fill(1);

  // prefix pass
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  // postfix pass
  let postfix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= postfix;
    postfix *= nums[i];
  }

  return result;
}

//or just go through the nums one by one and divide the total product by the current number lol:)
