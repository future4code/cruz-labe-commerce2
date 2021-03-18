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
      preco: 50,
    },
    {
      id: 2,
      imagem: 'https://picsum.photos/200/150?n=2',
      nome: 'Produto 2',
      preco: 100,
    },
    {
      id: 3,
      imagem: 'https://picsum.photos/200/150?n=3',
      nome: 'Produto 3',
      preco: 200,
    }],
    produtosCarrinho: [{
      id: 0,
      imagem: '',
      nome: '',
      preco: 0,
      quantidade: 0
    }],
    valorMinimo: '',
    valorMaximo: '',
    buscarNome: '',
    ordem: ''
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
    //Copiando objeto e buscando pelo index do item a ser excluido
    const novaLista = [...this.state.produtosCarrinho]
    const indexProduto = novaLista.findIndex((item) => {
      return item.id === id
    })

    //Verificando se tem mais de um item no carrinho
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
      if (((item.preco > this.state.valorMinimo || this.state.valorMinimo === '' ) && 
        (item.preco < this.state.valorMaximo || this.state.valorMaximo === '') && 
        (item.nome.includes(this.state.buscarNome) || this.state.buscarNome === ''))) 
      {
        return true
      } else {
        return false
      }
    })

    if(this.state.ordem === 'decrescente'){
      listaFiltrada.reverse()
    }

    const listaProdutos = listaFiltrada.map((item) => {

      return (<Produto
        key={item.id}
        linkImagem={item.imagem}
        nomeProduto={item.nome}
        precoProduto={item.preco}
        adicionarCarrinho={() => this.adicionarCarrinho(item.id)} />
      )
    })

    return (
      <Container>
        <Filtro
          lista={this.state.produtos}
          min={this.state.valorMinimo}
          max={this.state.valorMaximo}
          onChangeValorMinimo={this.onChangeValorMinimo}
          onChangeValorMaximo={this.onChangeValorMaximo}
          onChangeBuscaNome={this.onChangeBuscarNome}
          onChangeOrdenacao={this.onChangeOrdem}
        />
        <div>
          {listaProdutos}
        </div>
        <div>
          <h3>Lista de compras</h3>
          {listaCarrinho}
          <h5>Valor total: R${valorTotal}</h5>
        </div>
      </Container >
    );
  }

}

