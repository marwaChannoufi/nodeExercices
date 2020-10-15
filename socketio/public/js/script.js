// variableocket pou controler le lien localhost 3000
var socket=io("http://localhost:3000")

const setTitle=(title)=>{
    if(title==="disconnect"){
        document.querySelector('h1').classList.add('disconnect')
    }else{
        
        document.querySelector('h1').classList.add('connect')
    }
    document.querySelector('h1').innerHTML = title
}

socket.on("disconnect",()=>{
    setTitle("disconnected")
})
socket.on("connect",()=>{
    setTitle("connected")
})

socket.on("message",(message)=>{
    printMessage(message)
})

document.forms[0].onsubmit=()=>{
    var input=document.querySelector('#message')
    printMessage(input.value)
    socket.emit("chat",input.value)
    input.value=''
}



const printMessage=(message)=>{

    var p=document.createElement('p')
    p.innerText=message
    document.querySelector('div.message').appendChild(p)
}