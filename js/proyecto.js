inicializar()

function inicializar(){
    ocultarPantallas();
    precargarDatos();
    document.querySelector("#divBienvenida").style.display = "block";
    agregarEventosEnMenu();
    agregarEventosBtnCrearContraseña()
    funcionEventoBotones()
    
}


                                  
////////////////////////////////////////      ********EVENTOS DE MENU**********     /////////////////////////////////////////////////


function agregarEventosEnMenu(){

    document.querySelector("#btnIniciarSesionContraseñaCreada").addEventListener("click", menuBienvenidaHandler);
    document.querySelector("#btnCerrarSesionUsuario").addEventListener("click",menuBienvenidaHandler);
    document.querySelector("#btnCerrarSesionLocales").addEventListener("click",menuBienvenidaHandler);
    document.querySelector("#btnCrearContraseñaVolver").addEventListener("click",menuBienvenidaHandler);
    document.querySelector("#btnIniciarSesionPerilCreado").addEventListener("click",menuBienvenidaHandler);

   
   // por ahora para que ni ingrese. document.querySelector("#btnLogInTiendas").addEventListener("click", menuLocalesHandler);
    document.querySelector("#btncambiarContraseñaUsuario").addEventListener("click", menuCambioDeContraseñaHandler);   
    document.querySelector("#btnCrearPerfil").addEventListener("click", menuCrearPerfilHandler);
    document.querySelector("#btnCrearPerfil").addEventListener("click", menuRegistroUsuarioHandler);
    document.querySelector("#btnVovlerDsdRererva").addEventListener("click", menuUsuariosHandler);

    



}
                    //////////////////////////////////////////////////////////////////////////////
//////////////////////////////////     FUNCIONES PARA MOSTRAR-OCULTAR PANTALLA        /////////////////////////////////
                    ////////////////////////////////////////////////////////////////////////////
function menuBienvenidaHandler() {
    ocultarPantallas();
    document.querySelector("#divBienvenida").style.display = "block";
}

function menuUsuariosHandler() {
    ocultarPantallas();
    document.querySelector("#divMenuUsuario").style.display = "block";
}

function menuLocalesHandler() {
    ocultarPantallas();
    document.querySelector("#divMenuLocales").style.display = "block";
}

function menuCambioDeContraseñaHandler() {
    ocultarPantallas();
    document.querySelector("#divCambiarContaseña").style.display = "block";
}

function menuCrearPerfilHandler() {
    ocultarPantallas();
    document.querySelector("#divCrearPerfil").style.display = "block";
}

function menuContraseñaCreadaHandler() {
    ocultarPantallas();
    document.querySelector("#divContrseñaCreadaConExito").style.display = "block";
}

function menuPerfilCreadoHandler() {
    ocultarPantallas();
    document.querySelector("#divPerfilCreadoConExito").style.display = "block";
}

function menuRegistroUsuarioHandler() {
    ocultarPantallas();
    document.querySelector("#divRegistrarse").style.display = "block";
}
function menuReservaExitosoHandler() {
    ocultarPantallas();
    document.querySelector("#divReserva").style.display = "block";
}



function ocultarPantallas() {

    document.querySelector("#divBienvenida").style.display = "none";

    document.querySelector("#divMenuUsuario").style.display = "none";

    document.querySelector("#divMenuLocales").style.display = "none";

    document.querySelector("#divReserva").style.display = "none";

    document.querySelector("#divContrseñaCreadaConExito").style.display = "none"

    document.querySelector("#divCambiarContaseña").style.display = "none"

    document.querySelector("#divRegistrarse").style.display = "none"

    document.querySelector("#divPerfilCreadoConExito").style.display = "none"
    
    document.querySelector("#idDivTablaReservasFinalizadas").style.display = "none"
    
    document.querySelector("#idListadoDeReservasPendientes").style.display = "none"

    document.querySelector("#idDatosEstadisticosUsuario").style.display = "none"

    
} 



///Funcion evento botones en general
function funcionEventoBotones(){


    document.querySelector("#btnRegistrarse").addEventListener("click", registro); //Boton resgistro

    document.querySelector("#btnReservaUsu1").addEventListener("click", hacerReserva);

    

    document.querySelector("#btListaReservasPendientes").addEventListener("click", verListaDeReservasPendientes);

    document.querySelector("#btnVerDatosEstadisticosUsuario").addEventListener("click", tablaEstadisticaUsuario);

    document.querySelector("#btnVerLocalPreferido").addEventListener("click", localPreferido);

    document.querySelector("#btnCalificarReservasFinalizadasUsuario").addEventListener("click", verListaDeReservas);

    document.querySelector("#btnBuscarReservasPorNobre").addEventListener("click", buscar);

    document.querySelector("#btnEditarCupoMax").addEventListener("click", agregarCapacidadManual);
    
    document.querySelector("#btListaReservasPendientesLocal").addEventListener("click", listaDeReservas);

    document.querySelector("#btnPorcentajeOcupacionLocal").addEventListener("click", porcentajeDeOcupacionDelLocal);

    document.querySelector("#btnReservasPendientesTotal").addEventListener("click", mostrarReservasPendientes);
    
    document.querySelector("#btnReservasFinalizadas").addEventListener("click", mostrarReservasFinalizadas);

  
}
//Evento de boton para validar contraseña

