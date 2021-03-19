import React from 'react';
import styled from 'styled-components'
import iconeCarrinho from '../imagens/adicionar-ao-carrinho.png'

// ============== Geral
const Container = styled.div`
  padding: 1rem 0.5rem;
  box-shadow: 0px 0px 5px gray;
  background-color: #00011F;
  border-radius: 2px;
  width:200px;
  height: 250px;
`

// ============== Descrição
const InformacoesProduto = styled.div`
  display: flex;
  flex-direction: column;
`
const DescricaoDoProduto = styled.label`
  color: #333;
  font-size: 1.2rem;
  color: rgb(209, 208, 208);
`
const ContainerDescricao = styled.div`
  display: flex;
  justify-content: space-between;
`
const PrecoProduto = styled.span`
  font-weight: 600;
  color: white;
`

// ============== Botão
const AdicionarAoCarrinho = styled.button`
  width: 2.5rem;
  border: none;

  border-radius: 100%;
  background-color: #00011F;

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
const ImagemCarrinho = styled.img`
  width: 90%;
  padding: 0.2rem 0;

`

function Produto(props) {

  return (
    <Container>
      <img src={props.linkImagem} alt="" /><br />
      <InformacoesProduto>
        <DescricaoDoProduto>{props.nomeProduto}</DescricaoDoProduto>
        <ContainerDescricao>
          <PrecoProduto>R${props.precoProduto}</PrecoProduto>
          <AdicionarAoCarrinho onClick={() => props.adicionarCarrinho(props.id)}><ImagemCarrinho src={iconeCarrinho} title="Adicionar ao carrinho" /></AdicionarAoCarrinho>
        </ContainerDescricao>

        
      </InformacoesProduto>


    </Container>
  );
}

export default Produto;


