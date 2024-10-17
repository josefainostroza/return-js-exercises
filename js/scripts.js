function sayHello(nombre) {
  return 'hola ' + nombre;
}

const msg = sayHello('josefa');
console.log(msg);

function calculateSquareArea(number) {
  const area = number * number;
  return area;
}

const squareArea = calculateSquareArea(5);
console.log(squareArea);

function calculateTriangleArea(numberA, numberB) {
  return (numberA * numberB) / 2;
}

const triangleArea = calculateSquareArea(8, 5);
console.log(triangleArea);