function agregarEventosBtnCrearContraseña(){
   
    document.querySelector("#btnCambiarContraseña").addEventListener("click", cambiarContraseña);

  
    document.querySelector("#btnIniciarSesion").addEventListener("click", botonIngresarUsuario);// iniciar sesion como cliente
    document.querySelector("#btnLogInTiendas").addEventListener("click", botonIngresarLocal);//iniciar sesion como tienda

}


////////////////////////////////         VALIDACION CONTRASEÑA         ////////////////////////////

function validacionContraseñaLogIn (){
    let resultado
    let texto = document.querySelector("#inputPassword").value;
    resultado = validacionContraseña(texto)
    let validacion
        if(resultado == true){
           validacion=true
        }
        else
        {
         validacion=false
          }

    return validacion

}


//FUNCION BUCARDOR LOCALES

function buscadorLocal(){
   let palabra= document.querySelector("#inputBuscarLocal").value;
    let arrayLocalesPosibles =[];
   for(let i=0; i<localesArray.length; i++){
    let localActual=[]
    nomLocal=localActual.nombreLocal
        if(subca(palabra,nomLocal)==true){
            arrayLocalesPosibles.push(localActual.nombreLocal);
        }   
      }
      document.querySelector("#divResultadoBusqueda").innerHTML = arrayLocalesPosibles;  
}

//Validacion al cambiar contraseña
function cambiarContraseña (){
    let resultado
    let texto = document.querySelector("#inputCrearContraseña").value;
    resultado = validacionContraseña(texto)
        if(resultado == true){
            menuContraseñaCreadaHandler();
        }
        else
        {
            mensaje = "Contraseña no valida"+" "+"La contraseña deberá contener por lo menos: 6 dígitos, una letra mayúscula, una letra mayúscula, una minúscula, un número" 
                 document.querySelector("#pRespuestaContraseña").innerHTML = mensaje
          }
}


//Validacion al crear contraseña 

function registrarseValidacion (){
    let resultado
    let texto = document.querySelector("#contraseñaregistro").value;
    resultado = validacionContraseña(texto)
        if(resultado == true){
            menuContraseñaCreadaHandler();
        }
        else
        {
            mensaje = "Contraseña no valida"+" "+"La contraseña deberá contener por lo menos: 6 dígitos, una letra mayúscula, una letra mayúscula, una minúscula, un número" 
                 document.querySelector("#resultadoRegistro").innerHTML = mensaje
          }
}


///VALIDACION CONTRASEÑA GENERICO

function validacionContraseña (textIngresado){
    
    let tieneMay = tieneMayuscula(textIngresado)
    let tieneMin = tieneMinuscula(textIngresado)
    let textoconnum = tieneNum(textIngresado)
    let cantidadDigitos = minimoSeisDigito(textIngresado) //tiene que tener 6 o mas
    let mensaje = ""
    if (tieneMay==true && textoconnum==true && tieneMin==true && cantidadDigitos == true){
        mensaje= true
    }else {mensaje= false}
   return mensaje
}

function tieneMayuscula (texto){
    let textosinN = textoSinNumeros(texto)
    let caracter = ""
    let mensaje = ""
    let textoSinEspacios = ""
    let contadorMay = 0
    for (i= 0; i <textosinN.length; i++){
        caracter = textosinN[i]
        if (caracter != " "){
            textoSinEspacios += caracter
        }
    }
    for(i=0; i<textoSinEspacios.length; i++){   
        caracter= textoSinEspacios[i];
        carMay=caracter.toUpperCase()
        if (caracter==carMay) {
            contadorMay++
        }      
}   if(contadorMay>0){
    mensaje= true
} else (mensaje= false)
    return mensaje
}

function tieneMinuscula (texto){
    let textosinN = textoSinNumeros(texto)
    let caracter = ""
    let mensaje = ""
    let textoSinEspacios = ""
    let contadorMin = 0
    for (i= 0; i <textosinN.length; i++){
        caracter = textosinN[i]
        if (caracter != " "){
            textoSinEspacios += caracter
        }
    }
    for(i=0; i<textoSinEspacios.length; i++){   
        caracter= textoSinEspacios[i];
        carMin=caracter.toLowerCase()
        if (caracter==carMin) {
            contadorMin++
        }      
}   if(contadorMin>0){
    mensaje= true
} else (mensaje= false)
    return mensaje
}

