// Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.groupEnd();

// Código del círculo
console.group("Círculos");

//Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

//Pi
const PI = Math.PI;

//Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

//Área
function areaCirculo(radio) {
  return PI * Math.pow(radio, 2);
}

console.groupEnd();

// Funciones de interacción con HTML

// Cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(`El perímetro del cuadrado es ${perimetro}`);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  alert(`El área del cuadrado es ${area}`);
}

// Triangulo
function calcularPerimetroTriangulo() {
  const input_1 = document.getElementById("InputTriangulo1");
  const value_1 = parseInt(input_1.value);
  const input_2 = document.getElementById("InputTriangulo2");
  const value_2 = parseInt(input_2.value);
  const base = document.getElementById("InputTrianguloBase");
  const value_base = parseInt(base.value);

  const perimetro = perimetroTriangulo(value_1, value_2, value_base);
  alert(`El perímetro del triangulo es: ${perimetro}`);
}

function calcularAreaTriangulo() {
  const base = document.getElementById("InputTrianguloBase");
  const value_base = base.value;
  const altura = document.getElementById("InputTrianguloAltura");
  const value_altura = altura.value;

  const area = areaTriangulo(value_base, value_altura);
  alert(`El área del triangulo es: ${area}`);
}

// Círculo
function calcularPerimetroCirculo() {
  const input = document.getElementById("InputRadio");
  const value = input.value;
  const perimetro = perimetroCirculo(value);
  alert(`El perímetro del círculo es ${perimetro}`);
}

function calcularAreaCirculo() {
  const input = document.getElementById("InputRadio");
  const value = input.value;
  const area = areaCirculo(value);
  alert(`El área del círculo es ${area}`);
}
