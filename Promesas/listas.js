const URL_SERVER ="http://54.204.61.101:3000";
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
    fetch(`${URL_SERVER}/listas`)
    .then(response => {
        if (response.ok)
            return response.json();
        else
            throw new Error(response.status);
    })
    .then(data => {
        pintarListas(data);
        console.log("Datos: " + data);
    })
    .catch(err => {
        const e=document.querySelector('main')
        console.error("ERROR: ", err.message)
        e.innerHTML="ERROR: Fallo de conexión"+ err.message
    });
}

function añadirListaNueva(){
    const nombreLista=prompt("Nombre de la lista");
    // Declaración de una variable de objeto
    const jsonData={nombreLista, tarea:[]}
    const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(jsonData)
      };
    
}

function borrarListaServidor(){

}
function añadirTarea(){
 
}

function eliminarTarea(){

}