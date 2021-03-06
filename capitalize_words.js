/*
Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.
*/

let phrase = 'launch school tech & talk';

const cap = str => {
  let arr = str.split(' ');
  let newArr = [];
  for (let word of arr) {
    let firstLetter = word.charAt(0);
    let capFirstLetter = firstLetter.toUpperCase();
    newArr.push(word.replace(firstLetter, capFirstLetter));
  }
  return newArr.join(' ');
}

console.log(cap(phrase));