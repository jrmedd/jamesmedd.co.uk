import styled, { css } from 'styled-components'

const StyledSVG = styled.svg(props => css`
  width: ${props.$width ?? 'unset'};
  height: ${props.$height ?? 'unset'};
  transition: all .3s ease;
  path {
    fill: ${props => props.theme.interactive};
  }
`)

const StyledLink = styled.a(props => css`
  text-decoration: none;
  &:focus {
    outline: 2px solid ${props => props.theme.interactive}; 
    border-radius: 2%;
  }
  &:focus, &:hover {
    svg {
      transform: scale(1.1);
    }
    path {
    stroke-width: 2;
    fill: none;
    stroke: ${props = props.theme.interactive};
  }
  }
`)

export const SocialSVG = props => (
  <StyledLink aria-label={props.label} href={props.href}>
    <StyledSVG viewBox="0 0 56 56" $width={props.width} $height={props.height}>
      { props.children }
    </StyledSVG>
  </StyledLink>
)
