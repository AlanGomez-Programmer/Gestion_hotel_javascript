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
            console.log("1. Registrar Habitación");
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