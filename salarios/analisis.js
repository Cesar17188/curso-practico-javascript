// Helpers o Utils

function esPar(numero) {
  return numero % 2 === 0;
}

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

//calculadora de mediana

// Mediana general

const salariosEcu = ecuador.map(function (persona) {
  return persona.salary;
});

const salariosEcuSorted = salariosEcu.sort(function (salarioA, salarioB) {
  return salarioA - salarioB;
});

function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const personaMitad1 = lista[mitad - 1];
    const personaMitad2 = lista[mitad];

    const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
    return mediana;
  } else {
    const personaMitad = lista[mitad];
    return personaMitad;
  }
}

const medianaGeneralEcu = medianaSalarios(salariosEcuSorted);

// Mediana del top 10%

const spliceStart = salariosEcuSorted.length * 0.9;
const spliceCount = salariosEcuSorted.length - spliceStart;

const salariosEcuTop10 = salariosEcuSorted.splice(spliceStart, spliceCount);

const medianaTop10Ecu = medianaSalarios(salariosEcuTop10);

console.log({
  medianaGeneralEcu,
  medianaTop10Ecu,
});
