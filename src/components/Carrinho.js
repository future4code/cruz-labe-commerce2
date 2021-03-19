import React from "react"
import styled from "styled-components"
import iconeTirarCarrinho from '../imagens/remover-do-carrinho.png'

// ============== Geral
const Container = styled.div`
    background-color: #000C3C;
    padding: 0.5rem;
    border-radius: 2px;
    margin: 0.5rem;
    display: flex;
    justify-content: space-between;
    text-align: left;

    @media (max-width: 1200px){
        width: 200px;
        height: 140px;
    }
`

// ============== Organização
const ContainerCarrinho1 = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: space-between; */
`

const ContainerCarrinho2 = styled(ContainerCarrinho1)`
    color: white;
`

// ============== Informações
const NomeProduto = styled.span`
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
    margin-right: 0.3rem;
    font-weight: 500;
    opacity: .8;
`

const Preco = styled.span`
    font-weight: 500;
    font-size: 1.2rem;
`
const ImgCarrinho = styled.img`
    width: 90%;
    padding: 0.2rem 0;
 `

const BotaoRemover = styled.button`
    width: 2.5rem;
    border: none;

    border-radius: 100%;
    background-color: #000C3C;
    

    &:hover{
        background: rgba(255, 255, 255, 0.2);
        cursor: pointer;
    }

    &:focus{
        background: #333333;
        opacity: 0.5;
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: none;
    }

`

export class Carrinho extends React.Component {

    render() {
        return (
            <Container>
                <ContainerCarrinho1>
                    <NomeProduto>{this.props.nomeProduto} </NomeProduto>
                    <span> Quantidade: {this.props.quantidadeProduto} </span>
                    <Preco> R$ {this.props.precoProduto} </Preco>
                </ContainerCarrinho1>

                <ContainerCarrinho2>
                    <BotaoRemover onClick={() => this.props.onClickRemoverProduto()}>
                        <ImgCarrinho src={iconeTirarCarrinho} title="Remover do carrinho" />
                    </BotaoRemover>
                </ContainerCarrinho2>
            </Container>
        )
    }
}