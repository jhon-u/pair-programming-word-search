const wordSearch = (letters, word) => {
  if (word.length === 0) return 'Enter a word to search.';
  if (letters.length === 0) return 'This Array is Empty!';
  
  //horizontal
  const horizontalJoin = letters.map(ls => ls.join(''));
  
  for (const line of horizontalJoin) {
    if (line.includes(word)) return true;
  }

  // vertical
  const transposedArray = [];
  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < letters[i].length; j++) {
      transposedArray.push([]);
    }
    break;
  }

  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < letters[i].length; j++) {
      transposedArray[j].push(letters[i][j]);
    }
  }

  const verticalJoin = transposedArray.map(ls => ls.join(''));
  
  for (const line of verticalJoin) {
    if (line.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;