/*
quando clicar no carro da listagem temos que esconder o cartão do carro aberto e mostrar o cartão correspondente ao que foi selecionado na listagem

pra isso vamos precisar trabalhar com dois elementos
1 - listagem
2 - cartão do veiculo

precisamos criar duas variáveis no JS pra trabalhar com os elementos da tela

vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de carros

- remover a classe aberto só do cartão que está aberto
- ao clicar em um veiculo da listagem pegamos o id desse pokémon pra saber qual cartão mostrar
-remover a classe ativo que marca o pokémon selecionado
-adicionar a classe ativo no item da lista selecionado 
*/


// precisamos criar duas variáveis no JS pra trabalhar com os elementos da tela
const listaSelecaoCarros = document.querySelectorAll('.veiculo')
const carrosCard = document.querySelectorAll('.cartao-carro')

listaSelecaoCarros.forEach(veiculo => {
    //vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de veiculo
    veiculo.addEventListener('click', () => {
        //remover a classe aberto só do cartão que está aberto
        const cartaoCarroAberto = document.querySelector('.aberto')        
        cartaoCarroAberto.classList.remove('aberto')

        //ao clicar em um pokémon da listagem pegamos o id desse pokémon pra saber qual cartão mostrar
        const idCarroSelecionado = veiculo.attributes.id.value

        const idDoCartaoCarroParaAbrir = 'cartao-' + idCarroSelecionado
        const cartaoCarroParaAbrir = document.getElementById(idDoCartaoCarroParaAbrir)
        cartaoCarroParaAbrir.classList.add('aberto')

        //remover a classe ativo que marca o pokémon selecionado
        const carroAtivoNaListagem = document.querySelector('.ativo')
        carroAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo no item da lista selecionado 
        const carroSelecionadoNaListagem = document.getElementById(idCarroSelecionado)
        carroSelecionadoNaListagem.classList.add('ativo')

    })
})