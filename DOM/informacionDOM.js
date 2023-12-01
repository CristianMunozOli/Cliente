
function cuentaElementos(elemento) {
    const elementos = document.querySelectorAll(elemento);
    return elementos.length;
}
function nCaracteres() {
    const parrafo = document.querySelectorAll('p')[0];
    const textoModificado=parrafo.textContent.slice(0,21);
    console.log(textoModificado)
    return textoModificado;
}

function rellenaDiv(){
    const divContenido=document.getElementById("mostrarInformacion");
    divContenido.innerText=`Número de párrafos que contiene el documento: ${cuentaElementos("p")}\n`;
    divContenido.innerText+=`Los 20 primeros caracteres del primer párrafo son:${nCaracteres()}\n`;
    divContenido.innerText+=`El número de enlaces:${cuentaElementos("a")}\n`;
    

}

rellenaDiv();