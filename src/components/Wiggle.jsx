import styled, { css, useTheme } from 'styled-components'

const WiggleWrapper = styled.svg(props => css`
  margin: 0 auto;
  height: 1.5rem;
  overflow: visible;
  path {
    height: 1.5rem;
    fill: none;
    stroke-width: 2;
    stroke: ${props => props.theme.interactive};
    stroke-linecap: round;
  }
`)

export const Wiggle = props => {
  const theme = useTheme()
  return (
  <WiggleWrapper aria-hidden='true' viewBox={`0 0 ${theme.computedWidth ?? 640} 24`}>
    <path d={theme.bezierWave} />
  </WiggleWrapper>
)
}
