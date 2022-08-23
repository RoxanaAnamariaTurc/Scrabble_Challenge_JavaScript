class Scrabble
{
  readFile()
  {
    const fs = require('fs');
    let path = require('path');
    let normalPath = path.normalize(__dirname + '/scrabbleWords.txt');
    return fs.readFileSync(normalPath, 'utf8');

  }
  // Write your implementation here
  constructor(aWord)
  {
    this.word = aWord === null ? '' : aWord.toUpperCase();

    this.scores = new Map();
    // A, 1
    // E, 1
    this.readFile().split('\r\n').forEach(element =>
    {
      this.scores.set(element[0], parseInt(element.substring(3)));
    })
  }

  score()
  {
    let result = 0;
    for (let i = 0; i < this.word.length; i++)
    {
      if (this.word[i] === " " || this.word[i] === '\t' || this.word[i] === '\n')
      {
        result += 0;
      }
      else
      {
        result += this.scores.get(this.word[i]);
      }
    }

    return result;
  }

}

let scrabble = new Scrabble("Roxanna");
console.log(scrabble.score());

module.exports = Scrabble


