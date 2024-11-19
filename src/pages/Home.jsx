import { useEffect, useState } from 'react'
import { ContentContainer, Cluster, Main, Header, Nav, Stack } from '../components/Layout'
import { HeadingXL, HeadingL, HeadingM, Link, Paragraph, ScreenReaderOnly } from '../components/Typography'
import { IntroSpiel } from '../sections/IntroSpiel'
import { Career } from '../sections/Career'
import { Button } from '../components/Button'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../theme'
import { ProfileImage } from '../components/ProfileImage'
import { Wiggle } from '../components/Wiggle'
import { TimeOfDayGreeting } from '../components/TimeOfDayGreeting'
import { Timeline } from '../components/Timeline'
import { ChatBubble } from '../components/ChatBubble'
import { Socials } from '../components/Socials'

import { projects } from '../projects.json'
import { CircularImage } from '../components/CircularImage'

export const Home = () => (
  <>
    <IntroSpiel />
    <Wiggle />
    <Career />
    <Wiggle />
      <Stack $alignMobile='center' $gap='3.5rem'>
        <HeadingL id='projects' as='h2'>
          Selected projects
        </HeadingL>
        { projects.map((project, index) => (              
            <Cluster $gap='1.5rem' $align='center' $justify='center' $reverse={index & 1 === 1}>
              <CircularImage size='8.5rem' src={ project.image } alt={ project.imageAlt } />
              <Stack $alignMobile='center'>
                <HeadingM as='h3'>
                  { project.title }
                </HeadingM>
                <Paragraph>
                  { project.description } <Link to={project.link}>Read more<ScreenReaderOnly> about { project.tile }</ScreenReaderOnly></Link>

                </Paragraph>
                <Paragraph>
                </Paragraph>
              </Stack>
            </Cluster>
        )) }
        </Stack>
        <Wiggle />
      <Stack $alignMobile='center' $gap='1.5rem'>
        <Cluster $justify='center' $align='center' $gap='1.5rem'>
          <ChatBubble size='6rem' />
          <Stack $alignMobile='center' $gap='1.5rem'>
            <HeadingL id='contact' as='h2'>
              Contact me
            </HeadingL>
            <Paragraph>
              If you'd like to discuss working together, I'd suggest you <Link to="mailto:hello@jamesmedd.co.uk?subject=Hi%20James">send me an email</Link> otherwise you'll find me in various places:
            </Paragraph>
          </Stack>
        </Cluster>
        <Socials />
      </Stack>
  </>
)