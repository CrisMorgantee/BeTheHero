import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import heroesImg from "../../assets/heroes.png";
import logo from "../../assets/logo.svg";
import api from "../../services/api";
import * as S from "./styled.js";

export default function Logon() {
  const [id, setId] = useState("");
  const history = useHistory("");

  async function handleLogin(e) {
    e.preventDefault();

    try {
      if (id === "") {
        return toast.warn("Insira seu ID");
      }
      const response = await api.post("sessions", { id });

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);

      history.push("/profile");
    } catch (error) {
      toast.error("Nao foi possivel fazer login");
    }
  }

  return (
    <S.LogonWrapper>
      <S.FormWrapper>
        <S.Logo src={logo} alt="Imagem Logo" />

        <S.Form onSubmit={handleLogin}>
          <S.FormTitle>Faça seu logon</S.FormTitle>

          <S.FormInput
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <S.FormSubmit type="submit">Entrar</S.FormSubmit>

          <S.LinkRegister to="/register">
            <S.IconLogin />
            Não tenho cadastro
          </S.LinkRegister>
        </S.Form>
      </S.FormWrapper>

      <S.Img src={heroesImg} alt="Imagem Heroes" />
    </S.LogonWrapper>
  );
}
