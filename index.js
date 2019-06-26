const fs = require('fs');

const zodiacArray = ['rooster', 'dragon', 'tiger', 'rabbit', 'rat', 'ox', 'monkey', 'ram', 'horse', 'dog'];
const randomZodiac = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

function createFile(n) {
  for(let i = 0; i < n; i++){
    const newRandomZodiac = zodiacArray[randomZodiac(zodiacArray)];
    fs.writeFile(`./new-files/${i}.txt`, newRandomZodiac, (err) => {
      if(err) return console.error(err);
    });
  }
}

createFile(5);

module.exports = createFile;