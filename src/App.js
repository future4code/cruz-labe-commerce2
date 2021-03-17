import React from 'react';
import Filtro from './components/Filtro'
import Produto from './components/Produto'
import { Carrinho } from './components/Carrinho'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`

export default class App extends React.Component {
  state = {
    produtos: [{
      id: 1,
      imagem: 'https://picsum.photos/200/150?n=1',
      nome: 'Produto 1',
      preco: 'R$200',
    },
    {
      id: 2,
      imagem: 'https://picsum.photos/200/150?n=2',
      nome: 'Produto 2',
      preco: 'R$50',
    },
    {
      id: 3,
      imagem: 'https://picsum.photos/200/150?n=3',
      nome: 'Produto 3',
      preco: 'R$100',
    }],
    produtosCarrinho: [],
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

  adicionarCarrinho = (id) => {
    const produtos = this.state.produtos.filter((item) => {
      if (item.id === id) {
        return true
      }
    })

    const listaProdutos = [...this.state.produtosCarrinho, produtos]

    this.setState({produtosCarrinho: listaProdutos})
  }

  removerProduto = () => {

  }

  areaProdutos = () => {

  }
  render() {
    const valorTotal = 0
    const listaProdutos = this.state.produtos.map((item) => {
      return (
        <Produto
          key={item.id}
          linkImagem={item.imagem}
          nomeProduto={item.nome}
          precoProduto={item.preco}
          adicionarCarrinho={() => this.adicionarCarrinho(item.id)}
        />
      )
    })

    return (
      <Container>
        <Filtro
          onChangeValorMinimo={this.valorMinimo}
          onChangeValorMaximo={this.valorMaximo}
          onChangeBuscaNome={this.buscarNome}
          onChangeOrdenacao={this.ordem}
        />
        <div>
          {listaProdutos}
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

