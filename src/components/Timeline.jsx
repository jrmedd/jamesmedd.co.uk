import { useState } from 'react'
import styled, { css } from 'styled-components'

const TimelineContainer = styled.ol(props => css`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column;
`)

const TimelineEvent = styled.li(props => css`
  margin: 0;
  padding: 0;
  color: ${props => props.theme.text.body };
  height: 8rem;
  position: relative;
  box-sizing: border-box;
  &:after {
    content: '';
    height: 100%;
    width: 50%;
    position: absolute;
    left: ${props => props.$index & 1 ? 'unset' : '-1px'};
    right: ${props => props.$index & 1 ? '-1px' : 'unset'};
    top: 0;
    border-left: ${props => props.$index & 1 ? '2px' : 0} solid ${props => props.theme.interactive};
    border-right: ${props => props.$index & 1 ? 0 : '2px'} solid ${props => props.theme.interactive};
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: calc(50% - .5rem); 
    height: 1rem;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    border: 1px solid ${props => props.theme.interactive};
  }
`)

export const Timeline = props => {
  const min = useState(Math.min(...props.events.map(event => event.year)))
  const max = useState(Math.max(...props.events.map(event => event.year)))
  return (
    <TimelineContainer>
    {
      props.events.map((event, index) => (
      <TimelineEvent $index={index} key={`event-${index}`}>
        { event.event }
      </TimelineEvent>
      )
    )
    }
    </TimelineContainer>
  )
}