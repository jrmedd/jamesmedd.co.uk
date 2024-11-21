import { Link, Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../theme'
import { Button } from '../components/Button'
import { ContentContainer, Header, Main, Nav } from '../components/Layout'
import { HeadingXL } from '../components/Typography'
import { useEffect } from 'react'

const slugToTitle = string => {
  const firstSlug = string.split('/')[1]
  return firstSlug.length > 0 ? firstSlug.charAt(0).toUpperCase() + firstSlug.slice(1) : 'Home'
}

export const PageTemplate = props => {
  const location = useLocation()
  useEffect(() => {
    const pageTitle = `${slugToTitle(location.pathname)} – James Medd`
    console.log(pageTitle)
    document.title = pageTitle
  }, [location])
  return (
  <ThemeProvider theme={theme.dark}>
    <GlobalStyle />
    <ScrollRestoration />
    <ContentContainer>
      <Header>
        <HeadingXL as={Link} to='/'>James Medd</HeadingXL>
        <Nav>
          <Button to='/career'>Career</Button>
          <Button to='/projects'>Projects</Button>
          <Button to='/contact'>Contact</Button>
        </Nav>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </ContentContainer>
  </ThemeProvider>
)}