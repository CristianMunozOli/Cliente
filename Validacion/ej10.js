document.addEventListener("DOMContentLoaded", () => {
    const inputNombre=document.getElementById("nombre");
    inputNombre.addEventListener('blur', validaNombre);
    const inputApellido=document.getElementById("apellidos");
    inputApellido.addEventListener('blur', validaApellido);
    const inputEmail=document.getElementById("email");
    inputEmail.addEventListener('blur', validaEmail);
    const inputDni=document.getElementById("dni");
    inputDni.addEventListener('blur', validaDni);
  });

function validaNombre(e) {
    const inputNombre=document.getElementById("nombre");
    if(inputNombre.value==""){
      const spanNombre=document.getElementById("spanNombre");
      spanNombre.innerText="El nombre es obligatorio";
      spanNombre.classList.add("invalido");
    }else if(inputNombre.value.length<3){
      spanNombre.innerText="El nombre debe contener 3 caracteres"
    }
    else{
      spanNombre.innerText="";
      spanNombre.classList.remove("invalido");
      inputNombre.value=inputNombre.value.charAt(0).toUpperCase()+inputNombre.value.slice(1).toLowerCase();
    }
}
function validaApellido(e) {
  const inputApellido=document.getElementById("apellidos");
  if(inputApellido.value==""){
    const spanApellido=document.getElementById("spanApellido");
    spanApellido.innerText="El apellido es obligatorio";
    spanApellido.classList.add("invalido");
  }else if(inputApellido.value.length<3){
    spanApellido.innerText="El nombre debe contener 3 caracteres"
  }
  else{
    spanNombre.innerText="";
    spanApellido.classList.remove("invalido");
    let palabras=inputApellido.value.split(" ");
    let palabrasMayuscula = palabras.map((palabra)=> {
      return palabra.charAt(0).toUpperCase() + palabra.slice(1);
  });
    let fraseFormateada = palabrasMayuscula.join(' ');
    inputApellido.value=fraseFormateada;
  }
}
function validaEmail(e){}
function validaDni(e){
  let letras=["t","r","w","a","g","m","y","f","p","d","x","b","n","j","z","s","q","v","h","l","c","k","e"];
  const inputDni=document.getElementById("dni");
  const numero = inputDni.value.slice(0, 8);
  const letra=inputDni.value.slice(8);
  let resultado=numero%23;
  console.log(letras[letra]);
  if(letras[resultado]!=letra){
    spanDni=document.getElementById("spanDni");
    spanDni.innerText="Dni incorrecto";
    spanDni.classList.add("invalido");
  }
  else{
    spanNombre.classList.remove("invalido");
  }

}