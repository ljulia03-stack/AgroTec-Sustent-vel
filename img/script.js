document.getElementById("btn").addEventListener("click", function(){

    let racao = parseFloat(document.getElementById("racao").value);

    if(isNaN(racao) || racao <= 0){
        alert("Digite um valor válido!");
        return;
    }

    let economia = racao * 365 * 0.3;

    document.getElementById("valor").innerText = economia.toFixed(2);
    document.getElementById("resultado").style.display = "block";
});
