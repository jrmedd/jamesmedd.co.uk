import { useEffect, useState } from 'react'
import { ContentContainer, Cluster, Main, Header, Nav, Stack } from '../components/Layout'
import { HeadingXL, HeadingL, HeadingM, Link, Paragraph, ScreenReaderOnly } from '../components/Typography'
import { IntroSpiel } from '../sections/IntroSpiel'
import { Button } from '../components/Button'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../theme'
import { ProfileImage } from '../components/ProfileImage'
import { Wiggle } from '../components/Wiggle'
import { TimeOfDayGreeting } from '../components/TimeOfDayGreeting'
import { Timeline } from '../components/Timeline'
import { ChatBubble } from '../components/ChatBubble'
import { Socials } from '../components/Socials'

import { CircularImage } from '../components/CircularImage'


export const Home = () => (
  <>
    <IntroSpiel />
    <Wiggle />
    <Paragraph>
      I design and occasionally build usable and often joyful experiences for clients such as:
    </Paragraph>      
    <Wiggle />
  </>
)