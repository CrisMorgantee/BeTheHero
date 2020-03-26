import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import logo from "../../assets/logo.svg"
import api from "../../services/api"
import * as S from './styled.js'

export default function NewIncident() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  const ongId = localStorage.getItem('ongId')
  const history = useHistory()

  async function handleNewIncident(e) {
    e.preventDefault()

    const data = {
      title, description, value
    }

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId
        } 
      })

      history.push('/profile')
    } catch (error) {
      alert('Nao foi possivel cadastrar.')
    }
  }

  return (
    <S.NewIncidentWrapper>
      <S.ContentWrapper>
        <S.Content>
          <S.Logo src={logo} alt="Imagem da Logo" />
          <S.Title>Cadastrar novo caso</S.Title>
          <S.Description>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </S.Description>
          <S.Action to="/profile">
            <S.IconBack />
            Voltar para Home
          </S.Action>
        </S.Content>

        <S.Form onSubmit={handleNewIncident}>
          <S.Input
            placeholder="Titulo do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <S.TextArea
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <S.Input
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <S.FormSubmit>Cadastrar</S.FormSubmit>
        </S.Form>
      </S.ContentWrapper>
    </S.NewIncidentWrapper>
  );
}
