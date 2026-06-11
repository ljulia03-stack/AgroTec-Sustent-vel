# AgroTec-Sustentável
Projeto Agrinho 2026 - Agro forte, futuro sustentável.
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AgroTec Sustentável</title>
    <link rel="stylesheet" href="style.css">
    <style>
        /* Estilos básicos para visualização rápida */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            line-height: 1.6;
        }

        header, nav, footer {
            text-align: center;
            padding: 1em;
            background-color: #f0f0f0;
        }

        .logo {
            width: 100px;
            display: block;
            margin: 0 auto 10px;
        }

        nav a {
            margin: 0 10px;
            text-decoration: none;
            color: #333;
            font-weight: bold;
        }

        .banner-img {
            width: 100%;
            max-height: 300px;
            object-fit: cover;
        }

        .container {
            padding: 2em;
        }

        .img-wrapper {
            text-align: center;
            margin: 1em 0;
        }

        .content-img {
            width: 80%;
            max-width: 600px;
        }

        .card-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1em;
            margin-top: 1em;
        }

        .card {
            border: 1px solid #ccc;
            padding: 1em;
            border-radius: 5px;
            width: 200px;
            background-color: #fafafa;
        }

        .simulador-box {
            margin-top: 1em;
            text-align: center;
        }

        #resultado {
            margin-top: 1em;
            display: none;
            background: #e0ffe0;
            padding: 1em;
            border-radius: 5px;
        }
    </style>
</head>
<body>

<header>
    <div class="header-container">
        <img src="img/logo-agrotec.png" alt="Logo AgroTec" class="logo">
        <h1>AgroTec Sustentável</h1>
        <p>Tecnologia no campo para um amanhã mais verde</p>
    </div>
</header>

<nav>
    <a href="#sobre">Sobre o Projeto</a>
    <a href="#maquete">Maquete & Protótipo</a>
    <a href="#comedouro">Comedouro Automatizado</a>
    <a href="#simulador">Simulador</a>
</nav>

<div class="banner-section">
    <img src="img/banner.png" alt="Banner AgroTec Sustentável" class="banner-img">
</div>

<div class="container">
    <section id="sobre">
        <h2>Sobre o Projeto</h2>
        <p>O <strong>AgroTec Sustentável</strong> é uma iniciativa desenvolvida para o Concurso Agrinho 2026. Nosso objetivo é integrar automação acessível de baixo custo (usando Arduino/Internet das Coisas) com práticas de agricultura e pecuária familiares, focando na otimização de recursos e na redução do desperdício.</p>
    </section>

    <section id="maquete">
        <h2>Maquete Geral do Projeto</h2>
        <p>Nossa maquete representa uma propriedade rural inteligente integrada, onde a energia solar alimenta os sistemas automáticos de irrigação e trato dos animais.</p>
        <div class="img-wrapper">
            <img src="img/maquete-geral.png" alt="Visão geral da maquete do projeto" class="content-img">
        </div>
    </section>

    <section id="comedouro">
        <h2>O Comedouro Automatizado Inteligente</h2>
        <p>Para evitar o desperdício de ração e garantir a alimentação dos animais na dosagem exata, desenvolvemos um protótipo de comedouro automatizado por sensores de presença e peso.</p>
        <div class="img-wrapper">
            <img src="img/comedouro.png" alt="Protótipo do comedouro automatizado" class="content-img">
        </div>
        
        <div class="card-container">
            <div class="card">
                <h3>Economia</h3>
                <p>Reduz em até 30% o desperdício de ração acumulada ou exposta ao tempo.</p>
            </div>
            <div class="card">
                <h3>Saúde Animal</h3>
                <p>Evita a proliferação de pragas e mantém o alimento sempre fresco.</p>
            </div>
            <div class="card">
                <h3>Sustentabilidade</h3>
                <p>Menos resíduos gerados e maior controle produtivo na propriedade.</p>
            </div>
        </div>
    </section>

    <section id="simulador">
        <h2>Simulador de Economia AgroTec</h2>
        <p>Insira a quantidade de ração usada por dia para ver o impacto da automação na sua produção:</p>
        
        <div class="simulador-box">
            <label for="racao">Ração diária utilizada (em kg):</label>
            <input type="number" id="racao" placeholder="Ex: 50" min="0">
            <button id="btn-calcular">Calcular Economia Anual</button>
            
            <div id="resultado">
                <p>⚡ <strong>Economia estimada de ração:</strong> <span id="res-kg">0</span> kg por ano.</p>
                <p>🌱 <strong>Impacto ambiental:</strong> Menor pegada de carbono e maior eficiência no manejo!</p>
            </div>
        </div>
    </section>
</div>

<footer>
    <p>&copy; 2026 AgroTec Sustentável - Projeto Agrinho | Criado com foco no nosso planeta 🌍</p>
</footer>

<script>
    // Simulador de economia
    document.getElementById('btn-calcular').addEventListener('click', function() {
        const racaoDiaria = parseFloat(document.getElementById('racao').value);
        if (!isNaN(racaoDiaria) && racaoDiaria > 0) {
            // Supondo que a economia seja 30% da ração anual
            const economiaAnual = racaoDiaria * 365 * 0.3;
            document.getElementById('res-kg').textContent = economiaAnual.toFixed(2);
            document.getElementById('resultado').style.display = 'block';
        } else {
            alert('Por favor, insira uma quantidade válida de ração.');
        }
    });
</script>

</body>
</html>
