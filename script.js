// CONFIGURAÇÃO: substitua pela URL REAL do material após publicar.
const MATERIAL_REAL_URL = "https://example.org/material-real";

function show(id){
  document.querySelectorAll(".card").forEach(x=>x.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
}
document.getElementById("continue1").addEventListener("click",()=>show("screen2"));
document.getElementById("continue2").addEventListener("click",()=>show("screen3"));

// O campo é readonly: não aceita entrada e nenhum formulário existe.
document.getElementById("fakeEmail").addEventListener("click",()=>show("screen4"));
document.getElementById("fakeSubmit").addEventListener("click",()=>show("screen4"));
document.getElementById("continue4").addEventListener("click",()=>show("screen5"));
document.getElementById("realMaterial").addEventListener("click",()=>{
  if(MATERIAL_REAL_URL.includes("example.org")){
    alert("O endereço do material real ainda não foi configurado. Edite MATERIAL_REAL_URL em script.js.");
    return;
  }
  location.href=MATERIAL_REAL_URL;
});