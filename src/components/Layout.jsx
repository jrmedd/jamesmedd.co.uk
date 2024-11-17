import styled, { css } from 'styled-components'

const ContentContainer = styled.div(props => css`
  margin: 0 auto;
  width: 40rem;
  max-width: 95%;
  padding: 1rem 0;
  display: flex;
  flex-flow: column;
  gap: 2rem;
`)

const Main = styled.main(props => css`
  display: flex;
  flex-flow: column;
  gap: 2rem;
  width: 100%;
`)

const Header = styled.header(props => css`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    justify-content: center;
    align-items: center;
  }
`)

const Nav = styled.nav(props => css`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1rem;
  height: fit-content;
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100vw;
    margin-top: 1rem;
  }
`)

const Cluster = styled.div(props => css`
  display: flex;
  flex-flow: row wrap;
  justify-content: ${props => props.$justify ? props.$justify : 'unset'};
  gap: ${props => props.$gap ?? '1rem'};
`)

const Stack = styled.div(props => css`
  display: flex;
  flex-flow: column;
  gap: 1rem;
  flex-grow: 1;
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    align-items: ${props => props.$alignMobile ? props.$alignMobile : props.$align ?? 'unset'};
  }
`)

export { Cluster, ContentContainer, Header, Main, Nav, Stack }
