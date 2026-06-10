// 1. Efeito de Rolagem Suave (Smooth Scroll) para o menu de navegação
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Cancela o comportamento de pulo abrupto padrão
        
        const alvoId = this.getAttribute('href');
        const secaoAlvo = document.querySelector(alvoId);
        
        if (secaoAlvo) {
            secaoAlvo.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 2. Lógica Interativa do Simulador de Economia de Ração
document.getElementById('btn-calcular').addEventListener('click', function() {
    const inputRacao = document.getElementById('racao');
    const valorRacaoDiaria = parseFloat(inputRacao.value);
    const boxResultado = document.getElementById('resultado');
    const spanKg = document.getElementById('res-kg');

    // Validação simples para conferir se o número digitado é válido
    if (isNaN(valorRacaoDiaria) || valorRacaoDiaria <= 0) {
        alert("Por favor, digite um valor válido de ração (maior que zero).");
        boxResultado.style.display = "none";
        return;
    }

    // Base de cálculo baseada em dados reais: a automação evita cerca de 25% de perda
    // Cálculo: Ração diária * 25% de desperdício evitado * 365 dias no ano
    const economiaAnual = valorRacaoDiaria * 0.25 * 365;

    // Atualiza o texto na tela formatando o número de forma amigável
    spanKg.textContent = economiaAnual.toFixed(1).replace('.', ',');
    
    // Torna a caixa de resultados visível
    boxResultado.style.display = "block";
});
