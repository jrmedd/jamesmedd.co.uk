import styled, { css } from 'styled-components'

const StyledSVG = styled.svg(props => css`
  display: inline-block;
  width: ${props.$size ?? 'unset'};
  height: ${props.$size ?? 'unset'};
  transition: all .3s ease;
  path {
    fill: ${props => props.theme.interactive};
  }
`)

const StyledLink = styled.a(props => css`
  text-decoration: none;
  width: ${props.$size};
  outline: none;
  &:focus {
    svg {
      border: 2px solid ${props => props.theme.interactive}; 
      border-radius: 2px;
    }
  }
  &:focus, &:hover {
    svg {
      transform: scale(1.2);
    }
    path {
    stroke-width: 2;
    fill: none;
    stroke: ${props = props.theme.interactive};
  }
  }
`)

export const SocialSVG = props => (
  <StyledLink $size={props.size} aria-label={props.label} href={props.href}>
    <StyledSVG viewBox="0 0 56 56" $size={props.size}>
      { props.children }
    </StyledSVG>
  </StyledLink>
)
