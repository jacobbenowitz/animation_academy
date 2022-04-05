const csv = require('csv-parser');
const fs = require('fs');


// function csvToJson() {

//   const results = [];
  
//   fs.createReadStream('animation-academy-levels-main.csv')
//   .pipe(csv({}))
//   .on('data', (data) => results.push(data))
//   .on('end', () => {
//     return results;
//   });
// }

  // USE ASYNC AWAIT -> pass to a macro function
  let results = [];
  
  fs.createReadStream('animation-academy-levels-main.csv')
    .pipe(csv({}))
    .on('data', (data) => results.push(data))
    .on('end', () => {
      console.log(results[0].lessonNumber)
    });

// console.log(typeof json === "function")