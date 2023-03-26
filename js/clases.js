let clientesArray = []
let localesArray = []
let reservasArray = []



let proximoIdClientes = 1;
class Clientes {
    constructor (pNombre, pContraseña,pReservasHechas) {
        this.id = proximoIdClientes;
        this.nombreUsuario = pNombre;
        this.contraseñaUsuario = pContraseña
        this.reservasHechas = pReservasHechas

        proximoIdClientes++
    }
}

let proximoIdLocales = 1;
class Locales {
    constructor (pNombre, pContraseña, pCapacidad, pCapacidadTotal) {
        this.id = proximoIdLocales
        this.nombreLocal = pNombre;
        this.contraseñaLocal = pContraseña
        this.capacidad = pCapacidad
        this.capacidadTotal = pCapacidadTotal
        
        proximoIdLocales++
    }

}

let proximoIdReserva = 1;
class Reservas {
    constructor (pNombre, pCantidad, pLocal, pEstado, pCalificacion){
        this.idReserva = proximoIdReserva
        this.nombreCliente = pNombre;
        this.cantidadDePersonas = pCantidad
        this.local = pLocal
        this.estado = pEstado
        this.calificacion=pCalificacion
        
        proximoIdReserva++
    }
    
}
