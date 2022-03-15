import styled from 'styled-components'

const StyledLayout = styled.div`
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`;

export default function Layout({ children }) {
  return <StyledLayout>{children}</StyledLayout>
}
