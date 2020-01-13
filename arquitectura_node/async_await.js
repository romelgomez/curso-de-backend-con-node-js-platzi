// With async await
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

async function def() {
  const result = await promise;
  console.log(result);
}

def();
