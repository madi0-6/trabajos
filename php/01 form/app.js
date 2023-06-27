let btnReiniciar = document.querySelector("#reiniciar");
let btnEvaluar = document.querySelector("#evaluar");
btnEvaluar.onclick=()=>{
    var correctas=[4,3,4,4,2,3,4,3,3,1];
    var aciertos=0;
for(i=1; i<=10; i++){
    let r1=document.querySelector("#p" +i+ "r1");
    let r2=document.querySelector("#p" +i+ "r2");
    let r3=document.querySelector("#p" +i+ "r3");
    let r4=document.querySelector("#p" +i+ "r4");
if(!r1.checked && !r2.checked && !r3.checked && !r4.checked){
    Swal.fire({
        icon:'error',
        title:'ERROR',
        text:'RESPONDE TODAS LAS PREGUNTAS',
        footer:'Quiz'});
    return;
}
    var correcta=document.querySelector("#p"+i+"r"+correctas[i-1]);
    if(correcta.checked){
        aciertos++;
    }
    if(aciertos>=6){
        Swal.fire({icon:'succes',title:'Aprobado',text:'Calificacion  '+(aciertos*1),footer:'Quiz'});
    }else{
        Swal.fire({icon:'error',title:'NO Aprobado',text:'Calificacion  '+(aciertos*1),footer:'Quiz'});
    }
}

}
btnReiniciar.onclick=()=>{
    for(i=1; i<=10; i++){
        let r1=document.querySelector("#p" +i+ "r1").checked=false;
        let r2=document.querySelector("#p" +i+ "r2").checked=false;
        let r3=document.querySelector("#p" +i+ "r3").checked=false;
        let r4=document.querySelector("#p" +i+ "r4").checked=false;

}

}