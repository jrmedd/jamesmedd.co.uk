import styled, { css } from 'styled-components'

const Heading = styled.h1(props => css`
  font-family : 'Edu NSW ACT Foundation', cursive;
  font-weight: 400;
  color: ${props => props.theme.text.heading};
  margin: 0;
`)

const HeadingXL = styled(Heading)`
  font-size: 1.9rem;
`

const HeadingL = styled(Heading)`
  font-size: 1.5rem;
`

const Paragraph = styled.p(props => css`
  font-family: 'Inconsolata';
  font-weight: 350;
  color: ${props => props.theme.text.body};
  line-height: 125%;
  width: 28rem;
  max-width: 100%;
  flex-grow: 1;
  margin: 0;
`)

export { HeadingXL, HeadingL, Paragraph }
