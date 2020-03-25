import { ArrowLeft as back } from "@styled-icons/feather/"
import { darken, lighten } from "polished"
import { Link } from "react-router-dom"
import styled from 'styled-components'


export const RegisterWrapper = styled.div`
  width: 100%;
  max-width: 1220px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  padding:96px;
  background-color: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, .1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center
`;

export const Content = styled.section`
  width: 100%;
  max-width: 380px;
`;

export const Logo = styled.img`
  
`;

export const Title = styled.h1`
  margin: 64px 0 32px;
  font-size: 32px;
  font-weight: 700;
`;

export const Description = styled.p`
  font-size: 18px;
  color: #737380;
  line-height: 32px
`;

export const LinkRegister = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 40px;
  color: #41414d;
  font-size: 18px;
  text-decoration: none;
  font-weight: 500;
  transition: color 150ms;

  &:hover {
    color: ${lighten(0.2, "#41414d")};
  }
`;

export const IconBack = styled(back)`
  width: 16px;
  color: #e02041;
  margin-right: 8px
`;

export const Form = styled.form`
  width: 100%;
  max-width: 450px
`;

export const InputGroup = styled.div`
  display: flex;

  input + input {
    margin-left: 8px
  }
`;

export const Input = styled.input`
  width: 100%;
  margin-top: 8px;  

  
  height: 60px;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 0 24px;
`;

export const FormSubmit = styled.button`
  width: 100%;
  height: 60px;
  background-color: #e02041;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: background-color 150ms;

  &:hover {
    background-color: ${darken(0.09, "#e02041")};
  }
`;
