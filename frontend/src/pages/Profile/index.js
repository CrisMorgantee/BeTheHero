import { Power, Trash } from "@styled-icons/feather/"
import React from 'react'
import logo from "../../assets/logo.svg"
import * as S from './styled'


export default function Profile() {
  return (
    <S.ProfileWrapper>
      <S.Header>
        <img src={logo} alt="Imagem da Logo"/>
        <span>Bem vinda, APAE</span>

        <S.LinkNewCase to='/incidents/new'>Cadastrar novo caso</S.LinkNewCase>
        <S.Power >
          <Power size={18} color="#e02041"/>
        </S.Power>
      </S.Header>

    <S.Title>Casos cadastrados</S.Title>

    <S.ListWrapper>
      <S.ListItem>
        <S.ItemTitle>Caso:</S.ItemTitle>
        <S.CaseDesciption>Caso 1</S.CaseDesciption>
        <S.ItemTitle>Descrição:</S.ItemTitle>
        <S.CaseDesciption>Descrição 1</S.CaseDesciption>
        <S.ItemTitle>Valor:</S.ItemTitle>
        <S.CaseDesciption>R$ 120</S.CaseDesciption>

        <S.Trash >
            <Trash size={20} />
          </S.Trash>
      </S.ListItem>
      <S.ListItem>
        <S.ItemTitle>Caso:</S.ItemTitle>
        <S.CaseDesciption>Caso 1</S.CaseDesciption>
        <S.ItemTitle>Descrição:</S.ItemTitle>
        <S.CaseDesciption>Descrição 1</S.CaseDesciption>
        <S.ItemTitle>Valor:</S.ItemTitle>
        <S.CaseDesciption>R$ 120</S.CaseDesciption>

        <S.Trash >
            <Trash size={20} />
          </S.Trash>
      </S.ListItem>
      <S.ListItem>
        <S.ItemTitle>Caso:</S.ItemTitle>
        <S.CaseDesciption>Caso 1</S.CaseDesciption>
        <S.ItemTitle>Descrição:</S.ItemTitle>
        <S.CaseDesciption>Descrição 1</S.CaseDesciption>
        <S.ItemTitle>Valor:</S.ItemTitle>
        <S.CaseDesciption>R$ 120</S.CaseDesciption>

        <S.Trash >
            <Trash size={20} />
          </S.Trash>
      </S.ListItem>
      <S.ListItem>
        <S.ItemTitle>Caso:</S.ItemTitle>
        <S.CaseDesciption>Caso 1</S.CaseDesciption>
        <S.ItemTitle>Descrição:</S.ItemTitle>
        <S.CaseDesciption>Descrição 1</S.CaseDesciption>
        <S.ItemTitle>Valor:</S.ItemTitle>
        <S.CaseDesciption>R$ 120</S.CaseDesciption>

        <S.Trash >
            <Trash size={20} />
          </S.Trash>
      </S.ListItem>
    </S.ListWrapper>

    </S.ProfileWrapper>
  )
}
