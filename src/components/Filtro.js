import { render } from '@testing-library/react'
import React from 'react'
import styled from 'styled-components'

// ============== Geral
const Componente = styled.div`
    grid-column: 1 / 2;
    display: flex;
    align-items: center;
    justify-content: center;
`

// ============== Inputs
const Titulo = styled.label`
    color: white;
    margin-right: 1rem;
    font-size: 1.2rem;
`
const CamposFiltros = styled.input `
    background-color: #00011F;
    color: white;
    font-size: 1rem;
    padding: 0.3rem;
    margin: 0.2rem;
    border: none;
    border-bottom: 2px solid gray;
`
const CampoSelecao = styled.select `
    background-color: #00011F;
    color: white;
    font-size: 1rem;
    padding: 0.3rem;
    margin: 0.2rem;
    border: none;
    border-bottom: 2px solid gray;
`

export default class Filtro extends React.Component {
    render() {
        return <Componente>
            <Titulo>Filtros:</Titulo>
            <CamposFiltros type="number" placeholder="Valor mínimo" onChange={this.props.onChangeValorMinimo}/>
            <CamposFiltros type="number" placeholder="Valor máximo" onChange={this.props.onChangeValorMaximo} />
            <CamposFiltros placeholder="Nome do produto" onChange={this.props.onChangeBuscaNome} />
            <CampoSelecao defaultValue="crescente" onChange={this.props.onChangeOrdem}>
                <option value="crescente" >Crescente</option>
                <option value="decrescente">Decrescente</option>
            </CampoSelecao>
        </Componente>
    }
}