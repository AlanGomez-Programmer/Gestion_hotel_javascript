const consola = document.getElementById("consola");
let habitaciones = [];

function simulacionTiempoEspera(tiempo){
    return new Promise((resolve)=>{
        setTimeout(resolve, tiempo);
    });
}

function imprimir(texto){
    const p = document.createElement("p");
    p.textContent = texto;
    consola.appendChild(p);
}

function limpiarConsola(){
    consola.replaceChildren();
}

function esperarVista(){
    return simulacionTiempoEspera(0);
}

// Menú 

async function mostarMenu(){

    await esperarVista();

    let menu =
        "========== HOTEL ==========\n" +
        "1. Registrar Nueva Habitación\n" +
        "2. Listar Habitaciones\n" +
        "3. Buscar Habitación\n" +
        "4. Cambiar Estado de Habitación\n" +
        "5. Eliminar Habitación\n" +
        "6. Salir";

    let opcion = prompt(menu);

    switch(opcion){

        case "1":
            await registrarHabitacion(mostarMenu);
            break;

        case "2":
            await listarHabitacion(mostarMenu);
            break;

        case "3":
            await buscarHabitacion(mostarMenu);
            break;

        case "4":
            await cambiarEstadoHabitacion(mostarMenu);
            break;

        case "5":
            await eliminarHabitacion(mostarMenu);
            break;

        case "6":
            limpiarConsola();
            imprimir("Bye Bye");
            return;

        default:
            limpiarConsola();
            imprimir("Opción no válida");
            mostarMenu();
    }
}

mostarMenu();

// Registrar habitación

function registrarHabitacion(callback){

    limpiarConsola();

    let numeroHabitacion = prompt("Ingrese el número de habitación");
    let tipoHabitacion = prompt(
        "Ingrese el tipo de habitación\n(Sencilla, Doble o Suite)"
    );
    let precioNOche = prompt("Precio por noche:");
    let estadoHabitacion = prompt(
        "Ingrese el estado de la habitación\n(Libre, Ocupada o Limpieza)"
    );
    let huespeEnHabitación = prompt(
        "Ingrese el nombre del huésped\n(Si está libre presione Enter)"
    );

    let habitacion = {
        numeroHabitacion,
        tipoHabitacion,
        precioNOche,
        estadoHabitacion,
        huespeEnHabitación
    };

    imprimir("Validando información de la habitación...");

    setTimeout(()=>{

        habitaciones.push(habitacion);

        limpiarConsola();
        imprimir("Habitación registrada correctamente");

        callback();

    }, 2000);
}

// Listar habitaciones

function listarHabitacion(callback){

    limpiarConsola();

    if(habitaciones.length === 0){

        imprimir("No hay habitaciones registradas aún.");

        setTimeout(()=>{
            callback();
        }, 2000);

        return;
    }

    habitaciones.forEach(function(habitacion){

        imprimir(`No. Habitación: ${habitacion.numeroHabitacion}`);
        imprimir(`Tipo: ${habitacion.tipoHabitacion}`);
        imprimir(`Precio por Noche: Q${habitacion.precioNOche}`);
        imprimir(`Estado: ${habitacion.estadoHabitacion}`);

        if(habitacion.huespeEnHabitación === ""){
            imprimir("Huésped: Está libre");
        }else{
            imprimir(`Huésped: ${habitacion.huespeEnHabitación}`);
        }
    });

    setTimeout(()=>{
        callback();
    }, 2000);
}

// Buscar habitación
function buscarHabitacion(callback){

    limpiarConsola();

    let numeroHabitacion = prompt(
        "Ingrese el número de habitación"
    );

    imprimir("Consultando base de datos...");

    setTimeout(()=>{

        limpiarConsola();

        let habitacionBuscada = habitaciones.find(function(habitacion){
            return habitacion.numeroHabitacion === numeroHabitacion;
        });

        if(habitacionBuscada){

            imprimir(`No. Habitación: ${habitacionBuscada.numeroHabitacion}`);

            imprimir(
                `Tipo: ${habitacionBuscada.tipoHabitacion}`
            );

            imprimir(
                `Precio por Noche: Q${habitacionBuscada.precioNOche}`
            );

            imprimir(
                `Estado: ${habitacionBuscada.estadoHabitacion}`
            );

            if(habitacionBuscada.huespeEnHabitación === ""){
                imprimir("Huésped: Está libre");
            }else{
                imprimir(
                    `Huésped: ${habitacionBuscada.huespeEnHabitación}`
                );
            }

        }else{

            imprimir("Habitación no encontrada");
        }

        callback();

    }, 2000);
}

// Cambiar estado
function cambiarEstadoHabitacion(callback){

    limpiarConsola();

    let numeroHabitacion = prompt(
        "Ingrese el número de habitación"
    );

    imprimir("Buscando habitación...");

    setTimeout(()=>{

        limpiarConsola();

        let habitacionBuscada = habitaciones.find(function(habitacion){
            return habitacion.numeroHabitacion === numeroHabitacion;
        });

        if(habitacionBuscada){

            let nuevoEstado = prompt(
                "Ingrese el nuevo estado\n" +
                "(Libre, Ocupada o Limpieza)"
            );

            habitacionBuscada.estadoHabitacion = nuevoEstado;

            if(nuevoEstado === "Ocupada"){

                habitacionBuscada.huespeEnHabitación =
                    prompt("Ingrese el nombre del huésped");

            }else{

                habitacionBuscada.huespeEnHabitación = "";
            }

            imprimir("Estado actualizado correctamente");

        }else{

            imprimir("Habitación no encontrada");
        }

        callback();

    }, 2000);
}

// Eliminar habitación

function eliminarHabitacion(callback){

    limpiarConsola();

    let numeroHabitacion = prompt(
        "Ingrese el número de habitación a eliminar"
    );

    imprimir("Buscando habitación...");

    setTimeout(()=>{

        limpiarConsola();

        let indice = habitaciones.findIndex(function(habitacion){
            return habitacion.numeroHabitacion === numeroHabitacion;
        });

        if(indice !== -1){

            habitaciones.splice(indice, 1);

            imprimir("Habitación eliminada correctamente");

        }else{

            imprimir("Habitación no encontrada");
        }

        callback();

    }, 2000);
}