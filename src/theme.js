import '@fontsource-variable/edu-nsw-act-foundation';
import '@fontsource-variable/inconsolata';

import { createGlobalStyle } from 'styled-components'

const chocolate = '#443938'
const fondant = '#F6D9CF'
const chocolateFondant = '#B4A29C'
const cream = '#FFF9F4'

const breakpoints = {
  mobile: '640px',
  tablet: '768px',
  desktop: '1200px'
}

const wiggleParameters = {
  height: 24,
  amplitude: 8,
  waveLength: 16,
  phase: 8
}

export const theme = {
  dark: {
    fonts: {
      body: `'Inconsolata Variable', monospace`,
      heading: `'Edu NSW ACT Foundation Variable', cursive`,
    },
    text: {
      heading: fondant,
      body: cream,
    },
    interactive: fondant,
    interactiveShade: chocolateFondant,
    background: chocolate,
    breakpoints,
    wiggleParameters
  }
}
export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    background-color: ${props => props.theme.background};
    font-family: 'Inconsolata', monospace;
    font-optical-sizing: auto;
    font-weight: 350;
    margin: 0;
    overflow-y: scroll;
  }
`