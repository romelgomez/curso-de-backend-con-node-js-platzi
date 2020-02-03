const { Transform } = require("stream");

String.prototype.camalize = function camalize() {
  return this.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) =>
    chr.toUpperCase()
  );
};

const toCamelCaseStream = new Transform({
  transform(chunk, _, callback) {
    this.push(chunk.toString().camalize());
    callback();
  }
});

process.stdin.pipe(toCamelCaseStream).pipe(process.stdout);
