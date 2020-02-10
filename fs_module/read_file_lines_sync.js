fs = require("fs");

try {
  const filePath = process.argv[2];

  console.log(filePath);

  const content = fs.readFileSync(filePath).toString();

  const lines = content.split("\n").length;

  console.log(lines);
} catch (error) {
  console.log("error", error);
}
