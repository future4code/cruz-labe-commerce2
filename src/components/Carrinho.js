import React from "react"
import styled from "styled-components"

const CarrinhoContainer = styled.div`
border: 1px solid black;
`
const BotaoRemover = styled.button`
`

export class Carrinho extends React.Component {

    valorTotalCompras = () => {
        let valorTotal = 0

        for (let produto of this.props.listaProdutosEscolhidos) {
            valorTotal += produto.preco * produto.quantidade
        }
        return valorTotal
    }

    render() {
        return (
            <CarrinhoContainer>
                <h3> Carrinho de Compras </h3>
                <p> {this.props.nomeProduto} </p>
                <p> {this.props.precoProduto} </p>
                <BotaoRemover onClick={() => props.onClickRemoverProduto(produtos.id)}>
                    Remover
                </BotaoRemover>
                <p> Valor total: R$ {this.valorTotalCompras()}</p>
            </CarrinhoContainer>
        )
    }
}