import styled from "styled-components";
import Image from "next/image";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const Links = styled.div`
  font-weight: bold;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.medium};
    display: inline-block;
  }
`;

export const User = styled.div`
  margin-left: auto;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.medium};
    display: inline-block;
    border: 1px solid ${(props) => props.theme.colors.medium};
    padding: 0.5rem 1rem;
    border-radius: 3px;
  }
`;

export const Logo = styled(Image)`
  cursor: pointer;
`;
