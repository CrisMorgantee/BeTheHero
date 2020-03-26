import { LogIn } from "@styled-icons/feather/"
import { darken, lighten } from "polished"
import { Link } from "react-router-dom"
import styled from "styled-components"

export const LogonWrapper = styled.div`
  width: 100%;
  max-width: 1220px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 96px;
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 350px;
  margin-right: 60px;
`;

export const Logo = styled.img``;

export const Form = styled.form`
  margin-top: 100px;
`;

export const FormTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 32px;
  font-weight: 700;
  color: #f5f5fd
`;

export const FormInput = styled.input`
  width: 100%;
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

export const LinkRegister = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 40px;
  color: #F8F8F2;
  font-size: 18px;
  text-decoration: none;
  font-weight: 500;
  transition: color 150ms;

  &:hover {
    color: ${lighten(0.1, "#7159C1")};
  }
`;

export const IconLogin = styled(LogIn)`
  width: 16px;
  color: #fff;
  margin-right: 8px;
`;

export const Img = styled.img``;
