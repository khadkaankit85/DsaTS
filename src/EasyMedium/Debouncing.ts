function debouceMe() {
  console.log("i ran");
}

/**
 * Takes a function and a delay (in milliseconds), and returns a debounced version of the function.
 * The debounced function delays invoking the provided function until after the delay period has
 * elapsed since the last time it was called.
 */
function debouncer(fn: Function, delay: number) {
  let lastTimeoutId = 0;

  return () => {
    if (lastTimeoutId) {
      clearTimeout(lastTimeoutId);
    }
    lastTimeoutId = setTimeout(() => {
      fn();
    }, delay);
  };
}

const deboucedFunction = debouncer(debouceMe, 1000);

for (let index = 0; index < 1000; index++) {
  deboucedFunction();
}
