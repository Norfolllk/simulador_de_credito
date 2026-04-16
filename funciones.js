//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO

//Paso 2 - Calcula el valor disponible 
function calcularDisponible(ingresos, egresos) {
    let disponible = ingresos - egresos;
    if (disponible < 0) {
        disponible = 0;
    }
    return disponible;
}

//Funcion para mostrar el texto/resultao en pantalla
function mostrarEnSpan(idSpan, valor) {
    let componente = document.getElementById(idSpan);
    componente.textContent = valor;
}
 
function mostrarEnTxt(idTxt) {
    let componente = document.getElementById(idTxt);
    return componente.value;
}

//Paso 4 - Calcula la capacidad de pago
function calcularCapacidadPago(montoDisponible) {
    let capacidadPago = montoDisponible / 2;
    return capacidadPago;
}

//Paso 6 - Calcula el valor del interes 
function calcularInteresSimple(monto, tasa, plazoAnios) {
    let interes = monto * (tasa / 100) * plazoAnios;
    return interes;
}

//Paso 8 - Calcular el total a pagar
function calcularTotalPagar(monto, interes) {
    const SOLCA = 100;
    let totalPagar = parseFloat(monto) + parseFloat(interes) + SOLCA;
    return totalPagar;
}

//Paso 10 - Calcular las cuatas mensuales
function calcularCuotaMensual(total, plazoAnios) {
    let plazoMeses = plazoAnios * 12;
    let cuotaMensual = total / plazoMeses;
    return cuotaMensual;
}

//Paso 12 - Aprobar o rechazar el credito
function aprobarCredito(capacidadPago, cuotaMensual) {
    if (capacidadPago >= cuotaMensual) {
        return "CREDITO APROBADO";
    } else {
        return "CREDITO RECHAZADO";
    }
 
}