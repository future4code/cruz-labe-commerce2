import React from 'react';
import Filtro from './components/Filtro'
import Produto from './components/Produto'
import {Carrinho} from './components/Carrinho'
import styled from 'styled-components'

const Container = styled.div `
  display: flex;
`

export default class App extends React.Component {
  state = {
    produtos: [{
      id: 1,
      nome: '',
      preco: '',
    }],
    valorMinimo: '',
    valorMaximo: '',
    buscarNome: '',
    ordem: ''
  }

  // tratamento dos inputs
  valorMinimo = (event) => {
    this.setState({ valorMinimo: event.target.value })
  }
  valorMaximo = (event) => {
    this.setState({ valorMaximo: event.target.value })
  }
  buscarNome = (event) => {
    this.setState({ buscarNome: event.target.value })
  }
  ordem = (event) => {
    this.setState({ ordem: event.target.value })
  }

  adicionarCarrinho = () => {

  }

  removerProduto = () => {

  }

  render() {
    const valorTotal = 0
    return (
      <Container>
        <Filtro
          onChangeValorMinimo={this.valorMinimo}
          onChangeValorMaximo={this.valorMaximo}
          onChangeBuscaNome={this.buscarNome}
          onChangeOrdenacao={this.ordem}
        />
        <div>
          <Produto
            linkImagem={'https://picsum.photos/200/150?n=1'}
            nomeProduto={'Produto 1'}
            precoProduto={'R$200'}
            adicionarCarrinho={() => this.adiconarCarrinho(this.state.id)}
          />
          <Produto
            linkImagem={'https://picsum.photos/200/150?n=2'}
            nomeProduto={'Produto 2'}
            precoProduto={'R$100'}
            adicionarCarrinho={() => this.adiconarCarrinho(this.state.id)}
          />
        </div>
        <Carrinho 
            nomeProduto={this.state.nome}
            precoProduto={this.state.preco}
            onClickRemoverProduto={this.removerProduto}
            valorTotalCompras={valorTotal}
        />
      </Container>
    );
  }

}

