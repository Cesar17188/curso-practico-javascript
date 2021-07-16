const cupones = [{ cupon1: 20 }, { cupon2: 25 }, { cupon3: 30 }];
console.log(Object.keys(cupones[2]));
console.log(Object(cupones[2]));
console.log(cupones[0].cupon1);

console.group("descuentos");

function calcularPrecioConDescuento(precio, descuento) {
  const precioConDescuento = precio - precio * (descuento / 100);
  return precioConDescuento;
}

console.groupEnd();

console.group("cupones");

function validarCuponDescuento(cupon) {
  switch (cupon) {
    case "cupon1":
      return cupones[0].cupon1;
      break;
    case "cupon2":
      return cupones[1].cupon2;
      break;
    case "cupon3":
      return cupones[2].cupon3;
  }
}

const cuponDescuento = validarCuponDescuento("cupon3");
console.log(cuponDescuento);

console.groupEnd();
