import styled, { css } from 'styled-components'

export const LogoWrapper = styled.svg(props => css`
  display: block;
  height: 3.5rem;
  path {
    fill: ${props => props.theme.interactive};
  }
`)