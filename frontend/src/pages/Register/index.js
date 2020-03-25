import React from 'react'
import logo from "../../assets/logo.svg"
import * as S from './styled'

export default function Register() {
  return (
    <S.RegisterWrapper>
      <S.ContentWrapper>
        <S.Content>
          <S.Logo src={logo} alt="Imagem da Logo" />
          <S.Title>Cadastro</S.Title>
          <S.Description>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </S.Description>
          <S.LinkRegister to="/">
            <S.IconBack />
            Voltar para Logon
          </S.LinkRegister>
        </S.Content>

        <S.Form>
          <S.Input placeholder="Nome da ONG" />
          <S.Input type="email" placeholder="E-Mail" />
          <S.Input placeholder="Whatsapp" />

          <S.InputGroup>
            <S.Input placeholder="Cidade" />
            <S.Input placeholder="UF" style={{width: 80}} />
          </S.InputGroup>

          <S.FormSubmit>Cadastrar</S.FormSubmit>
        </S.Form>
      </S.ContentWrapper>
    </S.RegisterWrapper>
  );
}