function tieneNum(texto){
    let caracter = ""
    let mensaje = ""
    let textoSinEspacios = ""
    let contadorNum = 0
    for (i= 0; i <texto.length; i++){
        caracter = texto[i]
        if (caracter != " "){
            textoSinEspacios += caracter
        }
    }
    for(i=0; i<textoSinEspacios.length; i++){
        caracter= textoSinEspacios[i];
        if (caracter=="0"|| caracter=="1" || caracter=="2" || caracter=="3" || caracter=="4" || caracter=="5" || caracter=="6" || caracter=="7" || caracter=="8" || caracter=="9" ) {
            contadorNum++
        }
}
    if(contadorNum>0){
        mensaje= true
}       else (mensaje= false)
    return mensaje
}

function textoSinNumeros(texto){
    let nuevoTexto=""
    let textoNumerico="0123456789"


for(let i=0; i<=texto.length-1; i++){
    let letra=texto[i]
    let contador=0
    
    for(let j=0; j<=textoNumerico.length-1; j++)  {
       
        
            if(textoNumerico[j]==letra){
                contador++

            }
            else{contador=contador}
            
    }
    if (contador==1){
        nuevoTexto=nuevoTexto
    }
    else{nuevoTexto= nuevoTexto + texto[i]
    }
}
return nuevoTexto
}

function minimoSeisDigito (texto){
    let resultado
    if(texto.length>=6){
        resultado = true
    }
    else{
        resultado=false;
    }
return resultado

}





                        ////////////////////////////////////////////////////
//////////////////////////////////     PRECARGA DE DATOS       //////////////////////////////////////
                        ///////////////////////////////////////////////////

function precargarDatos (){
    precargarUsuarios()
}

function precargarUsuarios (){
    precargaLocales()
    precargaclientes()
    precargaReservas()
}

function precargaLocales (){
    ingresarLocales ("Restauran La Fio", "Fiorella12", 18, 30)
    ingresarLocales ("Restauran Varelita", "Varelita1", 34, 40)
    ingresarLocales ("Museo del Pino", "Pino12", 200, 200)
    ingresarLocales ("Restauran Rincon", "Rincon12", 30, 30)
    ingresarLocales ("Teatro lo de Toto y Ado", "AdoyToto12", 34, 40)
    ingresarLocales ("Mariola Teatro", "Mariola12", 50, 50)
    ingresarLocales ("Museo Alvez", "Alvez12", 100, 100)


}

function precargaclientes (){
    ingresarClientes ("yohan", "Yohan1", null)
    ingresarClientes ("rodrigo", "Rodri1", null)
    ingresarClientes ("mariana", "Mari1", null)
    ingresarClientes ("valentin", "Vale1", null)
    ingresarClientes ("jesus", "Jesus1", null)
    ingresarClientes ("mauro", "Mau1", null)
    ingresarClientes ("inti", "Inti1", null)
   
}

function precargaReservas (){
    ingresarReservas ("yohan", 6,"Restauran La Fio","pendiente",null)
    ingresarReservas ("rodrigo", 6,"Restauran La Fio", "pendiente",null)
    ingresarReservas ("valentin", 3,"Restauran Varelita","pendiente",null) 
    ingresarReservas ("inti", 6,"Restauran La Fio","cancelada",null)
    ingresarReservas ("rodrigo", 6,"Teatro lo de Toto y Ado", "finalizado",null)
    ingresarReservas ("yohan", 3,"Restauran Varelita","finalizado",null) 
    ingresarReservas ("mauro", 6,"Teatro lo de Toto y Ado", "pendiente",null)
    ingresarReservas ("mauro", 3,"Restauran Varelita","pendiente",null) 
}

function ingresarLocales(usu,pass,cant,capTotal){
    let nuevoUsuario = new Locales(usu,pass,cant,capTotal)
    localesArray.push(nuevoUsuario)
}

function ingresarClientes(usu,pass,reser){
    let nuevoUsuario = new Clientes(usu,pass,reser)
    clientesArray.push(nuevoUsuario)
}

function ingresarReservas(usu,cant,loc,estado,calif){
    let nuevaReserva = new Reservas(usu,cant,loc, estado,calif)
    reservasArray.push(nuevaReserva)
}




