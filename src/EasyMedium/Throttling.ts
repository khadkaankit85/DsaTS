function throttleMe(num: number) {
  console.log("i ran with number ", num);
}

function throttler<T extends any[]>(fn: (...args: T) => void, delay: number) {
  let lastCalled = 0;

  return (...args: T) => {
    const now = new Date().getTime();

    if (now - lastCalled < delay) {
      return;
    } else {
      lastCalled = now;
      fn(...args);
    }
  };
}

const throttledMe = throttler(throttleMe, 200);

for (let index = 0; index < 1000; index++) {
  throttledMe(1);
}
