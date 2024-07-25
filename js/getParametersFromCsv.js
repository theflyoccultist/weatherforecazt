const csv = require('csv-parser');
const fs = require('fs');

const results = [];

// Function to load and process the CSV file
function getParametersFromCsv() {
  return new Promise((resolve, reject) => {
    fs.createReadStream("city_coordinates.csv")
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        resolve(results);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}

// Export the function to be used in another file
module.exports = {
  getParametersFromCsv
};
