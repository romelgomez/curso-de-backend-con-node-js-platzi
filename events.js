// With Callbacks
const asyncCallBack = cb => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      return cb(null, "hello word");
    } else {
      return cb(new Error("hello error"));
    }
  }, 500);
};

asyncCallBack(function(err, msg) {
  if (err) {
    console.log("err >>>", err);
  } else {
    console.log("msg >>>", msg);
  }
});

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

// With async await
async function def() {
  const result = await promise;
  console.log(result);
}

def();
