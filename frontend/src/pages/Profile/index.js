import { Power as PowerIcon, Trash as TrashIcon } from "@styled-icons/feather/"
import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"
import logo from "../../assets/logo.svg"
import api from '../../services/api'
import * as S from './styled'

export default function Profile() {
  const [incidents,setIncidents] = useState([])
  const ongId = localStorage.getItem("ongId"); 
  const ongName = localStorage.getItem('ongName')
  const history = useHistory()

  useEffect(() => {
    api
      .get("profile", {
        headers: {
          Authorization: ongId
        }
      })
      .then(response => {
        setIncidents(response.data);
      });
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      })
      setIncidents(incidents.filter(incident => incident.id !== id))
    } catch (error) {
      alert('Nao foi possivel deletar')
    }
  }

  function handleLogout( ) {
    localStorage.clear()

    history.push('/')
  }

  return (
    <S.ProfileWrapper>
      <S.Header>
        <img src={logo} alt="Imagem da Logo" />
        <span>Bem vinda, {ongName}</span>

        <S.LinkNewCase to="/incidents/new">Cadastrar novo caso</S.LinkNewCase>
        <S.Power onClick={handleLogout}>
          <PowerIcon size={18}  />
        </S.Power>
      </S.Header>

      <S.Title>Casos cadastrados</S.Title>

      <S.ListWrapper>
        {incidents.map(incident => (
          <S.ListItem key={incident.id}>
            <S.ItemTitle>Caso:</S.ItemTitle>
            <S.CaseDesciption>{incident.title}</S.CaseDesciption>
            <S.ItemTitle>Descrição:</S.ItemTitle>
            <S.CaseDesciption>{incident.description}</S.CaseDesciption>
            <S.ItemTitle>Valor:</S.ItemTitle>
            <S.CaseDesciption>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(incident.value)}
            </S.CaseDesciption>

            <S.Trash onClick={() => handleDeleteIncident(incident.id)}>
              <TrashIcon size={20}  />
            </S.Trash>
          </S.ListItem>
        ))}
      </S.ListWrapper>
    </S.ProfileWrapper>
  );
}
