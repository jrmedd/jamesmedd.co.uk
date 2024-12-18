import { Link, Outlet, ScrollRestoration, useLocation } from 'react-router'
import styled, { css, ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../theme'
import { Button } from '../components/Button'
import { SkipLink } from '../components/SkipLink'
import { ContentContainer, Header, Main, Nav } from '../components/Layout'
import { Footer } from '../components/Footer'
import { Heading, Paragraph, ScreenReaderOnly } from '../components/Typography'
import { useEffect, useRef, useState } from 'react'
import { useMeasure } from '@uidotdev/usehooks'
import { generateBezierWave } from '../generateBezierWave'

const slugToTitle = string => {
  const firstSlug = string.split('/')[1]
  return firstSlug.length > 0 ? firstSlug.charAt(0).toUpperCase() + firstSlug.slice(1) : 'Home'
}

const defaultTheme = theme.dark

const wiggleParameters = { 
  height: defaultTheme.wiggleParameters.height,
  amplitude: defaultTheme.wiggleParameters.amplitude,
  waveLength: defaultTheme.wiggleParameters.waveLength,
  phase: defaultTheme.wiggleParameters.phase
}

export const PageTemplate = props => {
  const location = useLocation()
  const [computedWidth, setComputedWidth] = useState(640)
  const [accessiblePageTitle, setAccessiblePageTitle] = useState("Viewing James Medd's website")
  const [bezierWave, setBezierWave] = useState('')
  const pageStartRef = useRef(null)
  const [ref, { width }] = useMeasure()
  useEffect(() => {
    if (width !== computedWidth) {
      const cappedWidth = wiggleParameters.waveLength * Math.floor(width/wiggleParameters.waveLength)
      setComputedWidth(cappedWidth)
      setBezierWave(generateBezierWave({width: cappedWidth, ...wiggleParameters}))
    }
  }, [width])
  useEffect(() => {
    const newTitle = `${slugToTitle(location.pathname)} – James Medd`
    document.title = newTitle
    pageStartRef?.current.focus()
  }, [location.pathname])

  useEffect(() => {
    setAccessiblePageTitle(`Viewing page: ${document.title}`)
  }, [document.title])
  return (
  <ThemeProvider theme={{...defaultTheme, computedWidth, bezierWave}}>
    <GlobalStyle />
    <ScrollRestoration />
    <ScreenReaderOnly as='p' ref={pageStartRef} tabIndex='-1'>{accessiblePageTitle}</ScreenReaderOnly>
    <SkipLink as='a' href='#main-content'>Skip to main content</SkipLink>
    <ContentContainer ref={ref}>
      <Header>
        <Heading $size='xl' as={Link} to='/' aria-label='Home - James Medd'>James Medd</Heading>
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