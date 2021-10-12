import { useState } from "react";
import styled, { css } from "styled-components";
import { darkModeVar, isLoggedInVar } from "../apollo";

const Title = styled.h1`
  color: ${props => props.theme.fontColor};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  ${props =>
    props.potato
      ? css`
          font-size: 49px;
        `
      : css`
          text-decoration: underline;
        `}
`;

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
`;

const Login = () => {
  return (
    <Container>
      <Title>Login</Title>
      <button onClick={() => darkModeVar(true)}>To dark</button>
      <button onClick={() => darkModeVar(false)}>To light</button>
    </Container>
  );
};

export default Login;
