import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/logo.svg";
import api from "../../services/api";
import * as S from "./styled";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const history = useHistory();
  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };

    try {
      if ((name, email, whatsapp, city, uf === "")) {
        return toast.warn("Nenhum campo pode ficar vazio.");
      }
      const response = await api.post("ongs", data);
      history.push("/");
      toast(
        `ONG cadastrada com sucesso. Utilize ${response.data.id} para fazer login`,
        {
          type: "success",
          autoClose: false,
          position: "bottom-center",
          draggable: false,
          closeOnClick: false
        }
      );
    } catch (error) {
      toast.error("Algo deu errado!");
    }
  }

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

        <S.Form onSubmit={handleRegister}>
          <S.Input
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <S.Input
            type="email"
            placeholder="E-Mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <S.Input
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />

          <S.InputGroup>
            <S.Input
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <S.Input
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </S.InputGroup>

          <S.FormSubmit>Cadastrar</S.FormSubmit>
        </S.Form>
      </S.ContentWrapper>
    </S.RegisterWrapper>
  );
}
