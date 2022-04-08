import styled from "styled-components";
import Image from "next/image";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 4rem;
  padding: 0 1rem;
`;

export const Title = styled.h1`
  padding-right: 1rem;
`;

export const Links = styled.div`
  font-weight: bold;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.medium};
    padding: 0.5rem;
  }
`;

export const User = styled.div`
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.medium};
    display: inline-block;
    border: 1px solid ${(props) => props.theme.colors.medium};
    padding: 0.5rem 1rem;
    border-radius: 3px;
  }
  p {
    display: inline-block;
  }
  button {
    border: none;
  }
  button > a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.medium};
    display: inline-block;
    border: 1px solid ${(props) => props.theme.colors.medium};
    padding: 0.5rem 1rem;
    border-radius: 3px;
  }
  position: absolute;
  right: 0;
  margin: 0.5rem;
`;

export const Logo = styled(Image)`
  cursor: pointer;
`;
