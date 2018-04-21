console.time("winning");
const fs = require("fs");

let floor = 0;

fs.readFile("./problem.txt", "utf8", (err, data) => {
  if (err) throw err;
  let floor = 0;
  let foundSanta = false;
  let aData = Array.from(data.toString()); //create an array from the data
  const lastFloor = aData.map((item, index) => {
    // classic toggle for two conditions. Did we find it yet and is the floor correct
    if (!foundSanta && floor === -1) {
      foundSanta = index; // the index santa entered the basement
      item === "(" // add or minus floor
        ? (floor += 1)
        : (floor -= 1);
    }
    // Statement was not true so we follow this ternary
    else {
      item === "(" // add or minus floor
        ? (floor += 1)
        : (floor -= 1);
    }
    return floor;
  });
  const checkLastFloor = lastFloor[aData.length - 1];
  // I assume you are testing speed without console.logs on
  //console.log("Santa entered -1 at index " + foundSanta);
  //console.log("last floor is " + checkLastFloor);
});

console.timeEnd("winning");
