import React from "react"
import styled from "styled-components"

const CarrinhoContainer = styled.div`
display:flex;
flex-direction: column;
width: 200px;
margin: 10px 10px;
border: 1px solid black;
padding: 20px;

`
const BotaoRemover = styled.button`

`

export class Carrinho extends React.Component {

    render() {
        return (
            <CarrinhoContainer>
                <p> Item: {this.props.nomeProduto} </p>
                <p> Preço: R$ {this.props.precoProduto} </p>
                <p> Quantidade: {this.props.quantidadeProduto} </p>
                <BotaoRemover onClick={() => this.props.onClickRemoverProduto()}>
                    Remover
                </BotaoRemover>
            </CarrinhoContainer>
        )
    }
}