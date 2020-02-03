const { Duplex } = require("stream");

const duplexStream = new Duplex({
  write(chunk, encoding, callback) {
    // console.log(chunk.toString());
    callback();
  },
  read(size) {
    setTimeout(() => {
      if (this.currentCharCode > 90) {
        this.push(null);
        return;
      }

      this.push(String.fromCharCode(this.currentCharCode++).toLowerCase());
    }, 100);
  }
});

duplexStream.currentCharCode = 65;
duplexStream.pipe(duplexStream).pipe(process.stdout);
