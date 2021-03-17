import React from 'react';
import Filtro from './components/Filtro'
import Produto from './components/Produto'
import { Carrinho } from './components/Carrinho'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
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
    produtosCarrinho: [{
      nomeCarrinho: '',
      precoCarrinho: 0,
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

  //Funções
  adicionarCarrinho = (id) => {
    const filtrado = this.state.produtos.filter((item) => {
      if (item.id === id) {
        return true
      }
    })

    const listaProdutos = [filtrado, ...this.state.produtosCarrinho]
    console.log(filtrado)


    this.setState({ produtosCarrinho: listaProdutos })
    console.log(this.state.produtosCarrinho)
  }

  removerProduto = () => {
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
          nomeProduto={this.state.nomeCarrinho}
          precoProduto={this.state.precoCarrinho}
          onClickRemoverProduto={this.removerProduto}
          valorTotalCompras={valorTotal}
        />
      </Container>
    );
  }

}

