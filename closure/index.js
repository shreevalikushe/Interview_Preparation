// // 1 Create a function called toggler using closures

function toggler(...rest) {
  let curr = -1;
  return () => {
    curr = curr === rest.length - 1 ? 0 : curr + 1;
    console.log(rest[curr], "CURRENT");
    return rest[curr];
  };
}

const toggle = toggler(1, 2, 3);

console.log(toggle());
console.log(toggle());
console.log(toggle());
console.log(toggle());
console.log(toggle());
console.log(toggle());
console.log(toggle());

//2.  Write a program to throttle using closures
const btnThrottle = document.querySelector("[btn-throttle]");

const click = (...args) => console.log(`clicked to throttle btn ${args[0]}`);

const throttle = (cb, wait = 1000) => {
  let lastCall = 0;
  return () => {
    if (Date.now() - lastCall > wait) {
      lastCall = Date.now();
      cb(lastCall);
    }
  };
};

btnThrottle.addEventListener("click", throttle(click, 3000));

// 3. Explain some areas where you have seen currying being implemented in React / other libraries?
const withCurrying = (name) => (event) => alert(name, event.target);
document
  .querySelector("[with-currying]")
  .addEventListener("click", withCurrying("hey"));

const withoutCurrying = (name, event) => alert(name, event.target);
document
  .querySelector("[without-currying]")
  .addEventListener("click", (event) => withoutCurrying("hi", event));
