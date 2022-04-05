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

  // USE ASYNC AWAIT
  let results = [];
  
  fs.createReadStream('animation-academy-levels-main.csv')
    .pipe(csv({}))
    .on('data', (data) => results.push(data))
    .on('end', () => {
      console.log('done')
    });

  




// console.log(typeof json === "function")