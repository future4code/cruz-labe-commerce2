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
            <DescricaoDoProduto>{props.precoProduto}</DescricaoDoProduto><br />
            <AdicionarAoCarrinho onClick={() => props.adicionarCarrinho(props.id)}>Adicionar ao Carrinho</AdicionarAoCarrinho>
        </div>
    );
}

export default Produto;


//Produto -> Criar o componente de produto, que vai receber o nome do produto, o preço, e props de onClick, para quando usuário
//clicar em 'Adicionar ao carrinho' chamar por props a função adequada.
//Produto props -> props.nomeProduto, props.precoProduto, props.onClickAdicionarCarrinho
//Produto props -> props.nomeProduto, props.precoProduto, props.onClickAdicionarCarrinho, props.linkImagem