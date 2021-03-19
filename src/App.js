import React from 'react';
import Filtro from './components/Filtro'
import Produto from './components/Produto'
import { Carrinho } from './components/Carrinho'
import styled from 'styled-components'
import imagemFundo from './imagens/imagem-fundo.jpg'
import Logo from './imagens/logo.png'


// ============== Geral
const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 70px 60px 1fr 70px;

  background-image: url(${imagemFundo});
  background-size: cover; 

  height: 100vh;
  @media (max-width: 1200px){
    grid-template-rows: 70px 60px 3fr 1fr 70px;
    min-height: 1080px;
  }

  @media (max-width: 950px){
    grid-template-rows: 70px 100px 3fr 1fr 70px;
  }

  @media (max-width: 470px){
    min-height: 1650px;
  }

`
// ============== Header
const Cabecalho = styled.header`  
  grid-column: 1 / -1;
  background-color: #04010e;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;

  border-bottom: 1px solid #002A5A;
`
const ImgLogo = styled.img`
  width: 3rem;
`
// ============== Main
const ContainerProdutos = styled.div`
  grid-row: 3 / 4;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  gap: 1rem;
  margin: 1rem;

  @media (max-width: 1200px){
    grid-column: -1/1;
  }

  @media (max-width: 950px){
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 700px){
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 470px){
    grid-template-columns: repeat(1,1fr);
    grid-template-rows: repeat(4,1fr)
  }

`
const ContainerCarrinho = styled.div`
  grid-row: 2 / 4;
  background-color: #00011F;
  color: white;
  padding: 1rem;
  border-radius: 2px;
  margin: 1rem 1rem 1rem 0;
  text-align: center;
  overflow-y: auto;

  @media (max-width: 1200px){
    grid-row: 4/5;
    grid-column: 1/-1;
    margin: 0 0 10px 0;
    display: flex;
    justify-content: center;
    &>h3{
      display: none;
    }

    &>hr{
      display:none;
    }
  }

  @media (max-width: 950px){
    flex-wrap: wrap;
  }
`

const ValorTotal = styled.h4`
  font-size: 1.5rem;

  @media (max-width: 1200px){
    grid-column: 2/3;
  }
`

// ============== Footer
const Rodape = styled.footer` 
  grid-column: 1 / -1;
  grid-row: 4/5;
  background-color: #04010e;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: white;

  @media (max-width: 1200px){
    grid-row: 5/6;
  }
