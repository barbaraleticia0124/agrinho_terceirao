// Objeto para controlar as pontuações do formulário
let pontuacao = {
    app: 0,
    cultivo: 0,
    bio: 0
};

// Função para gerenciar os botões de rádio customizados
function selectRadio(element, name, points) {
    // Remove a classe 'selected' dos elementos irmãos
    const options = element.parentElement.querySelectorAll('.radio-option');
    options.forEach(opt => opt.classList.remove('selected'));
    
    // Adiciona a classe no elemento clicado e marca o input oculto
    element.classList.add('selected');
    element.querySelector('input').checked = true;
    
    // Atualiza a pontuação correspondente
    pontuacao[name] = points;
}

// Atualiza a pontuação quando o select de cultivo muda
function atualizarScore() {
    const select = document.getElementById('cultivo');
    pontuacao.cultivo = parseInt(select.value) || 0;
}

// Algoritmo que processa os dados e exibe o resultado
function calcularCredito(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    
    // Soma o total de pontos ESG do usuário
    const totalScore = pontuacao.app + pontuacao.cultivo + pontuacao.bio;
    
    // Mapeamento dos elementos HTML que serão alterados
    const resultSection = document.getElementById('result-section');
    const scoreDisplay = document.getElementById('score-display');
    const statusBadge = document.getElementById('status-badge');
    const analiseTexto = document.getElementById('analise-texto');
    const bankList = document.getElementById('bank-list');

    // Insere o score na tela
    scoreDisplay.innerText = totalScore;
    
    // Regras de Classificação com base no nível sustentável
    if (totalScore >= 70) {
        statusBadge.innerText = "Aprovado para Green Bonds (Taxa AAA)";
        statusBadge.className = "status-badge status-aprovado";
        analiseTexto.innerHTML = `Parabéns, <strong>${nome}</strong>! Sua propriedade cumpre rígidos critérios ambientais. Você está apto a receber taxas de juros bonificadas de aproximadamente <strong>4.5% a.a.</strong> (Redução de 35% comparado ao mercado padrão).`;
        bankList.innerHTML = `<span>⚡ Banco do Planeta</span> <span>🌱 Fundo AgroVerde</span> <span>🏦 FinTech BioFin</span>`;
    } 
    else if (totalScore >= 40 && totalScore < 70) {
        statusBadge.innerText = "Aprovado com Condicionantes (Taxa AA)";
        statusBadge.className = "status-badge";
        statusBadge.style.background = "#bbdefb"; 
        statusBadge.style.color = "#0d47a1";
        analiseTexto.innerHTML = `Olá <strong>${nome}</strong>, seu score é bom. Você tem direito a taxas de <strong>6.8% a.a.</strong> se comprometendo a migrar para manejo biológico ou plantio direto nos próximos 12 meses.`;
        bankList.innerHTML = `<span>🏦 FinTech BioFin</span> <span>⚡ Banco do Planeta</span>`;
    } 
    else {
        statusBadge.innerText = "Requer Ajustes Ambientais";
        statusBadge.className = "status-badge status-analise";
        analiseTexto.innerHTML = `No momento, o nível de conformidade ambiental está abaixo do exigido pelos fundos de Linhas Verdes. Sugerimos a regularização da sua APP e adoção de práticas de Plantio Direto para reduzir sua taxa de juros atual (calculada em 12.5% a.a.).`;
        bankList.innerHTML = `<span>Consulte nossa consultoria técnica parceira para elevar seu score.</span>`;
    }

    // Exibe o painel de resultados com animação suave
    resultSection.style.display = 'block';
    resultSection.scrollIntoView({ behavior: 'smooth' });
}