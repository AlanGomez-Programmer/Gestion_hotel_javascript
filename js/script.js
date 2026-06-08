let habitaciones = [];

// Menú

function mostarMenu(){
    let menu = "========== MENU HABITACIONES ==========\n"+
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
            console.log("2. Listar Habitación");
            break;
        case "3": 
            console.log("3. Buscar Habitación");
            break;
        case "4": 
            console.log("4. Cambiar estado de Habitación");
            break;
        case "5": 
            console.log("5. Eliminar Habitación");
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
    let estadoHabitacion = prompt("Ingrese el estado de la habitación\n(Libre, Ocumpada o Limpieza)");
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