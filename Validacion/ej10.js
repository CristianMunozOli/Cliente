document.addEventListener("DOMContentLoaded", () => {
    const inputNombre=document.getElementById("nombre");
    inputNombre.addEventListener('blur', validaNombre);
    const inputApellido=document.getElementById("apellidos");
    inputApellido.addEventListener('blur', validaApellido);
    const inputDni=document.getElementById("dni");
    inputDni.addEventListener('blur', validaDni);
    const inputUserName=document.getElementById("userName");
    inputUserName.addEventListener('focus', rellenaUsername);
    const inputContrasena=document.getElementById("contrasena");
    inputContrasena.addEventListener('blur', validaContrasena);
    const inputRepetirContrasena=document.getElementById("repetirContrasena");
    inputRepetirContrasena.addEventListener('input', validaRepetirContrasena);
    const formulario=document.getElementById("formulario");
    formulario.addEventListener('submit', validaFormulario);
  });

function validaNombre(e) {
    const inputNombre=document.getElementById("nombre");
    if(inputNombre.value==""){
      const spanNombre=document.getElementById("spanNombre");
      spanNombre.innerText="El nombre es obligatorio";
      spanNombre.classList.add("invalido");
      return false;
    }else if(inputNombre.value.length<3){
      spanNombre.innerText="El nombre debe contener 3 caracteres";
      return false;
    }
    else{
      spanNombre.innerText="";
      spanNombre.classList.remove("invalido");
      inputNombre.value=inputNombre.value.charAt(0).toUpperCase()+inputNombre.value.slice(1).toLowerCase();
      return true;
    }
}
function validaApellido(e) {
  const inputApellido=document.getElementById("apellidos");
  if(inputApellido.value==""){
    const spanApellido=document.getElementById("spanApellido");
    spanApellido.innerText="El apellido es obligatorio";
    spanApellido.classList.add("invalido");
    return false;
  }else if(inputApellido.value.length<3){
    spanApellido.innerText="El nombre debe contener 3 caracteres";
    return false;
  }
  else{
    spanApellido.innerText="";
    spanApellido.classList.remove("invalido");
    let palabras=inputApellido.value.split(" ");
    let palabrasMayuscula = palabras.map((palabra)=> {
      return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
  });
    let fraseFormateada = palabrasMayuscula.join(' ');
    inputApellido.value=fraseFormateada;
    return true;
  }
}

function validaDni(e){
  const inputDni=document.getElementById("dni");
  spanDni=document.getElementById("spanDni");
  let expresionRegular=/^[0-9]{8}/;
  if(inputDni.value.length!=9){
    spanDni.innerText="El Dni debe tener 9 caracteres";
    spanDni.classList.add("invalido");
    return false;
  }
  else if(!expresionRegular.test(inputDni.value)){
    spanDni.innerText="El Dni debe empezar por 8 numeros";
    spanDni.classList.add("invalido");
    return false;
  }
  else if(!compruebaLetra(inputDni.value)){
    spanDni.innerText="Dni incorrecto";
    spanDni.classList.add("invalido");
    return false;
  }
  else{
    spanNombre.classList.remove("invalido");
    spanDni.innerText="";
    return true;
  }
}
function compruebaLetra(dni) {
  let letras=["t","r","w","a","g","m","y","f","p","d","x","b","n","j","z","s","q","v","h","l","c","k","e"];
  const numero = dni.slice(0, 8);
  const letra=dni.slice(8);
  let resultado=numero%23;
  if(letras[resultado]!=letra.toLowerCase())
    return false;
  else
    return true;
}

function rellenaUsername(e) {
  const inputUserName= document.getElementById("userName");
  if(inputUserName.value==""){
    const inputNombre=document.getElementById("nombre").value.charAt(0);
    const inputApellidos=document.getElementById("apellidos").value.replace(" ","");
    const userName=inputNombre.charAt(0).toLowerCase()+inputApellidos.toLowerCase();
    document.getElementById("userName").value=userName;
    console.log(inputNombre);
    console.log(inputApellidos.replace(" ",""));
  }
}

function validaContrasena(e) {
  const inputContrasena= document.getElementById("contrasena");
  const spanContrasena=document.getElementById("spanContrasena");
  const expresionRegular=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  if(!expresionRegular.test(inputContrasena.value)){
    spanContrasena.innerText="Exige mínimo 8 caracteres y debe contener una minúscula , una mayúscula y un número. Admite también caracteres especiales"
    spanContrasena.classList.add("invalido");
    return false;
  }else{
    spanContrasena.value=""
    spanContrasena.classList.remove("invalido");
    return true;
  }
}
function validaRepetirContrasena(e) {
  const inputContrasena= document.getElementById("contrasena");
  const inputRepetirContrasena= document.getElementById("repetirContrasena");
  const spanRepetirContrasena= document.getElementById("spanRepetirContrasena");
  if(inputContrasena.value!=inputRepetirContrasena.value){
    spanRepetirContrasena.innerText="Contraseña diferente";
    spanRepetirContrasena.classList.add("invalido");
    return false;
  }else{
    spanRepetirContrasena.innerText="";
    spanRepetirContrasena.classList.remove("invalido");
    return true;
  }
}
function validaAvisosComerciales(e) {
  const inputAvisosComerciales= document.getElementById("avisosComerciales");
  const inputEmail= document.getElementById("email");
  const inputSpanEmail= document.getElementById("spanEmail");
  if(inputAvisosComerciales.checkVisibility()){
    if(!validaEmail(inputEmail.value)){
      inputSpanEmail.innerText="Correo obligatorio si seleccionas los avisos comerciales";
      inputSpanEmail.classList.add("invalido");
      return false;
    }
    else{
      inputSpanEmail.innerText="";
      inputSpanEmail.classList.remove("invalido");
      return true;
    }
  }else{
    return true;
  }
}
function validaEmail(email) {
  expresionRegular=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  if(!expresionRegular.test(email))
    return false;
  else
  return true;
}
function validaFormulario(e) {
  if(!validaNombre()){
    e.preventDefault();
    const inputNombre=document.getElementById("nombre");
    inputNombre.focus();
    return false;
  }
  else if(!validaApellido()){
    e.preventDefault();
    const inputApellido=document.getElementById("apellidos");
    inputApellido.focus();
    return false;
  }
  else if(!validaDni()){
    e.preventDefault();
    const inputDni=document.getElementById("dni");
    inputDni.focus();
    return false;
  }
  else if(!validaContrasena){
    e.preventDefault();
    const inputContrasena=document.getElementById("contrasena");
    inputContrasena.focus();
    return false;
  }
  else if(!validaRepetirContrasena){
    e.preventDefault();
    const inputRepetirContrasena=document.getElementById("repetirContrasena");
    inputRepetirContrasena.focus();
    return false;
  }
  else if(!validaAvisosComerciales()){  
    e.preventDefault();
   const inputEmail=document.getElementById("email");
   inputEmail.focus();
   return false;
  }else{
    return true;
  }
}