import React from "react"
import styled from "styled-components"

const CarrinhoContainer = styled.div`
border: 1px solid black;
`
const BotaoRemover = styled.button`
`

export class Carrinho extends React.Component {

    render() {
        return (
            <CarrinhoContainer>
                <h3> Carrinho de Compras </h3>
                <p> {this.props.nomeProduto} </p>
                <p> {this.props.precoProduto} </p>
                <p> {this.props.quantidadeProduto} </p>
                <BotaoRemover onClick={() => this.props.onClickRemoverProduto()}>
                    Remover
                </BotaoRemover>
                <p> Valor total: R$ {this.props.valorTotalCompras}</p>
            </CarrinhoContainer>
        )
    }
}