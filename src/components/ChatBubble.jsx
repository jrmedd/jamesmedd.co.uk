import styled, { css, keyframes } from 'styled-components'

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  10% {
    transform: translateY(-0.4rem); /* Ellipse stretches slightly upward */
  }
  30% {
    transform: translateY(0); /* Back to normal */
  }
  75% {
    transform: translateY(0.05rem); /* Squash effect on landing */
  }
`;
const BubbleWrapper = styled.svg(props => css`
  height: ${props => props.$size};
  path {
    stroke: ${props => props.theme.interactive};
    fill: none;
  }
`)

const Dot = styled.ellipse(props => css`
  animation: ${bounce} 2s infinite ease-in-out;
  animation-delay: ${props => props.$delay}s;
  fill: ${props => props.theme.interactive};
`)

const dots = [
  {
    cx: 20,
    cy: 35,
    rx: 6,
    ry: 6
  },
  {
    cx: 36,
    cy: 35,
    rx: 6,
    ry: 6
  },
  {
    cx: 52,
    cy: 35,
    rx: 6,
    ry: 6
  }
]

export const ChatBubble = props => (
  <BubbleWrapper $size={props.size} viewBox='0 0 72 72'>
    <path strokeWidth="2" d="m6 49.6.2-.5-.3-.4C2.8 44.7 1 40.2 1 35.3c0-7.2 3.8-13.7 10.1-18.5A41.3 41.3 0 0 1 36 9c9.7 0 18.5 3 24.9 7.8A23.5 23.5 0 0 1 71 35.3c0 7.2-3.8 13.7-10.1 18.5a45 45 0 0 1-38.4 5.7H22L4 63a1 1 0 0 1-1.2-1.3L6 49.6Z"/>
    { dots.map((dot, index) => <Dot {...dot} $delay={index * .25} />)}
  </BubbleWrapper>
)
