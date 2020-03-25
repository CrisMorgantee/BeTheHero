import React from "react";
import heroesImg from "../../assets/heroes.png";
import logo from "../../assets/logo.svg";
import * as S from "./styled.js";

export default function Logon() {
  return (
    <S.LogonWrapper>
      <S.FormWrapper>
        <S.Logo src={logo} alt="" />

        <S.Form>
          <S.FormTitle>Faça seu logon</S.FormTitle>

          <S.FormInput placeholder="Sua ID" />
          <S.FormSubmit type="submit">Entrar</S.FormSubmit>

          <S.Link href="/register">
            <S.IconLogin />
            Não tenho cadastro
          </S.Link>
        </S.Form>
      </S.FormWrapper>

      <S.Img src={heroesImg} alt="Imagem Heroes" />
    </S.LogonWrapper>
  );
}
