// Simulador Inteligente
document.getElementById("btn").addEventListener("click", function(){
    let racao = parseFloat(document.getElementById("racao").value);
    if(isNaN(racao)||racao<=0){alert("Digite um valor válido!");return;}
    let economia = racao*365*0.3;
    let co2 = economia*0.5; // kg CO2 estimado
    document.getElementById("valor").innerText=economia.toFixed(2);
    document.getElementById("co2").innerText=co2.toFixed(2);
    document.getElementById("resultado").style.display="block";
});

// Animação ao rolar
const fadeElements=document.querySelectorAll(".fade");
function showOnScroll(){fadeElements.forEach(el=>{if(el.getBoundingClientRect().top<window.innerHeight-100)el.classList.add("show");});}
window.addEventListener("scroll",showOnScroll);
showOnScroll();

// Gráfico de Impacto Ambiental
const ctx=document.getElementById("grafico")||document.createElement("canvas");
ctx.id="grafico";
document.getElementById("impacto").appendChild(ctx);
new Chart(ctx,{type:"bar",data:{labels:["Economia Ração","Redução CO₂"],datasets:[{label:"Impacto Anual",data:[500,250],backgroundColor:["#7CFC00","#2e7d32"]}]},options:{responsive:true}});
