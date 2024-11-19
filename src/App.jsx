import { useEffect, useState } from 'react'
import { ContentContainer, Cluster, Main, Header, Nav, Stack } from './components/Layout'
import { HeadingXL, HeadingL, Link, Paragraph } from './components/Typography'
import { Button } from './components/Button'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './theme'
import { ProfileImage } from './components/ProfileImage'
import { Wiggle } from './components/Wiggle'
import { TimeOfDayGreeting } from './components/TimeOfDayGreeting'
import { Timeline } from './components/Timeline'
import { ChatBubble } from './components/ChatBubble'
import { Socials } from './components/Socials'

import { career } from './careerOverview.json'
import { projects } from './projects.json'
import { CircularImage } from './components/CircularImage'

function App() {
  const [earliest, setEarliest] = useState('')
  const [now, setNow] = useState('')
  useEffect(() => {
    setNow(new Date().getFullYear())
    setEarliest(Math.min(...career.map(event => event.year)).toString())
  }, [])
  return (
    <ThemeProvider theme={theme.dark}>
      <GlobalStyle />
      <ContentContainer>
        <Header>
          <HeadingXL as='h1'>James Medd</HeadingXL>
          <Nav>
            <Button as='a' href='#career'>Career</Button>
            <Button as='a' href='#projects'>Projects</Button>
            <Button as='a' href='#contact'>Contact</Button>
          </Nav>
        </Header>
        <Main>
          <Cluster $justify='center' $gap='1.5rem'>
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
          <Stack $alignMobile='center' $gap='1.5rem'>
          <HeadingL id="career" as='h2'>
            Career overview
          </HeadingL>
          <Timeline earliest={earliest} now={now} events={career} />
          </Stack>
          <Wiggle />
          <Stack $alignMobile='center' $gap='1.5rem'>
            <HeadingL id='projects' as='h2'>
              Selected projects
            </HeadingL>
            { projects.map((project, index) => (
              
                <Cluster $gap='1.5rem' $align='center' $justify='center' $reverse={index & 1 === 1}>
                  <CircularImage size='8.5rem' src={ project.image } alt={ project.imageAlt } />
                  <Stack>
                    <HeadingL as='h3'>
                      { project.title }
                    </HeadingL>
                    <Paragraph>
                      { project.description }
                    </Paragraph>
                  </Stack>
                </Cluster>
              
            )) }
            <Wiggle />
          </Stack>
          <Stack $alignMobile='center' $gap='1.5rem'>
            <Cluster $justify='center' $align='center' $gap='1.5rem'>
              <ChatBubble size='6rem' />
              <Stack $alignMobile='center' $gap='1.5rem'>
                <HeadingL id='contact' as='h2'>
                  Contact me
                </HeadingL>
                <Paragraph>
                  If you'd like to discuss working together, I'd suggest you <Link href="mailto:hello@jamesmedd.co.uk?subject=Hi%20James">send me an email</Link> otherwise you'll find me in various places:
                </Paragraph>
              </Stack>
            </Cluster>
            <Socials />
            <Wiggle />
          </Stack>
        </Main>
      </ContentContainer>
    </ThemeProvider>
  )
}

export default App