//////iniciar sesion como tienda
function botonIngresarLocal (){
    let mensaje = ""
    let usuarioIngresado = document.querySelector("#inputUserName").value
    let contraseñaIngresada = document.querySelector("#inputPassword").value
    let contraseñaValida = validacionContraseñaLogIn(contraseñaIngresada);
    let encontroLocal = buscarUsuarioPorNombre(localesArray, usuarioIngresado);

     if (encontroLocal != null){
        let contraseñaCorrectaLocal = encontroLocal.contraseñaLocal == contraseñaIngresada;

        if (contraseñaCorrectaLocal == true && contraseñaValida ==true) {
            menuLocalesHandler()// enviar a menu local
        } 
        else {
             mensaje = "contraseña incorrecta"
             document.querySelector("#respuestaInicio").innerHTML = mensaje
        }
    }

    else {
            mensaje = "el usuario no existe"
            document.querySelector("#respuestaInicio").innerHTML = mensaje
        }
}
//////iniciar sesion como Cliente
function botonIngresarUsuario (){
    let mensaje = ""
    let usuarioIngresado = document.querySelector("#inputUserName").value
    let contraseñaIngresada = document.querySelector("#inputPassword").value
    let contraseñaValida = validacionContraseñaLogIn(contraseñaIngresada);
    let encontroCliente = buscarUsuarioPorNombre(clientesArray, usuarioIngresado);

    if(encontroCliente != null){
        let contraseñaCorrectaUsuario = encontroCliente.contraseñaUsuario == contraseñaIngresada;
        if (contraseñaCorrectaUsuario == true && contraseñaValida ==true) {
            menuUsuariosHandler()//enviar a menu usuario

        } else {
            mensaje = "contraseña incorrecta"
            document.querySelector("#respuestaInicio").innerHTML = mensaje
              }

    } 
    else { 
    mensaje = "el usuario no existe"
    document.querySelector("#respuestaInicio").innerHTML = mensaje
    }
}

function buscarUsuarioPorNombre (array, nombreUsu){
    let resultado = null
    let i = 0;
    while (resultado == null && i <array.length){
        let usuarioActual = array[i];
        if (usuarioActual.nombreLocal == nombreUsu) {
            resultado = usuarioActual
        } else if (usuarioActual.nombreUsuario == nombreUsu) {
            resultado = usuarioActual
        }
        else if (usuarioActual.nombreCliente==nombreUsu){
            resultado=usuarioActual
        }
        i++;
    }
    return resultado

}



                                                             /////////////////////////////////////////////////////////////////////
                                    ////////////////////////////////////          REGISTRO               //////////////////////////////
                                                             ////////////////////////////////////////////////////////////////////

// Le pasas los dos paramentros, el nombre lo pase por la funcion de buscarUsuario y ahi busca el nombre en el array de los clientes y en el de locales. Si es igual a uno de los dos te va a decir que ya existe el usuario. Si no ingresa contrasena, te dice que ingreses una, y si no encuentra el nombre en ninguno de los dos arrays y ingresa una contrase;a te registra.
function registro (){
    let mensaje = ""
    let usuarioIngresado = document.querySelector("#nombreregistro").value
    let contraseñaIngresada = document.querySelector("#contraseñaregistro").value
    let encontroCliente = buscarUsuarioPorNombre(clientesArray, usuarioIngresado);
    let encontroLocal = buscarUsuarioPorNombre(localesArray, usuarioIngresado); 
    let validacion = validacionContraseña(contraseñaIngresada)

    if (encontroCliente || encontroLocal){
        mensaje = "el usuario ya existe, elija otro"
        document.querySelector("#resultadoRegistro").innerHTML = mensaje
    }
     else if (contraseñaIngresada == "") { 
        mensaje = "debe ingresar una contraseña"
        document.querySelector("#resultadoRegistro").innerHTML = mensaje
    }
    else if(validacion==false){
        registrarseValidacion(contraseñaregistro)
    }
    
    else {ingresarClientes(usuarioIngresado, contraseñaIngresada)
        menuPerfilCreadoHandler()
        }
   
}




                                                               /////////////////////////////////////////////////////////
                           //////////////////////////////////////////////     /RESSERVAS/            ///////////////////////
                                                            //////////////////////////////////////////////////////
function AgregarCapacidadLocal (array,nombreCliente){
    let reservaDeUsuario = buscarUsuarioPorNombre(reservasArray,nombreCliente)
    let nombreDelLocalDondeEstaReserva = reservaDeUsuario.nombreReservaLocal
    let cantidadDePersonasDeReserva = reservaDeUsuario.cantidadDePersonas
    
    for(i=0; i<array.length; i++){
        let localActual = array[i]
        if (localActual.nombreLocal == nombreDelLocalDondeEstaReserva){
            localActual.capacidad += cantidadDePersonasDeReserva 
            
        } 
    }
    
}

function capacidadDisponibleLocal (array, nomLocal, capacidadLocal){
    let tieneCapacidad = false
    let i = 0;
    while(i<array.length && tieneCapacidad==false){
        let localActual = array[i]
        if (localActual.nombreLocal == nomLocal && localActual.capacidad >= capacidadLocal){
            localActual.capacidad -= capacidadLocal
            tieneCapacidad = true
        } else {
            tieneCapacidad = false }
            i++
    }
    return tieneCapacidad
}

