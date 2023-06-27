let empleo=document.querySelector("#empleado")
let horas=document.querySelector("#horas")
let vhoras=document.querySelector("#vhoras")
let antiguedad=document.querySelector("#antiguedad")
let vanti=document.querySelector("#vanti")
let reiniciar=document.querySelector("#reiniciar")
let salario=document.querySelector("#salarioNeto")
let totalper=document.querySelector("#totalper")
let totalded=document.querySelector("#totalded")


horas.oninput=()=>{
    vhoras.innerHTML=horas.value
    calcular()
}
antiguedad.oninput=()=>{
    vanti.innerHTML=antiguedad.value
    calcular()
}
empleo.onchange=()=>{
    calcular()
}


  const calcular=()=>{


    let h=parseFloat(document.querySelector("#horas").value)
    let a=parseFloat(document.querySelector("#antiguedad").value)

     //percepciones
if(empleo.value==1){

    let sueldoB=document.querySelector("#sueldoBase")
    let canasta=document.querySelector("#canasta")
    let estimulo=document.querySelector("#estimulo")
    let antiguedades=document.querySelector("#antiguedades")
    let extra=document.querySelector("#extra")

  
    let sueldito=parseFloat((h*200).toFixed(2))
    let vc=parseFloat((sueldito*0.045).toFixed(2))
    let ve=parseFloat((sueldito*0.02).toFixed(2))
    let va=parseFloat((200*a).toFixed(2))
    let vex=0

    sueldoB.innerHTML="$"+sueldito 
    canasta.innerHTML="$"+vc
    estimulo.innerHTML="$"+ve
    antiguedades.innerHTML="$"+va

    if(h>40){
      vex=parseFloat((((h-40))*(3)*(200)).toFixed(2))
      extra.innerHTML="$"+vex
    }else{
      extra.innerHTML="$0"
    }
    
    let percep=(sueldito+vc+ve+va+vex)
    totalper.innerHTML="$"+percep.toFixed(2)


    //deducciones

    let isr=document.querySelector("#isr")
    let servicio=document.querySelector("#servicio")
    let sindicato=document.querySelector("#sindicato")
    let afore=document.querySelector("#afore")
    let capi=document.querySelector("#capi")

    let vis=parseFloat((sueldito*0.16).toFixed(2))
    let vser=parseFloat((sueldito*0.04625).toFixed(2))
    let vsin=parseFloat((sueldito*0.01).toFixed(2))
    let vafo=parseFloat((sueldito*0.061).toFixed(2))
    let vca=parseFloat((sueldito*0.014).toFixed(2))


    isr.innerHTML="$"+vis
    servicio.innerHTML="$"+vser
    sindicato.innerHTML="$"+vsin
    afore.innerHTML="$"+vafo
    capi.innerHTML="$"+vca

    let deduc=(vis+vser+vsin+vafo+vca)
    totalded.innerHTML="$"+deduc.toFixed(2)
    //sueldo neto

    let salariof=(percep-deduc)
    salario.innerHTML="$"+salariof.toFixed(2)

}
if(empleo.value==2){

    let sueldoB=document.querySelector("#sueldoBase")
    let canasta=document.querySelector("#canasta")
    let estimulo=document.querySelector("#estimulo")
    let antiguedades=document.querySelector("#antiguedades")
    let extra=document.querySelector("#extra")

  
    let sueldito=parseFloat((h*150).toFixed(2))
    let vc=parseFloat((sueldito*0.045).toFixed(2))
    let ve=parseFloat((sueldito*0.02).toFixed(2))
    let va=parseFloat((200*a).toFixed(2))
    let vex=0

    sueldoB.innerHTML="$"+sueldito 
    canasta.innerHTML="$"+vc
    estimulo.innerHTML="$"+ve
    antiguedades.innerHTML="$"+va

    if(h>40){
      vex=parseFloat((((h-40))*(3)*(200)).toFixed(2))
      extra.innerHTML="$"+vex
    }else{
      extra.innerHTML="$0"
    }
    
    let percep=(sueldito+vc+ve+va+vex)
    totalper.innerHTML="$"+percep.toFixed(2)


    //deducciones

    let isr=document.querySelector("#isr")
    let servicio=document.querySelector("#servicio")
    let sindicato=document.querySelector("#sindicato")
    let afore=document.querySelector("#afore")
    let capi=document.querySelector("#capi")

    let vis=parseFloat((sueldito*0.16).toFixed(2))
    let vser=parseFloat((sueldito*0.04625).toFixed(2))
    let vsin=parseFloat((sueldito*0.01).toFixed(2))
    let vafo=parseFloat((sueldito*0.061).toFixed(2))
    let vca=parseFloat((sueldito*0.014).toFixed(2))


    isr.innerHTML="$"+vis
    servicio.innerHTML="$"+vser
    sindicato.innerHTML="$"+vsin
    afore.innerHTML="$"+vafo
    capi.innerHTML="$"+vca

    let deduc=(vis+vser+vsin+vafo+vca)
    totalded.innerHTML="$"+deduc.toFixed(2)
    //sueldo neto

    let salariof=(percep-deduc)
    salario.innerHTML="$"+salariof.toFixed(2)

}
if(empleo.value==3){

    let sueldoB=document.querySelector("#sueldoBase")
    let canasta=document.querySelector("#canasta")
    let estimulo=document.querySelector("#estimulo")
    let antiguedades=document.querySelector("#antiguedades")
    let extra=document.querySelector("#extra")

  
    let sueldito=parseFloat((h*100).toFixed(2))
    let vc=parseFloat((sueldito*0.045).toFixed(2))
    let ve=parseFloat((sueldito*0.02).toFixed(2))
    let va=parseFloat((200*a).toFixed(2))
    let vex=0

    sueldoB.innerHTML="$"+sueldito 
    canasta.innerHTML="$"+vc
    estimulo.innerHTML="$"+ve
    antiguedades.innerHTML="$"+va

    if(h>40){
      vex=parseFloat((((h-40))*(3)*(200)).toFixed(2))
      extra.innerHTML="$"+vex
    }else{
      extra.innerHTML="$0"
    }
    
    let percep=(sueldito+vc+ve+va+vex)
    totalper.innerHTML="$"+percep.toFixed(2)


    //deducciones

    let isr=document.querySelector("#isr")
    let servicio=document.querySelector("#servicio")
    let sindicato=document.querySelector("#sindicato")
    let afore=document.querySelector("#afore")
    let capi=document.querySelector("#capi")

    let vis=parseFloat((sueldito*0.16).toFixed(2))
    let vser=parseFloat((sueldito*0.04625).toFixed(2))
    let vsin=parseFloat((sueldito*0.01).toFixed(2))
    let vafo=parseFloat((sueldito*0.061).toFixed(2))
    let vca=parseFloat((sueldito*0.014).toFixed(2))


    isr.innerHTML="$"+vis
    servicio.innerHTML="$"+vser
    sindicato.innerHTML="$"+vsin
    afore.innerHTML="$"+vafo
    capi.innerHTML="$"+vca

    let deduc=(vis+vser+vsin+vafo+vca)
    totalded.innerHTML="$"+deduc.toFixed(2)
    //sueldo neto

    let salariof=(percep-deduc)
    salario.innerHTML="$"+salariof.toFixed(2)

}
}



reiniciar.onclick=()=>{

    href=document.querySelector("#tema1")

    Swal.fire({
        title: 'Quieres reiniciar tu formulario?',
        showDenyButton: true,
        confirmButtonText: 'Reiniciar',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Reiniciado!', '', 'success')
          empleo.value=1
          horas.value=1
          vhoras.innerHTML="1"
          antiguedad.value=1
          vanti.innerHTML="1"
          calcular()
        } else if (result.isDenied) {
          Swal.fire('Sigues con tus mismos parametros', '', 'info')
        }
      })


}