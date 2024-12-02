import { Link, Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import styled, { css, ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../theme'
import { Button } from '../components/Button'
import { SkipLink } from '../components/SkipLink'
import { ContentContainer, Header, Main, Nav } from '../components/Layout'
import { Footer } from '../components/Footer'
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
    document.title = pageTitle
  }, [location])
  return (
  <ThemeProvider theme={theme.dark}>
    <GlobalStyle />
    <ScrollRestoration />
    <SkipLink as='a' href='#main-content'>Skip to main content</SkipLink>
    <ContentContainer>
      <Header>
        <HeadingXL as={Link} to='/' aria-label='Home – James Medd'>James Medd</HeadingXL>
        <Nav>
          <Button to='/career'>Career</Button>
          <Button to='/projects'>Projects</Button>
          <Button to='/contact'>Contact</Button>
        </Nav>
      </Header>
      <Main id='main-content'>
        <Outlet />
      </Main>
      <Footer />
    </ContentContainer>
  </ThemeProvider>
)}