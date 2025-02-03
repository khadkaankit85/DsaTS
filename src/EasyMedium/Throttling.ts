function throttleMe() {
  console.log("i ran");
}

function throttler(fn: Function, delay: number) {
  let lastCalled = 0;

  console.log("throttler function ran");
  return (...args: []) => {
    const now = new Date().getTime();

    if (now - lastCalled < delay) {
      return;
    } else {
      lastCalled = now;
      fn(...args);
    }
  };
}

for (let index = 0; index < 100; index++) {
  throttler(throttleMe, 2000);
}
