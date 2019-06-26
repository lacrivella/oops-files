const fs = require('fs');

const wordArray = ['rooster', 'dragon', 'tiger', 'rabbit', 'rat', 'ox', 'monkey', 'ram', 'horse', 'dog'];
const randomWord = arr => {
  return Math.floor(Math.random() * arr.length);
};
console.log(randomWord);

function createFile() {
  for(let i = 0; i < n; i++){
    const newRandomWord = wordArray[randomWord(wordArray)];
    fs.writeFile(`./${randomWord}.txt`, randomWord, (err) => {
      if(err) return console.error(err);
    });
  }
}

createFile(25);