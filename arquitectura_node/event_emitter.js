const EventEmitter = require("events");

class Looger extends EventEmitter {
  test(cb) {
    console.log("Before");
    this.emit("start");
    cb();
    this.emit("end");
    console.log("After");
  }
}

const logger = new Looger();

logger.on("start", () => console.log("start event was triggered."));
logger.on("end", () => console.log("end event was triggered."));

const callback = () => {
  setTimeout(() => {
    console.log("callback function call");
  }, 500);
};

logger.test(callback);
