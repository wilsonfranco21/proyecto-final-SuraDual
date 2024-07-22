let boton=document.getElementById("botonchat")
boton.addEventListener("click",function(){
    let cajaChat=document.getElementById("cajaChat")
    if(cajaChat.style.display=="none" || cajaChat.style.display=="")
    {
        cajaChat.style.display="block"
    }else{
        cajaChat.style.display="none"
    }
})
