import React from 'react'
import logo from "../../assets/logo.svg"
import * as S from './styled.js'

export default function NewIncident() {
  return (
    <S.NewIncidentWrapper>
     
        <S.ContentWrapper>
          <S.Content>
            <S.Logo src={logo} alt="Imagem da Logo" />
            <S.Title>Cadastrar novo caso</S.Title>
            <S.Description>
              Descreva o caso detalhadamente para encontrar um herói para resolver isso.
          </S.Description>
            <S.Action to="/profile">
              <S.IconBack />
            Voltar para Home
          </S.Action>
          </S.Content>

          <S.Form>
            <S.Input placeholder="Titulo do caso" />
            <S.TextArea placeholder="Descrição" />
            <S.Input placeholder="Valor em reais" />
            <S.FormSubmit>Cadastrar</S.FormSubmit>
          </S.Form>
        </S.ContentWrapper>
     
    </S.NewIncidentWrapper>
  )
}
