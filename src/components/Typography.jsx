import styled, { css } from 'styled-components'
import { Link } from 'react-router'

const HeadingSizes =  {
  xl: css`
  font-size: 1.9rem;
  `,
  l: css`
  font-size: 1.5rem;
  `,
  m: css`
  font-size: 1.25rem;
  `
}

const HeadingCore = css`
  font-family : ${props => props.theme.fonts.heading};
  font-weight: 400;
  text-decoration: none;
  color: ${props => props.theme.text.heading};
  margin: 0;
  &:focus {
    outline: 2px solid ${props => props.theme.interactive};
  }
`

const Heading = styled.h1(props => css`
  ${HeadingCore};
  ${props => HeadingSizes[props.$size]};
`)

const Legend  = styled.legend(props => css`
  ${HeadingCore};
  ${props => HeadingSizes[props.$size]};
  break-after: auto;
  margin-bottom: 1rem;
`)

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
  font-family: ${props => props.theme.fonts.body};
  font-weight: 350;
  color: ${props => props.theme.text.body};
  line-height: 125%;
  width: ${props => props.$width ?? '80ch'};
  max-width: 100%;
  flex-grow: 1;
  margin: 0;
  padding-left: ${props => props.$leftIndent ?? 'unset'};
  padding-right: ${props => props.$rightIndent ?? 'unset'};
  text-wrap: pretty;
`)

const UnorderedList = styled.ul(props => css`
  font-family: ${props => props.theme.fonts.body};
  font-weight: 350;
  line-height: 125%;
  margin: 0;
  padding-inline-start: 1.5rem;
  color: ${props => props.theme.text.body};
  li + li {
    margin-top: 1rem; 
  }
`)


const ScreenReaderOnly = styled.span(props => css`
  position:absolute;  
  left:-10000px;
  top:auto;
  width:1px;
  height:1px;
  overflow:hidden;  
`)

export { ExternalLink, Heading, InternalLink, Legend, Paragraph, ScreenReaderOnly, UnorderedList }
