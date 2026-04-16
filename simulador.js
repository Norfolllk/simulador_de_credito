//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

//Paso 3 - Funcion calcular 
function calcular() {
    //Paso 3 - parseFloat 
    let ingresos = parseFloat(document.getElementById("txtIngresos").value);
    let egresos = parseFloat(document.getElementById("txtEgresos").value);
    
    //Paso 3 - Mostar el valor en pantalla
    let disponible = calcularDisponible(ingresos, egresos);
    mostrarEnSpan("spnDisponible", disponible.toFixed(2));

    //Paso 5 - Mostrar la capacidad de pago en pantalla
    let capacidadPagoMensual = calcularCapacidadPago(disponible);
    mostrarEnSpan("spnCapacidadPago", capacidadPagoMensual.toFixed(2));

    //Paso 7 - Mostrar el resultado del credito en pantalla
    let monto = mostrarEnTxt("txtMonto");
    let plazo = mostrarEnTxt("txtPlazo");
    let tasa = mostrarEnTxt("txtTasaInteres");

    let interes = calcularInteresSimple(monto, tasa, plazo);
    mostrarEnSpan("spnInteresPagar", interes.toFixed(2));

    //Paso 9 - Mostrar el total a pagar en pantalla
    let totalPagar = calcularTotalPagar(monto, interes);
    mostrarEnSpan("spnTotalPrestamo", totalPagar.toFixed(2));

    //Paso 11 - Mostrar cuota mensual en pantalla
    let cuotaMensual = calcularCuotaMensual(totalPagar, plazo);
    mostrarEnSpan("spnCuotaMensual", cuotaMensual.toFixed(2));

    //Paso 13 - Mostrar el estado del credito en pantalla
    let estadoCredito = aprobarCredito(capacidadPagoMensual, cuotaMensual);
    mostrarEnSpan("spnEstadoCredito", estadoCredito);
}

function reiniciar() {
    document.getElementById("txtIngresos").value = "";
    document.getElementById("txtEgresos").value = "";
    document.getElementById("txtMonto").value = "";
    document.getElementById("txtPlazo").value = "";
    document.getElementById("txtTasaInteres").value = "";

    mostrarEnSpan("spnDisponible", "0.00");
    mostrarEnSpan("spnCapacidadPago", "0.00");
    mostrarEnSpan("spnInteresPagar", "0.00");
    mostrarEnSpan("spnTotalPrestamo", "0.00");
    mostrarEnSpan("spnCuotaMensual", "0.00");
    mostrarEnSpan("spnEstadoCredito", "ANALIZANDO...");
}