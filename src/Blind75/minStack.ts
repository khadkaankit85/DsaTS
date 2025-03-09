/*
Minimum Stack
Design a stack class that supports the push, pop, top, and getMin operations.
MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
Each function should run in 
O(1) time.
Example 1:
Input: ["MinStack", "push", 1, "push", 2, "push", 0, "getMin", "pop", "top", "getMin"]
Output: [null,null,null,null,0,null,2,1]

Explanation:
MinStack minStack = new MinStack();
minStack.push(1);
minStack.push(2);
minStack.push(0);
minStack.getMin(); // return 0
minStack.pop();
minStack.top();    // return 2
minStack.getMin(); // return 1
 */

class MinStack {
  //stack to keep track of minimum, number at all point
  private minStack: number[] = [];
  private stack: number[] = [];

  constructor() {}
  push(val: number) {
    let prevMin =
      this.minStack.length > 0 ? this.minStack[this.minStack.length - 1] : val;
    this.stack.push(val);
    this.minStack.push(Math.min(prevMin, val));
  }
  pop() {
    this.minStack.pop();
    return this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

const stack1 = new MinStack();
stack1.push(4);
stack1.push(1);
stack1.push(-3);
console.assert(stack1.getMin() === -3, "min to be -3");
console.log(stack1);
