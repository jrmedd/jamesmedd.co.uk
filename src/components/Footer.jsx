import styled, { css } from "styled-components"
import { Wiggle } from "./Wiggle"

const StyledFooter = styled.footer(props => css`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  color: ${props => props.theme.interactive};
  font-style: italic;
`)

export const Footer = props => (
  <>
  <Wiggle />
  <StyledFooter>
    This site was built by me in 2024.
  </StyledFooter>
  </>
)
