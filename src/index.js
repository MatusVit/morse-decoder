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
    // write your solution here
    const DIGIT_MORSE_TABLE = makeDigitTable (MORSE_TABLE);
    
    let str = '';
    for (let i = 0; i < expr.length; i=i+10) {
        let key = expr.slice(i, i+10);
        console.log(key + ": " + DIGIT_MORSE_TABLE[key]);
        
        str = str + DIGIT_MORSE_TABLE[key];
    }
    return str;
}

function makeDigitTable(object) {
    const DIGIT_MORSE_TABLE = {};

    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            const element = object[key];
            DIGIT_MORSE_TABLE[translateToDigit(key)] = element;
        }
    }

    DIGIT_MORSE_TABLE['**********'] = ' '

    return DIGIT_MORSE_TABLE;
}

function translateToDigit(str) {
    let keyDigit = '';
    for (let i = 0; i < 5; i++) {
        let char = str[i];
        if (char === '-') keyDigit = keyDigit + '11';
        if (char === '.') keyDigit = keyDigit + '10';
        if (!char) keyDigit = '00' + keyDigit;
    }
    return keyDigit;
}

module.exports = {
    decode
}