let url="http://localhost:8000/leonardo"

let peticion ={
    method:"GET"
}

fetch(url,peticion)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
    

let botonsend=document.getElementById("botonSend")
let textochat=document.getElementById("textochat")
let mensajechat=document.getElementById("mensajechat")

// mapear el arreglo de pregunta y mapear el arreglo de repuestas 
let preguntas=respuesta.map(function(pregunta){
    return pregunta.pregunta
})
let respuestas=respuesta.map(function(respuesta){
    return respuesta.respuesta
})


// variable para contar el numero de preguntas

let indicePregunta=0

// funcion para detectar el inicio y desarrollo de la conversacion

function procesarEntradachat(){
    let escribeUsuario=textochat.value.toLowerCase()
    textochat.value=""
    if(escribeUsuario=="hola"){
        let listaPreguntas=preguntas.map((pregunta,index)=>`${index+1}.${pregunta}`).join("<br>")
        mensajechat.innerHTML+=`<p class="text-star">Hola BienVenido <br> ${listaPreguntas}</p>`
    }else{
        let numeroPregunta=parseInt(escribeUsuario)-1
        if(numeroPregunta>=0 && numeroPregunta<preguntas.length){
             mensajechat.innerHTML+=`<p class="text-star"> ${preguntas[numeroPregunta]}</p>`
             mensajechat.innerHTML+=`<p class="text-end"> ${respuestas[numeroPregunta]}</p>`
            
        }
    }
}

// rutina para activar el chatbot

botonsend.addEventListener("click",procesarEntradachat)

textochat.addEventListener("keypress",function(evento){
    if(evento.key=="Enter"){
        evento.preventDefault()
        procesarEntradachat()

    }
})
})
.catch(function(respuesta){
    console.log(respuesta)
})


