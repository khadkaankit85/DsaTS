function throttleMe(num: number) {
  console.log("I ran with number ", num);
}

function throttler<T extends any[]>(
  fn: (...args: T) => void,
  delay: number,
): (...args: T) => void {
  let lastCalled = 0;

  return (...args: T) => {
    const now = new Date().getTime();

    if (now - lastCalled < delay) {
      console.log("delay not over so can't call the function rightnow");
      return;
    } else {
      lastCalled = now;
      fn(...args);
    }
  };
}

const throttleMeThrottled = throttler(throttleMe, 100);

for (let index = 0; index < 100; index++) {
  throttleMeThrottled(7);
}
