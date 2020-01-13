// With promises
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      resolve("hello word");
    } else {
      reject(new Error("hello error"));
    }
  }, 500);
});

promise.then(console.log).catch(console.error);
