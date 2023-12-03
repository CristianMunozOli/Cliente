
function cuentaElementos(elemento) {
    const elementos = document.querySelectorAll(elemento);
    return elementos;
}
function nCaracteres() {
    const parrafo = document.querySelectorAll('p')[0];
    const textoModificado=parrafo.textContent.slice(0,21);
    //console.log(textoModificado)
    return textoModificado;
}

function rellenaDiv(){
    const divContenido=document.getElementById("mostrarInformacion");
    divContenido.innerText=`Número de párrafos que contiene el documento: ${cuentaElementos("p").length}\n`;
    divContenido.innerText+=`Los 20 primeros caracteres del primer párrafo son:${nCaracteres()}\n`;
    divContenido.innerText+=`El número de enlaces:${cuentaElementos("a").length}\n`;
    divContenido.innerText+=`La dirección a la que apunta el segundo enlace:${cuentaElementos("a")[1].getAttribute("href")}\n`;
    divContenido.innerText+=`La dirección a la que apunta el penúltimo enlace:${cuentaElementos("a")[cuentaElementos("a").length-2].getAttribute("href")}\n`;
    let segundoParrafo=cuentaElementos("p");
    let enlacesSegundoParrafo=segundoParrafo[1].querySelectorAll("a");
    divContenido.innerText+=`El número de enlaces que hay en el segundo párrafo:${enlacesSegundoParrafo.length}\n`;
    const parrafosRojo = document.querySelectorAll('p.resaltado');
    let enlaces=0;
    parrafosRojo.forEach(elemento => {
        let enlacesHijos=elemento.querySelectorAll("a");
        enlaces+=enlacesHijos.length;
    });
    divContenido.innerText+=`El número de enlaces hijos de un “p” que tenga color red:${enlaces}\n`;
    
    
}  
rellenaDiv();