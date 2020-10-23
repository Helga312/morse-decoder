const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  const dot = "10",
    dash = "11",
    space = "**********";
  let substr = "",
    char = "",
    morseChar = "",
    decode = "";

  //extract substr 10 chars long
  for (let i = 0; i < expr.length; i += 10) {
    substr = expr.substr(i, 10);

    //find out the meaninful chars
    for (let j = 0; j < 10; j++) {
      if (substr[j] === "1") {
        substr = substr.substr(j);
        break;
      } else if (substr[j] === "*") {
        substr = "**";
        j += 10;
      }
    }
    //decode chars
    for (let a = 0; a < substr.length; a += 2) {
      if (substr[a] !== "*") {
        char = substr.slice(a, a + 2);
        char === dot
          ? (morseChar = `${morseChar}.`)
          : (morseChar = `${morseChar}-`);
        if (substr.length === a + 2) {
          decode = `${decode}${MORSE_TABLE[morseChar]}`;
          morseChar = "";
        }
      } else {
        decode = `${decode} `;
        morseChar = "";
      }
    }
  }
  return decode
}

module.exports = {
  decode
}