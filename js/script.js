let habitaciones = [];

// Menú

function mostarMenu(){
    let menu = "========== HOTEL ==========\n"+
        "1. Regitrar Nueva Habitación\n"+
        "2. Listar Habitación\n"+
        "3. Buscar Habitación\n"+
        "4. Cambiar estado de Habitación\n"+
        "5. Eliminar Habitación\n"+
        "6. Salir"

    let opcion = prompt(menu);

    switch (opcion) {
        case "1": 
            registrarHabitacion(mostarMenu)
            break;
        case "2": 
            listarHabitacion(mostarMenu);
            break;
        case "3": 
            buscarHabitacion(mostarMenu);
            break;
        case "4": 
            cambiarEstadoHabitacion(mostarMenu);
            break;
        case "5": 
            eliminarHabitacion(mostarMenu);
            break;
        case "6":
            console.log("Bye, Bye");
            break;
        default:
            console.log("No existe esa opción");
            mostarMenu();
    }
}

mostarMenu()

// Registro de habitación

function registrarHabitacion(callback){
    let numeroHabitacion = prompt("Ingrese el número de habitación");
    let tipoHabitacion = prompt("Ingrese el tipo de habitación\n(Sencilla, Doble o Suite)");
    let precioNOche = prompt("Precio por Noche: ");
    let estadoHabitacion = prompt("Ingrese el estado de la habitación\n(Libre, Ocupada o Limpieza)");
    let huespeEnHabitación = prompt("Ingrese el Nombre del huesped\n(Si esta libre solo ingrese Enter)");

    let habitacion = {
        numeroHabitacion,
        tipoHabitacion,
        precioNOche,
        estadoHabitacion,
        huespeEnHabitación
    };

    console.log("Validando información de la habitación....");
    setTimeout(function(){
        habitaciones.push(habitacion);
        console.log("Habitación registrada correctamente")
        callback()
    }, 2000);
};

// Listar Habitación
function listarHabitacion(callback){

    if (habitaciones.length === 0){
        console.log("No hay habitaciones registradas aún.");

        setTimeout(function(){
            callback();
        }, 2000);
        return;
    }

    habitaciones.forEach(function(habitacion){
        console.log("=======================");
        console.log(`No. Habitación: ${habitacion.numeroHabitacion}`);
        console.log(`Tipo de Habitación: ${habitacion.tipoHabitacion}`);
        console.log(`Precio por Noche: Q${habitacion.precioNOche}`);
        console.log(`Estado: ${habitacion.estadoHabitacion}`);

        let huesped = habitacion.huespeEnHabitación;

        if (huesped === ""){
            console.log("Nombre del Huésped: Está libre");
        }else{
            console.log(`Nombre del Huésped: ${huesped}`);
        }
    });
    
    setTimeout(function(){
        callback();
    }, 2000);
}

// Busacar habitacion

function buscarHabitacion(callback){

    let numeroHabitacion = prompt("Ingrese el número de habitación");

    console.log("Consultando la base de datos del hotel...");

    setTimeout(function(){

        let habitacionBuscada = habitaciones.find(function(habitacion){
            return habitacion.numeroHabitacion === numeroHabitacion;
        });

        if(habitacionBuscada){
            console.log("=======================");
            console.log(`No. Habitación Consultada: ${habitacionBuscada.numeroHabitacion}`);
            console.log(`Tipo de Habitación: ${habitacionBuscada.tipoHabitacion}`);
            console.log(`Precio por Noche: Q${habitacionBuscada.precioNOche}`);
            console.log(`Estado: ${habitacionBuscada.estadoHabitacion}`);
            if(habitacionBuscada.huespeEnHabitación === ""){
                console.log("Huésped: Esta libre");
            }else{
                console.log(`Huésped: ${habitacionBuscada.huespeEnHabitación}`);
            }

        }else{
            console.log("Habitación no encontrada");
        }

        callback();

    }, 2000);
}

// Cambiar estado de la Habitación

function cambiarEstadoHabitacion(callback) {

    let numeroHabitacion = prompt(
        "Ingrese el número de habitación"
    );

    console.log("Buscando habitación...");

    setTimeout(function () {

        let habitacionBuscada = habitaciones.find(function (habitacion) {
            return habitacion.numeroHabitacion === numeroHabitacion;
        });

        if (habitacionBuscada) {
            let nuevoEstado = prompt(
                "Ingrese el nuevo estado\n" +
                "(Libre, Ocupada o Limpieza)"
            );

            habitacionBuscada.estadoHabitacion = nuevoEstado;
            if (nuevoEstado === "Ocupada") {
                habitacionBuscada.huespeEnHabitación = prompt("Ingrese el nombre del huésped");
            } else {
                habitacionBuscada.huespeEnHabitación = "";
            }
            console.log("Estado actualizado correctamente.");
        } else {
            console.log("Habitación no encontrada.");
        }
        callback();
    }, 2000);
};

// Eliminar habitacion

function eliminarHabitacion(callback){

    let numeroHabitacion = prompt(
        "Ingrese el número de habitación a eliminar"
    );

    console.log("Buscando habitación...");

    setTimeout(function(){
        let indice = habitaciones.findIndex(function(habitacion){
            return habitacion.numeroHabitacion === numeroHabitacion;
        });

        if(indice !== -1){
            habitaciones.splice(indice, 1);
            console.log("Habitación eliminada correctamente.");
        }else{
            console.log("Habitación no encontrada.");
        }
        callback();
    }, 2000);
};