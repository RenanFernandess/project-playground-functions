// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let maior = array[0];
  let repeticoes = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maior) {
      maior = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (maior === array[index]) {
      repeticoes += 1;
    }
  }
  return repeticoes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  function subtraction(a, b) {
    if (a > b) {
      return a - b;
    }
    return b - a;
  }
  if (subtraction(mouse, cat1) === subtraction(mouse, cat2)) {
    return 'os gatos trombam e o rato foge';
  }
  if (subtraction(mouse, cat1) < subtraction(mouse, cat2)) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let index of array) {
   let a = index % 3;
   let b = index % 5;
   if (a === 0 && b === 0) {
      result.push('fizzBuzz');
  }
  else if (a === 0) {
    result.push('fizz');
  }
  else if (b === 0) {
    result.push('buzz');
  }
  else {
    result.push('bug!');
  }
 }
 return result;
}

// Desafio 9
function encode(a) {
  let numbers = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  for (let index = 0; index < a.length; index += 1) {
    for (let keys in numbers) {
      if (a[index] === keys) {
        a = a.replace(a[index], numbers[keys]);
      }
    }
  }
  return a;
}
function decode(string) {
  let vowels = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  function decoding(a, b) {
    for (let index = 0; index < a.length; index += 1) {
      for (let keys in b) {
        if (a[index] === keys) {
          a = a.replace(a[index], b[keys]);
        }
      }
    }
    return a;
  }
  return decoding(string, vowels);
}

// Desafio 10
function techList(array, parson) {
  if (array.length === 0 || parson.length === 0) {
    return 'Vazio!';
  }
  array.sort();
  let result = [];
  for (let index of array) {
    result.push({ name: parson, tech: index });
  }
  return result;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