// esta funcion toma como variable nombre local, nombre cliente y cantidad de personas. Ademas verifica que el usuario tenga reservas pendientes y que el local tenga la capacidad para tomar la reserva.
function hacerReserva (){
    let nombreLocal = document.querySelector("#selectLocales").value;
    let nombreCliente = document.querySelector("#inputUserName").value;
    let cantidadPersonas = parseInt( document.querySelector("#inputCantidadDePersonas").value);
    let estadoDeReserva = buscarEstadoReserva (reservasArray, nombreCliente, nombreLocal)
    let reservaRepetida =  buscarReservaDeUsuario(reservasArray, nombreCliente,nombreLocal)
    let tieneCapacidad = capacidadDisponibleLocal(localesArray, nombreLocal,cantidadPersonas)
    
    let mensaje = "";

    if (reservaRepetida != null && estadoDeReserva == true){

        mensaje = "Usted ya realizo una reserva en este local"
        document.querySelector("#respuestaNegativaDeReserva").innerHTML = mensaje
        AgregarCapacidadLocal(localesArray,nombreCliente)
    } 
    else if (reservaRepetida == null && tieneCapacidad == true){
        let reservaEstado = "pendiente"
        ingresarReservas(nombreCliente,cantidadPersonas, nombreLocal, reservaEstado)
        menuReservaExitosoHandler()
        mensaje = "Su reserva ha sido efectuada con exito"
        document.querySelector("#divCupoDisponible").innerHTML = mensaje
    }
    
    else {
     mensaje = "el local no tiene disponibilidad en este momento"
         
         document.querySelector("#respuestaNegativaDeReserva").innerHTML = mensaje
    }
}

function buscarReservaDeUsuario (array, nombreUsu, nombreLoc){
    let resultado = null
    let i = 0;
    while (resultado == null && i <array.length){
        let usuarioActual = array[i];
        if (usuarioActual.nombreCliente == nombreUsu && usuarioActual.local == nombreLoc && usuarioActual.estado=="pendiente") {
            resultado = true
        } 
        i++;
    }
    return resultado
}

function buscarEstadoReserva (array, nombreUsu, nombreLoc){
    let resultado = null
    let i = 0;
    while (resultado == null && i <array.length){
        let usuarioActual = array[i];
        if (usuarioActual.nombreCliente == nombreUsu && usuarioActual.local == nombreLoc && usuarioActual.estado=="pendiente") {
            resultado = true;
        } 
        i++;
    }
    return resultado
}



                                         ////////////////////////////////////////////////////////////////
                        //////////////////////  LISTA RESERVAS PENDIENTES  MENU USUARIO   /////////////////////////////////
                                        /////////////////////////////////////////////////////////
                                    
function verListaDeReservasPendientes(){
    document.querySelector("#idListadoDeReservasPendientes").style.display = "block";

   let nombreCliente = document.querySelector("#inputUserName").value;
   let bodyHTML=  '';
   for(let i=0; i<reservasArray.length; i++){
        let reservaActual = reservasArray[i]
        if(nombreCliente==reservaActual.nombreCliente && reservaActual.estado == "pendiente") {
            
            bodyHTML += `
            <tr>
                <td>
                    ${reservaActual.local}
                </td>
                <td>
                     ${reservaActual.cantidadDePersonas}
                </td>
                <td>
                    <input  type="button" value="cancelar" data-usuario="${reservaActual.idReserva}" class="btnCancelarReserva">
                </td>
            </tr>
             `;
        }
    }
   
   
    document.querySelector("#bodyTablaReservasPendientes").innerHTML = bodyHTML;

    let arrayDeBotones = document.querySelectorAll(".btnCancelarReserva");

    for (let i = 0; i < arrayDeBotones.length; i++) {
      let botonActual = arrayDeBotones[i];
       botonActual.addEventListener("click", cancelarReserva);
    }
}

                        /////////////////////////////////////////////////////////////////////////
////////////////////////////////            /CALIFICAR RESERVAS/                            ////////////////////////////////
                        ////////////////////////////////////////////////////////////////////////

function buscarReservaPorUsuario(array, nomUsu) {
    let resultado = null;
    let i = 0;
    while (resultado == null && i < array.length) {

        let usuarioActual = array[i];

            if (usuarioActual.nombreCliente == nomUsu) {
                resultado = usuarioActual.local;
            }
        i++;
    }
    return resultado;
}


function buscarReservaPendientePorNombre (array, nombreUsu){//Cambia el estado de pendiente a finalizado
    let resultado = null
    let i = 0;
    while (resultado == null && i <array.length){
        let usuarioActual = array[i];
        if (usuarioActual.nombreCliente == nombreUsu && usuarioActual.estado == "pendiente") {
            resultado = usuarioActual
        }
        i++;
    }
    return resultado

} 


