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

function calculateCircleArea (number){
  return 2*3.14*number;
}

const circleArea = calculateCircleArea(3);
console.log(circleArea);

function celsiusToFahrenheit(number){
  return (number*1.8)+32;
}
const toFahrenheit = celsiusToFahrenheit(8);
console.log(toFahrenheit);

function fahrenheitToCelsius(number){
  return (number-32)/1.8;
}
const toCelsius = fahrenheitToCelsius(17);
console.log(toCelsius);

function totalPrice(price){
  return price + (price*0,21);
}
const price = totalPrice(100);
console.log(price);

function writeMessage (name,material,size,note){
  return name+' ha pedido una caja de '+material+' de tamaño '+size+'. ' +note;
}
const message = writeMessage('Lucas','cartón','small','Gracias por su compra');
console.log(message);

function nameYears(name,years){
  if (years>=18){
    return('Hola ' + name+', ' +'eres mayor de edad'); 
  }else{
return('Hola ' + name+', ' +'eres menor de edad');
  }
}
const yearsold = nameYears('Josefa',23);
console.log(yearsold);

function numberPrint(number){
if (number<0){
  return number+' es un número negativo'
}else if(number>0){
  return number+' es un número positivo'
}else{
  return number+' es cero'
}
}
const print = numberPrint(-3)
console.log(print)

function calification(numberA,numberB,numberC){
  const media=(numberA+numberB+numberC)/3
 if (media>0 && media<5){
  return 'Suspenso'
 } else if(media>5 && media<8){
  return 'Aprobado'
 }else{
  return 'Matrícula de honor'
 }
}
const grade =calification(10,5,10);
console.log(grade);

function largerNumber(numberA,numberB,numberC){
if (numberA>numberB && numberA>numberC){
  return numberA+ ' es mayor que '+numberB +' y '+numberC;
}
else if (numberB>numberA && numberB>numberC){
  return numberB+ ' es mayor que '+numberA +' y '+numberC;

}else(numberC>numberA && numberC>numberB){
  return numberC ' es mayor que '+numberA +' y '+numberB;
}
}
const graterNumber = largerNumber(5,2,8);
console.log(graterNumber);