//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
 
 // Paso 3 - Funcion Calcular
function calcular() {
    let ingresos = parseFloat(document.getElementById("txtIngresos").value);
    let egresos = parseFloat(document.getElementById("txtEgresos").value);
 
    let disponible = calcularDisponible(ingresos, egresos);
    const elemento = document.getElementById("spnDisponible");
    elemento.innerText = disponible;
    texto("spnDisponible", disponible);

    let capacidadPago = calcularCapacidadPago(disponible);
    const elemento2 = document.getElementById("spnCapacidadPago");
    elemento2.innerText = capacidadPago;
    texto("spnCapacidadPago", capacidadPago);
}