function verListaDeReservas(){
    document.querySelector("#idDivTablaReservasFinalizadas").style.display = "block";

   let nombreCliente = document.querySelector("#inputUserName").value;
   let bodyHTML = '';

   for(let i=0; i<reservasArray.length; i++){
        let reservaActual = reservasArray[i]
        if(nombreCliente==reservaActual.nombreCliente && reservaActual.estado == "finalizado") {

            bodyHTML += `
            <tr>
                <td>
                    ${reservaActual.local}
                </td>
                <td>
                    <input type="number" id="inputCalificacion" > 
                </td>
                <td>
                    <input  type="button" value="ingresar" data-usuarioCalif="${reservaActual.local}" class="btnCalificarReserva">
                </td>
            </tr>
             `;
        }
    }
   
    document.querySelector("#bodyTablaGestionUsuarios").innerHTML = bodyHTML;

    let arrayDeBotones = document.querySelectorAll(".btnCalificarReserva");
    for (let i = 0; i < arrayDeBotones.length; i++) {
      let botonActual = arrayDeBotones[i];
       botonActual.addEventListener("click", btnAgregarCalificacionEnArray);
    }
}

function btnAgregarCalificacionEnArray() {
    // Obtengo el valor del atributo data-usuario que tiene el botón que disparó el evento (click)
    
     let calificacionRes = parseInt(document.querySelector("#inputCalificacion").value);
 
     let nombreCliente = document.querySelector("#inputUserName").value;//poner id contable
 
     
     let nombreLocal = this.getAttribute("data-usuarioCalif")
    for(let i=0; i<reservasArray.length; i++){
         let reservaAct = reservasArray[i];
         if (reservaAct.nombreCliente == nombreCliente && reservaAct.local==nombreLocal){
            reservaAct.calificacion=calificacionRes
         }
    }
 }
 
 
 

//////Cancelar reserva///
function cancelarReserva(){

    let idRes = parseInt(this.getAttribute("data-usuario"))
   
    for(let i=0; i<reservasArray.length; i++){
        let reservaDeUsuario = reservasArray[i];
        if (reservaDeUsuario.idReserva == idRes && reservaDeUsuario.estado == "pendiente")
                       
                reservaDeUsuario.estado = "cancelado"
               let nombreCliente = reservaDeUsuario.nombreCliente 
                 AgregarCapacidadLocal(localesArray,nombreCliente)
        
    } 
   
}




                            //////////////////////////////////////////////////////////////////////////////////////////////
                //////////////////////          ESTADISTICA DE CLIENTE           ////////////////////////////
                                //////////////////////////////////////////////////////////



///////Funciones auxiliares

function porcentaje (ocupado, total){//porcentaje de ocupacion
    let porcentaje = (ocupado*100)/total;
    return porcentaje
}

function promedio (array){
    let total=0
    let promedio=0

    for(let i=0; i<array.length; i++){
        let calificacion = array[i];
         total+= calificacion
    }

    promedio=total/array.length
    return promedio
}

function cantidadDeReservasFinUsuPorLocal(array,usu,local){ ///Usar para local preferido
    let contador=0;
        for(let i=0; i<array.length; i++){
            let reservaAct = array[i]

            if( reservaAct.nombreCliente == usu && reservaAct.local == local && reservaAct.estado == "finalizado"  ){
                contador++
            }
        }
        return contador 
}

function totalReservasPorLocal (reservasArray, local){
    let contador=0

    for(let i=0; i<reservasArray.length; i++){

        let reservaActual= reservasArray[i]
        if(reservaActual.local==local){
            contador++
        }
    }
    return contador
}

function tablaEstadisticaUsuario (){
    document.querySelector("#idDatosEstadisticosUsuario").style.display = "block"

    let nombreCliente = document.querySelector("#inputUserName").value;
    let bodyHTML=  '';

    for(let i=0; i<localesArray.length; i++){

        let reservaActual =  localesArray[i];

        let localActual = reservaActual.nombreLocal;
        let cantidadDeReservasFin = cantidadDeReservasFinUsuPorLocal(reservasArray,nombreCliente,localActual); //cantidad de reservas finalizadas por el usuario en este local.
        let totalResPorLocal = totalReservasPorLocal(reservasArray, reservaActual.nombreLocal); //Cantidad total de reservas de un local independientemente de su estado.
        let porsentajeDelUsuEnLocal = porcentaje (cantidadDeReservasFin, totalResPorLocal); //Porcentaje del usuario en el total de las reservas que tiene el local independientemente de su estado.
        if(cantidadDeReservasFin>0){
        bodyHTML += `
                <tr>
                    <td>
                        ${localActual}
                    </td>
                    <td>
                        ${cantidadDeReservasFin}
                    </td>
                    <td>
                        ${totalResPorLocal}
                    </td>
                    <td>
                        ${porsentajeDelUsuEnLocal}
                    </td>
                    
                </tr>
                `;
        }  
     }
     document.querySelector("#bodyTablaDatosEstadisticosUsuario").innerHTML = bodyHTML;

}

/////////////////////////Local con mayor canditdad de reservas del cliente

