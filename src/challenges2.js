// Desafio 11
function counter(index, array) {
  let repititions = 0;
  for (let indexTwo of array) {
    if (index === indexTwo) {
      repititions += 1;
    }
  }
  return repititions;
}

function repiterNumbers(array) {
  let value;
  for (let index of array) {
    value = counter(index, array);
  }
  if (value === 3) {
    return true;
  }
}

function valorInvalido(array) {
  for (let index of array) {
    if (index < 0 || index > 9) {
      return true;
    }
  }
}

function generatePhoneNumber(array) {
  let n = array;
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (valorInvalido(array) === true || repiterNumbers(array) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${n[0]}${n[1]}) ${n[2]}${n[3]}${n[4]}${n[5]}${n[6]}-${n[7]}${n[8]}${n[9]}${n[10]}`;
}

// Desafio 12npm
function sumOfSides(sides) {
  const sumAB = sides[0] + sides[1];
  const sumBC = sides[1] + sides[2];
  const sumAC = sides[0] + sides[2];
  return [sumAB, sumBC, sumAC];
}

function sumCheck(sides) {
  const sums = sumOfSides(sides);
  for (let index of sums) {
    for (let indexTwo of sides) {
      if (index < indexTwo) {
        return true;
      }
    }
  }
}

function subtractionOfSides(sides) {
  const subtractionAB = sides[0] - sides[1];
  const subtractionBC = sides[1] - sides[2];
  const subtractionAC = sides[0] - sides[2];
  return [subtractionAB, subtractionBC, subtractionAC];
}

function absoluteValueCalculate(sides) {
  const subtractions = subtractionOfSides(sides);
  const lineA = Math.abs(subtractions[0]);
  const lineB = Math.abs(subtractions[1]);
  const lineC = Math.abs(subtractions[2]);
  return [lineA, lineB, lineC];
}

function absoluteValueCheck(sides) {
  const values = absoluteValueCalculate(sides);
  for (let index of values) {
    for (let indexTwo of sides) {
      if (index > indexTwo) {
        return true;
      }
    }
  }
}

function triangleCheck(lineA, lineB, lineC) {
  const sides = [lineA, lineB, lineC];
  if (sumCheck(sides) === true || absoluteValueCheck(sides) === true) {
    return false;
  }
  return true;
}

// Desafio 13
function numberSelector(string) {
  const numbers = string.replace(/\D/g, '');
  const values = numbers.split('');
  return values;
}

function sumCups(string) {
  const values = numberSelector(string);
  let result = 0;
  for (let index of values) {
    result += parseInt(index, 10);
  }
  return result;
}
sumCups('1 cachaça, 5 cervejas e 1 copo de vinho');

function hydrate(string) {
  const cupsNumbers = sumCups(string);
  if (cupsNumbers === 1) {
    return `${cupsNumbers} copo de água`;
  }
  return `${cupsNumbers} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
