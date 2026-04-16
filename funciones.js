//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO

//Paso 2 - Calcular Disponible
function calcularDisponible(ingresos, egresos){
    let disponible = ingresos - egresos;
    if(disponible < 0){
        disponible = 0;
    }
    return disponible;
}

//Paso 4 - Función calcularCapacidadPago 
function calcularCapacidadDePago(montoDisponible){
  let capacidadDePago = montoDisponible / 2 ;
  return capacidadDePago;
}

function texto(id,var1){
  let texto1 = document.getElementById(id);
  texto1.innerText = var1.toFixed(2);
}