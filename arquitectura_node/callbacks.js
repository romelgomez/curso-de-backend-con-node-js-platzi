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
