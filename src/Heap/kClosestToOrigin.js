/*
You are given an 2-D array points where points[i] = [xi, yi] represents the coordinates of a point on an X-Y axis plane. You are also given an integer k.
Return the k closest points to the origin (0, 0).
The distance between two points is defined as the Euclidean distance (sqrt((x1 - x2)^2 + (y1 - y2)^2)).
You may return the answer in any order.
*/
//pretty easy lol
//find the diff between the current point and the origin, and insert into a data structure that is easy to insert while keeping track of value/priority/sorted order;
//or use a max heap that stores only k number of elements lol

class Solution {
  /**
   * @param {number[][]} points
   * @param {number} k
   * @return {number[][]}
   */
  //what should the heap store? the points and the distance from the origin
  //priority will be based upon the distnce from the origin, since we need the closest to the origin, we gotta use a min heap
  kClosest(points, k) {
    const heap = new MinHeap((a, b) => {
      return b[1] - a[1];
    });
    for (const point of points) {
      const distance = this.getDistance(point);
      heap.push([point, distance]);
      if (heap.size() > k) heap.pop();
    }
    const result = [];
    while (heap.size()) {
      result.push(heap.pop()[0]);
    }
    return result;
  }

  getDistance([x, y]) {
    return x * x + y * y;
  }
}

class MinHeap {
  constructor(compareFn = (a, b) => a - b) {
    this.heap = [];
    this.compare = compareFn;
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  push(val) {
    this.heap.push(val);
    this._heapifyUp();
  }

  pop() {
    const top = this.peek();
    const end = this.heap.pop();
    if (this.size() > 0) {
      this.heap[0] = end;
      this._heapifyDown();
    }
    return top;
  }

  _heapifyUp() {
    let i = this.size() - 1;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.compare(this.heap[i], this.heap[parent]) >= 0) break;
      [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
      i = parent;
    }
  }

  _heapifyDown() {
    let i = 0;
    const length = this.size();
    while (true) {
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      let smallest = i;

      if (
        left < length &&
        this.compare(this.heap[left], this.heap[smallest]) < 0
      ) {
        smallest = left;
      }
      if (
        right < length &&
        this.compare(this.heap[right], this.heap[smallest]) < 0
      ) {
        smallest = right;
      }
      if (smallest === i) break;
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }
  }
}
