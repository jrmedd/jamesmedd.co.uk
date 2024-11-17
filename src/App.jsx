import { useState } from 'react'
import { ContentContainer, Cluster, Main, Header, Nav, Stack } from './components/Layout'
import { HeadingXL, HeadingL, Paragraph } from './components/Typography'
import { Button } from './components/Button'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './theme'
import { ProfileImage } from './ProfileImage'
import { Wiggle } from './components/Wiggle'
import { TimeOfDayGreeting } from './components/TimeOfDayGreeting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme.dark}>
      <GlobalStyle />
      <ContentContainer>
        <Header>
          <HeadingXL as='h1'>James Medd</HeadingXL>
          <Nav>
            <Button>Career</Button>
            <Button>Projects</Button>
            <Button>Contact</Button>
          </Nav>
        </Header>
        <Main>
          <Cluster $justify="center" $gap='1.5rem'>
            <ProfileImage alt="A black and white picture of James Medd, smiling with his moustache." />
            <Stack $alignMobile="center">
              <HeadingL as='h2'>
                <TimeOfDayGreeting />
              </HeadingL>
              <Paragraph>
                I’m an artist, designer, technologist, musician, and more, based in Manchester, UK, currently working as a design consultant at SPARCK.
              </Paragraph>
              <Paragraph>
                You’ll find an overview of my career to date here.
              </Paragraph>
            </Stack>
          </Cluster>
          <Wiggle />
        </Main>
      </ContentContainer>
    </ThemeProvider>
  )
}

export default App
