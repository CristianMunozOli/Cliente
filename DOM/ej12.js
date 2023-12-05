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
    crearBotonAnadirTarea(div);
    crearBorrarBotonLista();

}

function crearBotonAnadirTarea(contenedor) {
    const botonAnadirTarea = document.createElement('button');
    botonAnadirTarea.textContent = "Añadir tarea";
    botonAnadirTarea.addEventListener('mousedown',(e) =>{
        const nombreTarea = prompt('Introduce el nombre de la tarea:');
        const nuevaTarea = document.createElement('li');
        nuevaTarea.textContent = nombreTarea; 
        const botonAnadirTareaAntes = document.createElement('button');
        botonAnadirTareaAntes.textContent = "Añadir Antes";
        botonAnadirTareaAntes.addEventListener('mousedown',anadirAntes);  
        const botonAnadirTareaDespues = document.createElement('button');
        botonAnadirTareaDespues.textContent = "Añadir Despues";
        botonAnadirTareaDespues.addEventListener('mousedown',anadirDespues);
        const botonBorrarTarea = document.createElement('button');
        botonBorrarTarea.textContent = "Borrar";
        botonBorrarTarea.addEventListener('mousedown',(e)=>e.target.parentElement.remove());
        e.target.parentNode.append(nuevaTarea);
        nuevaTarea.append(botonBorrarTarea,botonAnadirTareaAntes,botonAnadirTareaDespues)
    
    });
   
    const div = document.querySelectorAll('div');
    div[div.length-1].append(botonAnadirTarea);
}
function crearBorrarBotonLista() {
    const botonBorrar = document.createElement('button');
    botonBorrar.textContent = "Borrar Lista";
    const div = document.querySelectorAll('div');
    div[div.length-1].append(botonBorrar);
    botonBorrar.addEventListener('mousedown', (e) => {
        console.log(e.target.parentElement);
        e.target.parentElement.remove();
    });
}

function anadirAntes(e){
    const nombreTarea=prompt("Nombre de la tarea");
    const tareaNueva=document.createElement("li");
    tareaNueva.innerText=nombreTarea;
    //Boton Eliminar Tarea
    const btnEliminarTarea=document.createElement("button",);
    btnEliminarTarea.innerText="Eliminar Tarea";
    btnEliminarTarea.addEventListener("click",(e)=>e.target.parentElement.remove());
    //Boton Tarea antes
    const btnTareaAntes=document.createElement("button",);
    btnTareaAntes.innerText="Añadir Tarea Antes";
    btnTareaAntes.addEventListener("click",anadirAntes);
    //Boton Tarea Despues
    const btnTareaDespues=document.createElement("button",);
    btnTareaDespues.innerText="Añadir Tarea Despues";
    btnTareaDespues.addEventListener("click",anadirDespues);
    e.target.parentNode.before(tareaNueva);
    //Meto los botones dentro del li, para Drag and drop creo que ira mejor
    tareaNueva.append(btnEliminarTarea,btnTareaAntes,btnTareaDespues)
}
function anadirDespues(e){
    const nombreTarea=prompt("Nombre de la tarea");
    const tareaNueva=document.createElement("li");
    tareaNueva.innerText=nombreTarea;
    //Boton Eliminar Tarea
    const btnEliminarTarea=document.createElement("button",);
    btnEliminarTarea.innerText="Eliminar Tarea";
    btnEliminarTarea.addEventListener("click",(e)=>e.target.parentElement.remove());
    //Boton Tarea antes
    const btnTareaAntes=document.createElement("button",);
    btnTareaAntes.innerText="Añadir Tarea Antes";
    btnTareaAntes.addEventListener("click",añadirAntes);
    //Boton Tarea Despues
    const btnTareaDespues=document.createElement("button",);
    btnTareaDespues.innerText="Añadir Tarea Despues";
    btnTareaDespues.addEventListener("click",añadirDespues);
    e.target.parentNode.after(tareaNueva);
    //Meto los botones dentro del li, para Drag and drop creo que ira mejor
    tareaNueva.append(btnEliminarTarea,btnTareaAntes,btnTareaDespues)
}