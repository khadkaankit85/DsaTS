/*We are given an array asteroids of integers representing asteroids in a row. The indices of the asteriod in the array represent their relative position in space.
For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.
Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.
Example 1:
Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
 * */

function asteroidCollision(asteroids: number[]): number[] {
  let result: number[] = [];

  for (let asteroid of asteroids) {
    while (result.length > 0 && result[result.length - 1] > 0 && asteroid < 0) {
      let top = result.pop()!;

      if (top + asteroid === 0) {
        asteroid = 0;
        break;
      } else if (top > Math.abs(asteroid)) {
        asteroid = top;
      }
    }

    if (asteroid !== 0) {
      result.push(asteroid);
    }
  }

  return result;
}
