import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

const Heading = styled.h1(props => css`
  font-family : 'Edu NSW ACT Foundation', cursive;
  font-weight: 400;
  text-decoration: none;
  color: ${props => props.theme.text.heading};
  margin: 0;
  &:focus {
    outline: 2px solid ${props => props.theme.interactive};
  }
`)

const HeadingXL = styled(Heading)`
  font-size: 1.9rem;
`

const HeadingL = styled(Heading)`
  font-size: 1.5rem;
`
const HeadingM = styled(Heading)`
  font-size: 1.25rem;
`

const ExternalLink = styled.a(props => css`
  color: ${props => props.theme.interactive};
  text-decoration-style: wavy;
  &:focus {
    outline: 2px solid ${props => props.theme.interactive};
  }
`)

const InternalLink = styled(Link)(props => css`
  color: ${props => props.theme.interactive};
  text-decoration-style: wavy;
  &:focus {
    outline: 2px solid ${props => props.theme.interactive};
  }
  &:visited {
    color:${props => props.theme.interactive}
  }
`)

const Paragraph = styled.p(props => css`
  font-family: 'Inconsolata';
  font-weight: 350;
  color: ${props => props.theme.text.body};
  line-height: 125%;
  width: ${props => props.$width ?? '70ch'};
  max-width: 100%;
  flex-grow: 1;
  margin: 0;
  text-wrap: pretty;
`)

const ScreenReaderOnly = styled.span(props => css`
  position:absolute;  
  left:-10000px;
  top:auto;
  width:1px;
  height:1px;
  overflow:hidden;  
`)

export { ExternalLink, HeadingXL, HeadingL, HeadingM, InternalLink, Paragraph, ScreenReaderOnly }
