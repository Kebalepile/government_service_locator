const fs = require("fs");

let data = fs.readFileSync("processed_data.json");
data = JSON.parse(data);

const reduced_data = [];
if (data.length > 0) {
  for (let province of data) {
    let keys = Object.keys(province.health_facilities?.facilities).filter(
      (key) => !key.includes("_")
    );

    for (let key of keys) {
      delete province.health_facilities.facilities[key];
    }
    reduced_data.push(province)
  }
}
fs.writeFileSync('cleanData.json',JSON.stringify(reduced_data, null, 2),'utf8')
