const lista1 = [100, 200, 500, 40, 100, 100, 200, 300, 400, 100, 200];

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

function calcularMediana(lista) {
  listaOrdenada = lista.sort(function (a, b) {
    return a - b;
  });

  const mitadLista = parseInt(listaOrdenada.length / 2);

  let mediana;

  if (esPar(listaOrdenada.length)) {
    const elemento1 = listaOrdenada[mitadLista - 1];
    const elemento2 = listaOrdenada[mitadLista];

    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

    mediana = promedioElemento1y2;
  } else {
    mediana = listaOrdenada[mitadLista];
  }

  return mediana;
}

function esPar(numerito) {
  if (numerito % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function calcularModa(lista) {
  const listaCount = {};

  lista.map(function (elemento) {
    if (listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  });

  const listaArray = Object.entries(listaCount).sort(function (
    elementoA,
    elementoB
  ) {
    return elementoA[1] - elementoB[1];
  });

  const moda = listaArray[listaArray.length - 1];

  return moda;
}

function calcularVarianza(lista) {
  const media = calcularMediaAritmetica(lista);

  const difCuadradoValorMedia = lista.reduce(function (
    valorAcumulado = 0,
    nuevoElemento
  ) {
    return valorAcumulado + Math.pow(nuevoElemento - media, 2);
  });

  const varianza = difCuadradoValorMedia / lista.length;

  return varianza;
}

function calcularDesviacionEstandar(lista) {
  const varianza = calcularVarianza(lista);
  const desvEst = Math.sqrt(varianza);
  return desvEst;
}

function calcularCoeficienteDeVariacion(lista) {
  const media = calcularMediaAritmetica(lista);
  const desEst = calcularDesviacionEstandar(lista);

  const coefVar = (desEst / media) * 100;

  return coefVar;
}
