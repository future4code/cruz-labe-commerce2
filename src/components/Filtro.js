import { render } from '@testing-library/react'
import React from 'react'
import styled from 'styled-components'

const Componente = styled.div`
    box-sizing: border-box;
    margin: 10px 10px;
    padding: 10px;
    width: 230px;
    height:90vh;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    &>input, >select{
        margin-top: 10px;
        width: 90%;
    }
    &>h3{
        margin-bottom: 5px;
    }
    &>select{
        width: 99%;
    }
`
export default class Filtro extends React.Component {


    render() {
        return <Componente>
            <h3>Filtros</h3>
            <input type="number" placeholder="Valor mínimo" onChange={this.props.onChangeValorMinimo} />
            <input type="number" placeholder="Valor máximo" onChange={this.props.onChangeValorMaximo} />
            <input placeholder="Nome do produto" onChange={this.props.onChangeBuscaNome} />

            <select defaultValue="decrescente" onChange={this.props.onChangeOrdem}>
                <option value="crescente">Crescente</option>
                <option value="decrescente">Decrescente</option>
            </select>
        </Componente>
    }
}