// ingresar los ingresos de la persona
const ingresos = document.getElementById("totalIngresos");
const ingresos_value = ingresos.value;

// ingresar los gastos de la persona
const serviciosBasicos = document.getElementById("serviciosBasicos");
const serviciosBasicos_value = serviciosBasicos.value;

const alquiler = document.getElementById("alquiler");
const alquiler_value = alquiler.value;

const alimentacion = document.getElementById("alimentacion");
const alimentacion_value = alimentacion.value;

const transporte = document.getElementById("transporte");
const transporte_value = transporte.value;

const deudasPrevias = document.getElementById("deudasPrevias");
const deudasPrevias_value = deudasPrevias.value;

const entretenimiento = document.getElementById("entretenimiento");
const entretenimiento_value = entretenimiento.value;

const vacaciones = document.getElementById("vacaciones");
const vacaciones_value = vacaciones.value;

const varios = document.getElementById("varios");
const varios_value = varios.value;

function calcularGastos() {
  const gastos =
    parseInt(serviciosBasicos.value) +
    parseInt(alquiler.value) +
    parseInt(alimentacion.value) +
    parseInt(transporte.value) +
    parseInt(deudasPrevias.value) +
    parseInt(entretenimiento.value) +
    parseInt(vacaciones.value) +
    parseInt(varios.value);
  return gastos;
}

/* La capacidad de endeudamiento esta recomendada 
entre el 35% y 40% de ingresos menos los gastos 
de una persona, con esta cifra se puede calcular: 
el monto del prestamo y el tiempo necesario para terminar
de pagarlo*/
function capacidadEndeudamiento() {
  const ingresos_value = ingresos.value;
  const gastos = calcularGastos();
  const capacidad_endeudamiento = (ingresos_value - gastos) * 0.4;
  document.getElementById("capacidadEndeudamiento").innerHTML =
    "Su capacidad de deuda es de: " + capacidad_endeudamiento + " $ por mes";
}

function limpiarFormulario() {
  document.getElementById("formulario").reset();
}
