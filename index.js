
// Objetivo para projeto X-MEM
const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('click', () => {
       
       const personagemSelecionado = document.querySelector('.selecionado');
       personagemSelecionado.classList.remove('selecionado'); 

       personagem.classList.add('selecionado');


      const imagempersonagemgrande = document.querySelector('.personagem-grande');
      
      const idPersonagem = personagem.attributes.id.value;

      imagempersonagemgrande.src = `./imagens/card-${idPersonagem}.png`;

      const nomepersonagem = document.getElementById('nome-personagem');
      nomepersonagem.innerText = personagem.getAttribute('data-nome');

      const descricaoPersonagem = document.getElementById('descricao-personagem');
      descricaoPersonagem.innerText = personagem.getAttribute('data-description');

      

      
    })
    
})