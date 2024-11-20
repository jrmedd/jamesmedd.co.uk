import styled, { css } from 'styled-components'

export const LogoWrapper = styled.svg(props => css`
  display: block;
  height: 2.5rem;
  width: 33%; 
  path {
    fill: ${props => props.theme.interactive};
  } 
`)