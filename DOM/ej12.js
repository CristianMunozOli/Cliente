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
        const nombreTarea = prompt('Introduce el nombre de la tarea:');
        const nuevaTarea = document.createElement('li');
        nuevaTarea.textContent = nombreTarea;
        const ul = contenedor.querySelector('ul');
        ul.append(nuevaTarea);
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