`


export default class App extends React.Component {
  state = {
    produtos: [{
      id: 1,
      imagem: 'https://www.tagesspiegel.de/images/deutscher-astronaut-alexander-gerst/22647738/1-format2.jpg',
      nome: 'Roupa Astronauta',
      preco: 200,
    },
    {
      
      id: 2,
      imagem: 'https://www.sueddeutsche.de/image/sz.1.5212513/200x150?v=1613894708000',
      nome: 'Viagem para Marte',
      preco: 500,
    },
    {
      id: 3,
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Jupiter_Earth_Comparison.png/200px-Jupiter_Earth_Comparison.png',
      nome: 'Viagem para Júpiter',
      preco: 600,
    },
    {
      id: 4,
      imagem: 'https://www.sueddeutsche.de/image/sz.1.5232151/200x150?v=1615470283000',
      nome: 'Foguete Espacial',
      preco: 800,
    }],
    produtosCarrinho: [],
    valorMinimo: '',
    valorMaximo: '',
    buscarNome: '',
    ordem: 'crescente'
  }

  componentDidMount() {
    const carrinhoStorageString = localStorage.getItem("produtosCarrinho")
    if (carrinhoStorageString === null) return;

    const carrinhoStorageArray = JSON.parse(carrinhoStorageString)

    this.setState({
      produtosCarrinho: carrinhoStorageArray
    })
  }

  componentDidUpdate() {
    localStorage.setItem("produtosCarrinho", JSON.stringify(this.state.produtosCarrinho))
  }

  // tratamento dos inputs
  onChangeValorMinimo = (event) => {
    this.setState({ valorMinimo: event.target.value })
  }
  onChangeValorMaximo = (event) => {
    this.setState({ valorMaximo: event.target.value })
  }
  onChangeBuscarNome = (event) => {
    this.setState({ buscarNome: event.target.value })
  }

  onChangeOrdem = (event) => {
    this.setState({ ordem: event.target.value })
  }

  //Funções
  adicionarCarrinho = (id) => {
    const novoProdutosCarrinho = [...this.state.produtosCarrinho]
    let i
    for (i = 0; i < novoProdutosCarrinho.length; i++) {
      if (novoProdutosCarrinho[i].id === id) {
        novoProdutosCarrinho[i].quantidade += 1
        break
      }
    }
    if (i === novoProdutosCarrinho.length) {
      const filtrado = this.state.produtos.filter((item) => {
        if (item.id === id) return true
      })
      filtrado[0].quantidade = 1
      novoProdutosCarrinho.push(filtrado[0])
    }
    this.setState({
      produtosCarrinho: novoProdutosCarrinho
    })
  }
  removerProduto = (id) => {
    const novaLista = [...this.state.produtosCarrinho]
    const indexProduto = novaLista.findIndex((item) => {
      return item.id === id
    })

    for (let i = 0; i < novaLista.length; i++) {
      if (i === indexProduto) {
        if (novaLista[i].quantidade > 1) {
          novaLista[i].quantidade -= 1
        } else {
          novaLista.splice(indexProduto, 1)
        }
      }
    }

    this.setState({ produtosCarrinho: novaLista })

  }

  render() {
    let valorTotal = 0

    const listaCarrinho = this.state.produtosCarrinho.map((item) => {
      valorTotal += item.preco * item.quantidade
      return <Carrinho
        nomeProduto={item.nome}
        precoProduto={item.preco}
        quantidadeProduto={item.quantidade}
        onClickRemoverProduto={() => this.removerProduto(item.id)}
      />
    })
    const listaFiltrada = this.state.produtos.filter((item) => {
      if (((item.preco >= this.state.valorMinimo || this.state.valorMinimo === '') &&
        (item.preco <= this.state.valorMaximo || this.state.valorMaximo === '') &&
        (item.nome.toLowerCase().includes(this.state.buscarNome.toLowerCase()) || this.state.buscarNome === ''))) {
        return true
      } else {
        return false
      }
    })

    if (this.state.ordem === 'decrescente') {
      listaFiltrada.reverse()
    }

    const listaProdutos = listaFiltrada.map((item) => {

      return (
        <Produto
          key={item.id}
          linkImagem={item.imagem}
          nomeProduto={item.nome}
          precoProduto={item.preco}
          adicionarCarrinho={() => this.adicionarCarrinho(item.id)} />
      )
    })

    return (
      <Container>
        <Cabecalho> <ImgLogo src={Logo} /><h1>AstroLoja</h1> </Cabecalho>
        <Filtro
          valorMinimo={this.state.valorMinimo}
          valorMaximo={this.state.valorMaximo}
          buscarNome={this.state.buscarNome}
          onChangeValorMinimo={this.onChangeValorMinimo}
          onChangeValorMaximo={this.onChangeValorMaximo}
          onChangeBuscaNome={this.onChangeBuscarNome}
          onChangeOrdem={this.onChangeOrdem}
        />
        <ContainerProdutos>
          {listaProdutos}
        </ContainerProdutos>
        <ContainerCarrinho>
          <h3>Carrinho de compras: </h3>
          <hr />
          {listaCarrinho}
          <ValorTotal>Valor total: R${valorTotal}</ValorTotal>
        </ContainerCarrinho>

        <Rodape> &copy;AstroLoja </Rodape>
      </Container >
    );
  }

}

