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
  display: flex;
  flex-flow: column;
  align-items: ${props => props.$index & 1 ? 'flex-end' : 'flex-start'};
  text-align: ${props => props.$index & 1 ? 'right' : 'left'};
  margin: 0;
  padding: 0;
  color: ${props => props.theme.text.body };
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

  &:last-child:after {
    border: 0;
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: calc(50% - .5rem); 
    height: 1rem;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    background-color: ${props => props.theme.interactive};
  }
`)

const EventTitle = styled.span(props => css`
  display: block;
  width: 50%;
  position: relative;
  font-family : 'Edu NSW ACT Foundation', cursive;
  font-weight: 400;
  margin-top: .5rem;
  font-size: 1.25rem;
  color: ${props => props.theme.text.heading};
  &:after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    border-top: 2px solid ${props => props.theme.interactive}
  }
`)

const EventDescription = styled.span(props => css`
  display: block;
  width: 50%;
  position: relative;
  font-size: .8rem;
  padding-top: .5rem;
  text-wrap: pretty;
  padding-left: ${props => props.$index & 1 ? '1rem' : 0};
  padding-right: ${props => props.$index & 1 ? 0 : '1rem'};
  text-align: left;
`)

export const Timeline = props => {
  const min = useState(Math.min(...props.events.map(event => event.year)))
  const max = useState(Math.max(...props.events.map(event => event.year)))
  return (
    <TimelineContainer>
    {
      props.events.map((event, index) => (
      <TimelineEvent $index={index} key={`event-${index}`}>
        <EventTitle>{ event.event }</EventTitle>
        <EventDescription $index={index}>
          { event.description }
        </EventDescription>
      </TimelineEvent>
      )
    )
    }
    </TimelineContainer>
  )
}