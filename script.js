document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Validação e Envio do Formulário de Contato
    const contactForm = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede a página de recarregar

        // Captura os dados digitados
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simulação de envio bem-sucedido
        if (name && email && message) {
            formResponse.textContent = `Obrigado, ${name}! Sua mensagem sobre sustentabilidade no agro foi enviada com sucesso.`;
            formResponse.style.color = '#2e7d32'; // Verde para sucesso
            
            // Limpa o formulário
            contactForm.reset();
        } else {
            formResponse.textContent = 'Por favor, preencha todos os campos corretamente.';
            formResponse.style.color = '#cc0000'; // Vermelho para erro
        }
    });

    // 2. Efeito visual simples de mudança no cabeçalho ao rolar a página
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#f4f9f4';
            header.style.transition = 'background-color 0.4s';
        } else {
            header.style.backgroundColor = '#ffffff';
        }
    });
});