import { createGlobalStyle } from 'styled-components'

const chocolate = '#443938'
const fondant = '#F6D9CF'
const cream = '#FFF9F4'

const breakpoints = {
  mobile: '640px',
  tablet: '768px',
  desktop: '1200px'
}

export const theme = {
  dark: {
    text: {
      heading: fondant,
      body: cream,
    },
    interactive: fondant,
    background: chocolate,
    breakpoints
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
  }
`