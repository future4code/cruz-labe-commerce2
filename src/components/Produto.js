import React from 'react';
import styled from 'styled-components'

const AdicionarAoCarrinho = styled.button`
  background-color: #ff7100;
  padding: 10px;
  margin: 10px;
  border-radius: 2px;
 
`;

const DescricaoDoProduto = styled.label`
  margin: 12px;
`;

function Produto(props) {

    return (
        <div>
            <img src={props.linkImagem} alt="" /><br />
            <DescricaoDoProduto>{props.nomeProduto}</DescricaoDoProduto><br />
            <DescricaoDoProduto>R${props.precoProduto}</DescricaoDoProduto><br />
            <AdicionarAoCarrinho onClick={() => props.adicionarCarrinho(props.id)}>Adicionar ao Carrinho</AdicionarAoCarrinho>
        </div>
    );
}

export default Produto;


