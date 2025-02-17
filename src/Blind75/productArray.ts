/**
 *Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.
Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
 */
function productExceptSelf(nums: number[]): number[] {
  //const preProduct = [1, 1, 2, 6];
  //const postProduct = [1, 4, 12, 24];
  let preProduct = [1];
  let postProduct = [1];

  let pCurrent = 1;

  let pCurrent2 = 1;

  let ans = [];

  for (let i = 1; i < nums.length; i++) {
    pCurrent = pCurrent * nums[i - 1];
    preProduct.push(pCurrent);

    pCurrent2 = pCurrent2 * nums[nums.length - i];
    postProduct.push(pCurrent2);
  }

  console.log(preProduct, postProduct);

  for (let i = 0; i < preProduct.length; i++) {
    let currentProduct = preProduct[i] * postProduct[preProduct.length - i - 1];
    ans.push(currentProduct);
  }
  console.log(ans);

  return ans;
}
productExceptSelf([1, 2, 3, 4]);
