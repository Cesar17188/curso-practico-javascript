const cupones = ["JuanDC_es_Batman", "pero_no_digas_a_nadie", "es_un_secreto"];
console.group("descuentos");

function calcularPrecioConDescuento(precio, descuento) {
  const precioConDescuento = precio - precio * (descuento / 100);
  return precioConDescuento;
}

const precioPCDescuento = calcularPrecioConDescuento(900, 15);

function sendDescuento() {
  const desc = precioPCDescuento;
  const ahorro = 900 - desc;
  document.getElementById("total_ahorro").innerHTML = ahorro;
  document.getElementById("num_desc").innerHTML = desc;
}

console.groupEnd();

console.group("cupones");

function validarCuponDescuento(cupon) {
  switch (cupon) {
    case "JuanDC_es_Batman":
      return 15;
      break;
    case "pero_no_le_digas_a_nadie":
      return 30;
      break;
    case "es_un_secreto":
      return 25;
      break;
  }
}

function calcular_descuento() {
  const descuento = document.getElementById("calc_desc").value;
  const porcentajeDescuento = validarCuponDescuento(descuento);
  const desc = calcularPrecioConDescuento(900, porcentajeDescuento);
  const ahorro = 900 - desc;
  document.getElementById("total_ahorro_cupon").innerHTML = ahorro;
  document.getElementById("num_desc_cupon").innerHTML = desc;
}

const cuponDescuento = validarCuponDescuento("cupon3");

function tipoDescuento() {
  let eleccion = document.querySelector(
    'input[name="descuentos"]:checked'
  ).value;
  console.log(eleccion);
  sendDescuento();
  habilitarDescuento(eleccion);
}

function habilitarDescuento(eleccion) {
  if (eleccion === "1") {
    document.getElementById("descuento_normal").style.display = "block";
    document.getElementById("descuento_cupon").style.display = "none";
  } else {
    document.getElementById("descuento_normal").style.display = "none";
    document.getElementById("descuento_cupon").style.display = "block";
  }
}

console.groupEnd();