function localPreferido (){
    let nombreCliente = document.querySelector("#inputUserName").value;
    let contador = 0;
    let maximo = 0;
    let locPreferido = "";
    let mensaje = "";

    for(let i = 0; i<localesArray.length; i++){
        let localActual = localesArray[i];
    
     for(let j =0; j<reservasArray.length; j++){
        let reservaActual = reservasArray [i];

            if(localActual.nombreLocal == reservaActual.local && nombreCliente == reservaActual.nombreCliente && reservaActual.estado == "finalizado"){
                contador++

                if (contador>maximo){
                    maximo = contador
                    locPreferido=localActual.nombreLocal
                }
                else if(contador== maximo)
                mensaje= mensaje +" "+ localActual.nombreLocal
                
            }
    }
}
    if(contador == 0) {mensaje= "Usted no teien reservas finalizadas"}

    document.querySelector("#parrafoLocalPreferido").innerHTML = mensaje;
}


                        //////////////////////////////////////////////////////////

////////////////////////////////          BUCADOR MENU LOCAL         ////////////////////////////////////////

                    //////////////////////////////////////////////////////////

function buscar(){
    let subcadena = document.querySelector("#inputBuscarReservas").value;
    let nombreLocal = document.querySelector("#inputUserName").value;
    let bodyHTML =  '';
    let mensaje = "";
    let contador = 0;

    for(let i = 0; i<reservasArray.length; i++){
        let arrayAct = reservasArray[i];
        let clienteNom = arrayAct.nombreCliente;
        let esSubcadena = buscarSubcadena(clienteNom,subcadena);
       
        if(esSubcadena == true && arrayAct.estado == "pendiente" && arrayAct.local==nombreLocal){
            contador ++
                    bodyHTML += `
                    <tr>
                        <td>
                            ${arrayAct.nombreCliente}
                        </td>
                        <td>
                            <input  type="button" value="finalizar" data-usuarioBuscador="${arrayAct.idReserva}" class="btnFinalizarReserva">
                        </td>
                    </tr>
                     `;
                     document.querySelector("#bodyTablaReservasPendientesLocales").innerHTML = bodyHTML;
        }
    }
            let arrayDeBotones = document.querySelectorAll(".btnFinalizarReserva");
        
            for (let i = 0; i < arrayDeBotones.length; i++) {
              let botonActual = arrayDeBotones[i];
               botonActual.addEventListener("click", finalizarReserva);
            }
          
        if(contador == 0){
            mensaje = "No existen coincidencias";
            document.querySelector("#respuestasss").innerHTML = mensaje;
           }      
}

function buscarSubcadena(cadena,subcadena){
   
    let respuesta = false;
    let acumulador="";
    let contador=0
    let primeraLetra="";

    for(let i=0; i<subcadena.length; i++){
        primeraLetra = subcadena[0];
    }

    for (let i=0; i<=cadena.length-1; i++){
            
            contador++
        if(primeraLetra == cadena[i]){

            for(let i=contador-1; i<=contador+subcadena.length-2; i++)
                    {
                        acumulador+= cadena[i]
                    }
                    if(acumulador == subcadena){
                        break
                    }
                    else if(i==contador-1){continue}
        }
    }
    if(acumulador == subcadena){
        respuesta = true
    }
    else{
        respuesta = false
    }

    return respuesta; 

    }


function finalizarReserva (){  /////Cambiar estado de reserva a finalizada. 
   
    let idRes = parseInt( this.getAttribute("data-usuarioBuscador")) ;

    for(let i=0; i<reservasArray.length; i++){
        let reservaAct = reservasArray[i];
        if( reservaAct.idReserva == idRes){
            reservaAct.estado = "finalizado";
            alert(reservaAct.estado)
        }
    }
}



                                                    ////Agregar capacidad al local/////
function capacidadTotalDelLocal (array, nomLocal){
    let tieneCapacidad = 0
    let i = 0;
    while(i<array.length){
        let localActual = array[i]
        if (localActual.nombreLocal == nomLocal){
            tieneCapacidad +=localActual.capacidadTotal 
        }
            i++
    }
    return tieneCapacidad
}


function agregarCapacidadManual(){
let capacidadAgregada = parseInt(document.querySelector("#inputEditarCupoMax").value)
let nombreDelLocal = document.querySelector("#inputUserName").value
let capacidadTotal = 0

    i=0
    while(i<localesArray.length){
    let localActual = localesArray[i]
    if (localActual.nombreLocal == nombreDelLocal){
        localActual.capacidad += capacidadAgregada
        localActual.capacidadTotal += capacidadAgregada
        capacidadTotal = localActual.capacidadTotal
        
        } 
        i++
} 
document.querySelector("#parrafoEditarCupoMax").innerHTML= "Su capacidad fue cargada con éxito" + " la capacidad total es de : " + capacidadTotal
}




