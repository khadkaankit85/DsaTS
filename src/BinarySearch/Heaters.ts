/*
Winter is coming! During the contest, your first job is to design a standard heater with a fixed warm radius to warm all the houses.

Every house can be warmed, as long as the house is within the heater's warm radius range. 

Given the positions of houses and heaters on a horizontal line, return the minimum radius standard of heaters so that those heaters could cover all houses.

Notice that all the heaters follow your radius standard, and the warm radius will the same.

 */

function findRadius(houses: number[], heaters: number[]): number {
  // Sort the heaters to ensure binary search works properly
  heaters.sort((a, b) => a - b);

  let maxDistance = 0;

  // For each house, find the closest heater and calculate the distance
  for (let house of houses) {
    const distance = distanceToClosestHeater(heaters, house);
    maxDistance = Math.max(maxDistance, distance);
  }

  return maxDistance;
}

function distanceToClosestHeater(heaters: number[], house: number): number {
  let start = 0;
  let end = heaters.length - 1;

  // Binary search for the closest heater
  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);

    if (house === heaters[mid]) {
      return 0; // House is exactly at a heater location
    } else if (house < heaters[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  // After binary search, check the closest heaters around the house
  const leftDistance = end >= 0 ? Math.abs(house - heaters[end]) : Infinity;
  const rightDistance =
    start < heaters.length ? Math.abs(house - heaters[start]) : Infinity;

  return Math.min(leftDistance, rightDistance);
}

// Example test case
console.log(findRadius([1, 2, 3], [2])); // Output: 1

console.log(findRadius([1, 2, 3], [2]));
