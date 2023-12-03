document.addEventListener("DOMContentLoaded", () => {
    const botonAnadirLista = document.getElementById("addLista");
    botonAnadirLista.addEventListener('mousedown', anadeLista);
});

function anadeLista() {
    const nombreLista = prompt('Introduce el nombre de la lista:');
    const div = document.createElement('div');
    const nuevaLista = document.createElement('ul');
    const cabeceraLista = document.createElement('h2');
    cabeceraLista.textContent = nombreLista;
    nuevaLista.append(cabeceraLista);
    div.append(nuevaLista);
    const main = document.querySelector('main');
    main.append(div);
    crearBotonAnadir(div);
    borrarLista(div);

}

function crearBotonAnadir(contenedor) {
    const botonAnadirTarea = document.createElement('button');
    botonAnadirTarea.textContent = "Añadir tarea";
    botonAnadirTarea.addEventListener('mousedown',() =>{
        
        //Crear botones para añadir antes, añadir después y borrar la tarea
           crearBotones(contenedor);
        
       /* const botonAnadirTareaDespues = document.createElement('button');
        botonAnadirTareaDespues.textContent = "Añadir Despues";
        botonAnadirTareaDespues.addEventListener('mousedown',() =>{
            
        });
        const botonBorrarTarea = document.createElement('button');
        botonBorrarTarea.textContent = "Borrar";
        botonBorrarTarea.addEventListener('mousedown',() =>{
            
        });*/
       
    });
    const div =contenedor;
    div.append(botonAnadirTarea);
}
function borrarLista(lista) {
    const botonBorrar = document.createElement('button');
    botonBorrar.textContent = "Borrar Lista";
    const div = document.querySelectorAll('div');
    div[div.length-1].append(botonBorrar);
    botonBorrar.addEventListener('mousedown', () => {
        lista.remove();
        botonBorrar.remove();
    });
}
function crearBotones(contenedor) {
    const nombreTarea = prompt('Introduce el nombre de la tarea:');
    const nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = nombreTarea;
    const botonAnadirTareaAntes = document.createElement('button');
        botonAnadirTareaAntes.textContent = "Añadir Antes";
        botonAnadirTareaAntes.addEventListener('mousedown',() =>{
            crearBotones(contenedor);
        });  
        const siguienteElemento = nuevaTarea.nextSibling;
        const ul = contenedor.querySelector('ul');
         // Insertar la nueva tarea después del elemento siguiente (o al final si es null)
         if (siguienteElemento) {
            ul.insertBefore(nuevaTarea, siguienteElemento);
            ul.append(botonAnadirTareaAntes); 
        } else {
            ul.append(nuevaTarea);
            ul.append(botonAnadirTareaAntes); 
        }
       
       // ul.append(nuevaTarea);
       // ul.append(botonAnadirTareaAntes);     
}