import { Outlet } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './theme'
import { Button } from './components/Button'
import { ContentContainer, Header, Main, Nav } from './components/Layout'
import { HeadingXL } from './components/Typography'
import { ScrollToAnchor } from './ScrollToAnchor'

export const PageTemplate = props => (
  <ThemeProvider theme={theme.dark}>
    <ScrollToAnchor />
    <GlobalStyle />
    <ContentContainer>
      <Header>
        <HeadingXL as='h1'>James Medd</HeadingXL>
        <Nav>
          <Button to='/#career'>Career</Button>
          <Button to='/#projects'>Projects</Button>
          <Button to='/#contact'>Contact</Button>
        </Nav>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </ContentContainer>
  </ThemeProvider>
)