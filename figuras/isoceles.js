console.group("Isocéles");

function triangule_validate(lado, base) {
  if (lado > base) {
    return true;
  } else {
    return false;
  }
}

function triangulo_altura(lado, base) {
  const h = Math.sqrt(lado * lado - (base * base) / 4);
  return h;
}

console.groupEnd();

function calculo_altura_triangulo() {
  const input_lado = document.getElementById("InputLadoTriangulo");
  const value_lado = input_lado.value;
  const input_base = document.getElementById("InputBaseTriangulo");
  const value_base = input_base.value;
  const validar = triangule_validate(value_lado, value_base);
  if (validar) {
    const altura = triangulo_altura(value_lado, value_base);
    alert(`La altura del triángulo es ${altura}`);
  } else {
    alert(`El triángulo no es Isocéles`);
  }
}
