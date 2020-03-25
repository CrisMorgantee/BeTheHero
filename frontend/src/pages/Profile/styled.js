import { darken, lighten } from "polished"
import { Link } from 'react-router-dom'
import styled from 'styled-components'


export const ProfileWrapper = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 20px;
    margin-left: 24px
  }

  img {
    height: 64px
  }
`;

export const LinkNewCase = styled(Link)`
  width: 260px;
  height: 60px;
  background-color: #e02041;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  margin-left: auto;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: background-color 150ms;

  &:hover {
    background-color: ${darken(.09, "#e02041")};
  }
`;

export const Power = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 4px;
  border: 1px solid #dcdce6;
  background-color: transparent;
  margin-left: 16px;
  transition: border 150ms;

  &:hover{
    border-color: ${darken(.3, '#dcdce6')};
  }
 
`;

export const Title = styled.h1`
  margin: 80px 0 24px;
  font-size: 32px;  
  font-weight: 700;
`;

export const ListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style: none
`;

export const ListItem = styled.li`
  background-color: #fff;
  padding:24px;
  border-radius: 8px;
  position: relative
`;

export const ItemTitle = styled.strong`
  display: block;
  margin-bottom: 16px;
  color: #41414d;
  font-weight: 500
`;

export const CaseDesciption = styled.p`
  color: #737380;
  line-height: 20px;
  font-size: 16px;

  & + strong {
    margin-top: 32px
  }
`;

export const Trash = styled.button`
  position: absolute;
  right: 24px;
  top: 24px;
  border: none;
  color:"#a8a8b3";
  background-color: transparent;
  transition: color 150ms;

  &:hover {
    color: ${lighten(.01, "#a8a8b3")}
  }
`;
