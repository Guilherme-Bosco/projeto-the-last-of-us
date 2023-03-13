/*
  OBJETIVO - Quando clicar no botão temos que mostrar a imagem de fundo correspondente 
  Passo 1: Pegar elemento HTML dos botôes
  Passo 2: Identificar o clique do usuário
  Passo 3: Desmarcar o botão selecionado anterior
  Passo 4: Marcar o botão selecionado
  Passo 5: Esconder a imagem anterior
  Passo 6: Aparecer a imagem correspondente a selecionada 
*/

//Passo 1: Pegar elemento HTML dos botôes
const botoesCarrossel = document.querySelectorAll('.button');

//Passo 6: Aparecer a imagem correspondente a selecionada
const imagens = document.querySelectorAll('.imagem');

//Passo 2: Identificar o clique do usuário
botoesCarrossel.forEach ((button, indice)=>{
    button.addEventListener('click', () => {

        desmarcarBotãoAtivoAnterior();

        esconderBotãoSelecionado(button);

        esconderImagemAtivaAnterior();
        
        aparecerImagemSelecionada(indice);
      })
})

 
function aparecerImagemSelecionada(indice) {
  imagens[indice].classList.add('ativa');
}

function esconderBotãoSelecionado(button) {
  button.classList.add('selecionado');
}

function esconderImagemAtivaAnterior() {
  const imagemAtiva = document.querySelector('.ativa');
  imagemAtiva.classList.remove('ativa');
}

function desmarcarBotãoAtivoAnterior() {
  const botaoSelecionado = document.querySelector('.selecionado');
  botaoSelecionado.classList.remove('selecionado');
}