///////////////////////////////////TABLA RESERVAS LOCALES////////////////////////////////////////////////////////

function listaDeReservas (){
    completarListadoDeReservas ()
}


function completarListadoDeReservas (){
    let bodyHtml = "" 
    let nombrelocal = document.querySelector("#inputUserName").value
    for(let i=0; i<reservasArray.length; i++){
        let reservaActual = reservasArray[i];
        let estadodeReserva = reservaActual.estado
        let textoBoton = "pendiente"
        if(nombrelocal == reservaActual.local && estadodeReserva == "pendiente"){
            textoBoton = "finalizar"
            bodyHtml += `<tr>
            <td>
                ${reservaActual.nombreCliente}
            </td>
            <td>
                ${reservaActual.cantidadDePersonas}
            </td>
            <td>
                ${reservaActual.estado} 
            </td>
            <td>
            <input data-usuario1="${reservaActual.nombreCliente}" type="button" value="${textoBoton}" class= "BotonCambiarEstadoDeReserva" >
            </td>
             </tr>`
        }
    }
    document.querySelector("#bodyTabla").innerHTML = bodyHtml
  let arrayDeBotones = document.querySelectorAll(".BotonCambiarEstadoDeReserva")
  for(let i=0; i<arrayDeBotones.length; i++){
    let botonActual = arrayDeBotones[i];
    botonActual.addEventListener("click", btncambiarEstadoDeReserva)
  }
 
}
//el this.getAttribute sirva para obtener el valor de un elemento html, el atributo sería data usuario
function btncambiarEstadoDeReserva (){
    let nombreDeReservaParaCambiarDeEstado=this.getAttribute("data-usuario1")
    cambiarEstadoDeReserva(nombreDeReservaParaCambiarDeEstado)
    completarListadoDeReservas ()
}


function cambiarEstadoDeReserva (nombreCliente){
    let reservaDeUsuario = buscarReservaPendientePorNombre(reservasArray,nombreCliente)
    if(reservaDeUsuario.estado=="pendiente"){
        reservaDeUsuario.estado= "finalizado"
        AgregarCapacidadLocal(localesArray,nombreCliente)
    } else if (reservaDeUsuario.estado=="finalizado"){
        reservaDeUsuario.estado = "pendiente"
    }
    
}


/////////////////////Porcentaje de ocupacion

function porcentajeDeOcupacionDelLocal (){
    let nombreLocal= document.querySelector("#inputUserName").value
    let totalCapaidadDelLocal = capacidadTotalDelLocal(localesArray,nombreLocal)
    let cantidadTotalReservasPendiente = cantidadReservaPendiente(reservasArray, nombreLocal)
    let porcentajeDeOcupacionDelLocal= porcentaje (cantidadTotalReservasPendiente,totalCapaidadDelLocal)
    document.querySelector("#numTotalDeReservasPendientes").innerHTML ="El porcentaje de ocupación es de: " + porcentajeDeOcupacionDelLocal + "%"
    }
    
    function cantidadReservaPendiente (array, nombreLoc){
        let cantidadDeSillas=0
        let i = 0;
        while (i <array.length){
            let usuarioActual = array[i];
            if (usuarioActual.local == nombreLoc && usuarioActual.estado == "pendiente") {
                cantidadDeSillas += usuarioActual.cantidadDePersonas
        }
            i++;
        }
        return cantidadDeSillas
    
    } 

/////////////////////////////

    function mostrarReservasPendientes (){
        let nombreLocal= document.querySelector("#inputUserName").value
        let totalReservasPendientes = cantidadReservaPendientes(reservasArray, nombreLocal)
        document.querySelector("#mensajeMostrarReservasPendientes").innerHTML = "el total de reservas pendientes es de: " + totalReservasPendientes
    }
    
    function mostrarReservasFinalizadas (){
        let nombreLocal= document.querySelector("#inputUserName").value
        let totalReservasFinalizadas = cantidadReservaFinalizada(reservasArray, nombreLocal)
        document.querySelector("#mensajeMostrarReservasFinalizadas").innerHTML = "el total de reservas finalizadas es de: " + totalReservasFinalizadas
    }
    
    function cantidadReservaFinalizada (array, nombreLoc){
        let cantidadFinalida=0
        let i = 0;
        while (i <array.length){
            let usuarioActual = array[i];
            if (usuarioActual.local == nombreLoc && usuarioActual.estado == "finalizado") {
                cantidadFinalida++
        }
            i++;
        }
        return cantidadFinalida
    
    } 
    
    function cantidadReservaPendientes (array, nombreLoc){
        let cantidadPendiente=0
        let i = 0;
        while (i <array.length){
            let usuarioActual = array[i];
            if (usuarioActual.local == nombreLoc && usuarioActual.estado == "pendiente") {
                cantidadPendiente++
        }
            i++;
        }
        return cantidadPendiente
    
    } 

