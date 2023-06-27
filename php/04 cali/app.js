let ingles=document.querySelector("#ingles")
let vingles=document.querySelector("#vingles")
let fisica=document.querySelector("#fisica")
let vfisica=document.querySelector("#vfisica")
let ecologia=document.querySelector("#ecologia")
let vecologia=document.querySelector("#vecologia")
let calculo=document.querySelector("#calculo")
let vcalculo=document.querySelector("#vcalculo")
let progra=document.querySelector("#progra")
let vprogra=document.querySelector("#vprogra")

let promedio=document.querySelector("#promedio")

ingles.oninput=()=>{
    vingles.innerHTML=ingles.value
    final()
}
fisica.oninput=()=>{
    vfisica.innerHTML=fisica.value
    final()
}
ecologia.oninput=()=>{
    vecologia.innerHTML=ecologia.value
    final()
}
calculo.oninput=()=>{
    vcalculo.innerHTML=calculo.value
    final()
}
progra.oninput=()=>{
    vprogra.innerHTML=progra.value
    final()
}

const final=()=>{
    let v1=parseFloat(ingles.value)
    let v2=parseFloat(fisica.value)
    let v3=parseFloat(ecologia.value)
    let v4=parseFloat(calculo.value)
    let v5=parseFloat(progra.value)

    let resultado=((v1+v2+v3+v4+v5)*10)/50
    promedio.innerHTML=resultado.toFixed(1)

    if(resultado>=5 && resultado<6){
        promedio.style.color="red"
    }
    else if(resultado>=6 && resultado<8){
        promedio.style.color="yellow"
    }
    else if(resultado>=8){
        promedio.style.color="green"
    }
    
}



