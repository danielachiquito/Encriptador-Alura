const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


//Función de encriptar PARA el botón encriptar

function btnEncriptar (){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

//Función de encriptar

function encriptar (stringEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    console.table(matrizCodigo)
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }
    return stringEncriptado
}

//Finción de desencriptar PARA el botón desencriptar

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = ""; 
}

//Función de desencriptar

function desencriptar(stringDesencriptado){
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  console.table(matrizCodigo)
  stringDesencriptado= stringDesencriptado.toLowerCase()

  for(let i = 0; i < matrizCodigo.length; i++){
      if(stringDesencriptado.includes(matrizCodigo[i][1])) {
          stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

      }
  }
  return stringDesencriptado
}

function copiado(){
  var contenido = document.querySelector(".mensaje");
  contenido.select();
  navigator.clipboard.writeText(contenido.value);
  }