import styled, { css } from 'styled-components'

const Button = styled.button(props => css`
  border: none;
  font-size: 1rem;
  line-height: 1rem;
  height: fit-content;
  appearance: none;
  font-family: 'Inconsolata', monospace;
  font-weight: 700;
  text-align: center;
  padding: .75rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 1px 0px 2px ${props => props.theme.interactive};
  background: ${props => props.theme.background};
  color: ${props => props.theme.interactive};
  text-decoration: none;
  transition: transform .3s ease;
  &:active {
    transform: scale(0.9);
  }
  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    background-color: ${props => props.theme.interactive};
    color: ${props => props.theme.background};
    outline: none;
    transform: scale(1.1);
  }
`)

export { Button }
