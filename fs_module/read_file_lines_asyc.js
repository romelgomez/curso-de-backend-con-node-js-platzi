fs = require("fs");

const filePath = process.argv[2];

console.log(filePath);

fs.readFile(filePath, (err, data) => {
  if (err) {
    console.log("error", error);
    return null;
  }

  const lines = data.toString().split("\n").length;
  console.log(lines);
});
