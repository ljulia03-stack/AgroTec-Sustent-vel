document.getElementById('btn-calcular').addEventListener('click', function() {
    const racaoDiaria = parseFloat(document.getElementById('racao').value);
    if (!isNaN(racaoDiaria) && racaoDiaria > 0) {
        const economiaAnual = racaoDiaria * 365 * 0.3;
        document.getElementById('res-kg').textContent = economiaAnual.toFixed(2);
        document.getElementById('resultado').style.display = 'block';
    } else {
        alert('Digite uma quantidade válida de ração!');
    }
});
