/*
Car Fleet
There are n cars traveling to the same destination on a one-lane highway.
You are given two arrays of integers position and speed, both of length n.
position[i] is the position of the ith car (in miles)
speed[i] is the speed of the ith car (in miles per hour)
The destination is at position target miles.
A car can not pass another car ahead of it. It can only catch up to another car and then drive at the same speed as the car ahead of it.
A car fleet is a non-empty set of cars driving at the same position and same speed. A single car is also considered a car fleet.
If a car catches up to a car fleet the moment the fleet reaches the destination, then the car is considered to be part of the fleet.
Return the number of different car fleets that will arrive at the destination.
Example 1:
Input: target = 10, position = [1,4], speed = [3,2]
Output: 1
 */

class Solution {
  carFleet(target: number, position: number[], speed: number[]) {
    let result = 0;
    //pair the cars
    const cars = position.map((v, i) => {
      return [v, speed[i]];
    });
    const sortedCars = cars.sort((car1, car2) => car1[0] - car2[0]);

    let timetaken = [];

    for (let i = 0; i < sortedCars.length; i++) {
      let currentTime = (target - sortedCars[i][0]) / sortedCars[i][1];
      timetaken.push(currentTime);
    }

    let lastFleetTime = 0;
    for (let i = timetaken.length - 1; i > 0; i--) {
      if (timetaken[i] > lastFleetTime) {
        lastFleetTime = timetaken[i];
        result++;
      }
    }

    return result;
  }
}

const solution = new Solution();

const target = 10,
  position = [4, 1, 0, 7],
  speed = [3, 2, 1, 5];

console.log(solution.carFleet(target, position, speed));
