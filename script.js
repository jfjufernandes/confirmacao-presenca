const listaConvidados = [
    "Melissa Valente", "Eduardo Valente", "Weny Cappellesso", "Marcos Paulo dos Santos Crois", 
    "Erliane dos Santos Crois", "Leandro Pires Laurindo", "Augusto Pires Laurindo", 
    "Karine Pires Laurindo", "Cleonice Mathias", "Antônio Mathias", "Aline Mathias", 
    "Miguel Mathias", "Alisson Mathias", "Carol Mathias", "Jessica Fernandes Cassettari", 
    "Marcio Fernandes Cassettari", "Jefferson Fernandes", "Luana Fernandes", "Wendell Dellicolli", 
    "Sandra Fernandes", "Claudio Fernandes", "Michel Fernandes", "Isabela Fernandes", 
    "Maicon Regis", "Willian Fernandes Regis", "Beatriz Fernandes Regis", "Rafael Fernandes", 
    "Renata Fernandes", "Cleia Mathias", "Agenar Mathias Fernandes", "Deyvid Mathias dos Santos", 
    "Victoria Baranselli Sestito", "Luiz Carlos Da Conceição", "Juliana Queiroz", "Yasmin Queiroz", 
    "Joselaine Fernandes Piovesan", "Leandro Piovesan", "Helena Fernandes Piovesan", "Junior Fernandes", 
    "Elisandra Bertol Fernandes", "Nete Da Conceição", "Beto Da Conceição", "Junior Ximenes", 
    "Ana Paula Ximenes", "Mario Azevedo", "Claudia Azevedo", "Patricia Magalhães", "Geovani Magalhães", 
    "Paulo Roberto", "Najara", "Ivone Ferreira", "Vitor Ximenes", "Maria Julia Ximenes", "Pedro Azevedo", 
    "Isadora Azevedo", "Gabriel Ximenes", "Giovana Magalhães", "Rafael Magalhães", "Elvira Magalhães", 
    "Vô Botelho", "Odete Botelho", "Rose Krutsch", "Eduardo Botelho", "Felipe Silva", "Carol Silva", 
    "Mateus Vieira", "Fernanda Lauxen", "Bruno Matheus Machado", "Lucas Ferrari", "Maira Ferrari", 
    "Maria Eduarda Ferrarin", "Igor Drehmer", "Davi Dal'maso", "Leonardo Armange", "Armando Martins", 
    "Clara Di Felicce", "Caio Di Felicce", "Lucas Sales", "Edileusa Fernandes", "Claudir Fernandes", 
    "Juliana Botelho", "Marcos Silva", "Aderaldo Matias", "Lindalva Cruz", "Odirlei Simensato", 
    "Vilaine Matias", "Lais Matias", "Cleverson Alves", "Laryssa Alves", "Rosana Alves", 
    "Claudinei Alves", "Charles Debiasi Nascimento", "Maristela Debiasi Nascimento", 
    "Arthur Debiasi Nascimento", "Laura Debiasi Nascimento", "Thays Pertile Anchieta", 
    "Aldrei Anchieta", "Lorenzo Anchieta", "Emanuela Anchieta", "Enrico Anchieta", 
    "Fernanda Casagrande", "Andreia Cardoso", "Otoniel Cardoso", "Ivo Misael", "Jaqueline Misael", 
    "Pedro Misael", "Beatriz Fellini", "Jefferson Borges", "Claudia Borges", "Renato Bueno", 
    "Natasha Bueno", "Mirela Bueno", "Pedro Bueno", "Felipe Albrecht", "Nayana Albrecht", 
    "Miguel Albrecht", "Levi Albrecht", "Joaquim Albrecht", "Cristian Kossatz", "Rayza Verona", 
    "Ana Verona", "Ester Verona", "Sara Verona", "Estêvão Verona", "Natã Verona"
];

function buscarNome() {
    const input = document.getElementById('busca').value.toLowerCase();
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    if (input.length === 0) {
        return;
    }

    const nomesFiltrados = listaConvidados.filter(nome => nome.toLowerCase().includes(input));

    if (nomesFiltrados.length === 0) {
        resultado.innerHTML = '<div class="nome-item">Não encontrado</div>';
    } else {
        nomesFiltrados.forEach(nome => {
            const div = document.createElement('div');
            div.className = 'nome-item';
            div.textContent = nome;
            div.onclick = () => confirmarPresenca(nome);
            resultado.appendChild(div);
        });
    }
}

function confirmarPresenca(nome) {
    const confirmacao = prompt(`${nome}, você irá comparecer? (Digite "Sim" ou "Não")`).toLowerCase();
    const mensagem = document.getElementById('mensagem');

    if (confirmacao === 'sim' || confirmacao === 'não' || confirmacao === 'nao') {
        const textoConfirmacao = confirmacao === 'sim' ? 'Irei comparecer' : 'Não poderei comparecer';
        mensagem.textContent = `Confirmação enviada: ${nome} - ${textoConfirmacao}`;
        mensagem.className = 'mensagem sucesso';
        mensagem.style.display = 'block';

        // Enviar confirmação por e-mail
        const assunto = `Confirmação de Presença - ${nome}`;
        const corpo = `${nome} confirmou: ${textoConfirmacao}`;
        window.location.href = `mailto:jueluiz25@gmail.com?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
    } else {
        mensagem.textContent = 'Por favor, digite "Sim" ou "Não".';
        mensagem.className = 'mensagem erro';
        mensagem.style.display = 'block';
    }
}