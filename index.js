const fs = require('fs');

const zodiac = ['rooster', 'dragon', 'tiger', 'rabbit', 'rat', 'ox', 'monkey', 'ram', 'horse', 'dog'];
// const randomZodiac = (arr) => {
//   return arr[Math.floor(Math.random() * arr.length)];
// };

// function createFile(n) {
//   for(let i = 0; i < n; i++){
//     const newRandomZodiac = zodiacArray[randomZodiac(zodiacArray)];
//     fs.writeFile(`./new-files/${i}.txt`, newRandomZodiac, (err) => {
//       if(err) return console.error(err);
//     });
//   }
// }

// createFile(5);
const getZodiac = () => {
  const index = Math.floor(Math.random() * zodiac.length);
  return zodiac[index];
};

const createFiles = (directory, count, callback) => {
  let writtenSoFar = 0;
  for(let i = 0; i < count; i++) {
    fs.writeFile(`${directory}/${i}.text`, getZodiac(), err => {
      if(err) return callback(err);
      callback(err);

      writtenSoFar += 1;

      if(writtenSoFar === count) callback();
    });
  }
};

module.exports = {
  createFiles
};
