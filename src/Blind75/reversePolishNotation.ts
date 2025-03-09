/*
#Question:  Evaluate Reverse Polish Notation
You are given an array of strings tokens that represents a valid arithmetic expression in Reverse Polish Notation.
Return the integer that represents the evaluation of the expression.
The operands may be integers or the results of other operations.
The operators include '+', '-', '*', and '/'.
Assume that division between integers always truncates toward zero.
Example 1:
Input: tokens = ["1","2","+","3","*","4","-"]
Output: 5
Explanation: ((1 + 2) * 3) - 4 = 5
*/

class Solution {
  evalRPN(tokens: string[]) {
    let result: number;
    let numsToCalculate: string[] = [];
    let operators = new Set(["/", "*", "+", "-"]);
    for (let i = 0; i < tokens.length; i++) {
      numsToCalculate.push(tokens[i]);
      if (operators.has(tokens[i])) {
        console.log("current stack is this so calculating", numsToCalculate);
        const operation = numsToCalculate.pop();
        const num2 = numsToCalculate.pop();
        const num1 = numsToCalculate.pop();
        result = this.calculator(num1!, num2!, operation!);
        numsToCalculate.push(result.toString());
      }
    }
    return parseInt(numsToCalculate.pop()!);
  }
  /**
   * pass the nums and operator and get that evaluated
   */
  calculator(num1: string, num2: string, operation: string) {
    const number1 = parseInt(num1);
    const number2 = parseInt(num2);
    console.log(number1, number2, operation);

    if (operation === "*") return number1 * number2;
    else if (operation === "/") return number1 / number2;
    else if (operation === "+") return number1 + number2;
    else return number1 - number2;
  }
}
const solution = new Solution();
const tokens = ["1", "2", "+", "3", "*", "4", "-"];
console.log(solution.evalRPN(tokens));
