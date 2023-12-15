const URL_SERVER ="http://54.198.173.137:3000";
document.addEventListener("DOMContentLoaded",cargarListas,{once:true})

function pintarListas(listas){
    listas.forEach(element => {
        const seccionListaNueva=document.createElement("section");
        const listaNueva=document.createElement("ol");
        listaNueva.id=element.id;
        const tituloLista=document.createElement("h2");
        tituloLista.innerText=element.nombreLista;
        const botonAddTarea=document.createElement("button");
        const botonBorrarLista=document.createElement("button");
        const botonEliminarTarea=document.createElement("button");
        botonAddTarea.innerText="Añadir Tarea";
        botonAddTarea.addEventListener("click", añadirTarea);
        botonBorrarLista.textContent="Borrar Lista";
        botonBorrarLista.addEventListener("click", borrarListaServidor);
        botonEliminarTarea.innerText="Eliminar Tarea";
        botonEliminarTarea.addEventListener("click",eliminarTarea);
        document.querySelector("main").append(seccionListaNueva);
        seccionListaNueva.append(tituloLista,botonBorrarLista,botonAddTarea,botonEliminarTarea,listaNueva);
        element.tareas.forEach(tarea=>{
            const tareaNueva=document.createElement("li");
            tareaNueva.innerText=tarea;
            listaNueva.append(tareaNueva);
            }
        )

    });
}

function cargarListas(){
    const e=document.querySelector('main')
    fetch(`${URL_SERVER}/listas`)
    .then(response => {
        if (response.ok)
            return response.json();
        else
            throw new Error(response.status);
    })
    .then(data => {
        const botonAddLista=document.createElement("button");
        botonAddLista.innerHTML="Añadir lista";
        botonAddLista.addEventListener("click",añadirListaNueva);
        e.append(botonAddLista);
        pintarListas(data);
        console.log("Datos: " + data);
    })
    .catch(err => {
        console.error("ERROR: ", err.message)
        e.innerHTML="ERROR: Fallo de conexión"+ err.message
    });
}

function añadirListaNueva(){
    const nombreLista=prompt("Nombre de la lista");
    // Declaración de una variable de objeto
    const jsonData={nombreLista, tareas:[]}
    const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(jsonData)
      };
      fetch(`${URL_SERVER}/listas`,options)
      .then((res) => res.json())
      .then(data => pintarListas([data]))
        .catch((error) => console.error("Error:", error))     
}

function borrarListaServidor(e){
    console.log(e);
    const id= e.target.parentNode.querySelector("ol").id;
    console.log("el id: "+id)
    const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
      };
      fetch(`${URL_SERVER}/listas/${id}`, options)
        .then((res) => {
            if (res.ok) {
                console.log("Lista borrada con éxito");
            } else {
                console.error("Error al borrar la lista:", res.statusText);
            }
        })
        .catch((error) => console.error("Error:", error));
}
function añadirTarea(){
    
    const nombreLista = prompt("Nombre de la lista a la que añadir la tarea");
    const nuevaTarea = prompt("Nombre de la nueva tarea");

    // Declaración de una variable de objeto
    const jsonData = { tarea: nuevaTarea }; // ajustado para la estructura de tu JSON

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jsonData)
    };

    fetch(`${URL_SERVER}/listas`, options)
        .then((res) => {
            if (res.ok) {
                console.log(`Tarea "${nuevaTarea}" añadida a la lista "${nombreLista}" con éxito`);
                return res.json();
            } else {
                throw new Error(`Error al añadir tarea a la lista: ${res.statusText}`);
            }
        })
        .then(data => {
            console.log("Respuesta del servidor:", data);
        })
        .catch((error) => console.error("Error:", error));
}

function eliminarTarea(){

}