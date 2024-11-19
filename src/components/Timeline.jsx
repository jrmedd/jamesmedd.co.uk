import { useState } from 'react'
import styled, { css } from 'styled-components'
import { ScreenReaderOnly } from './Typography'

const TimelineContainer = styled.div(props => css`
  position: relative;
  margin: 1rem 0;
`)

const ThenAndNow = styled.span(props => css`
  display: block;
  font-family : 'Edu NSW ACT Foundation', cursive;
  font-size: .8rem;
  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    position: absolute;
    text-align: center;
    top: ${props => props.$then ? '-4.5rem' : 'unset'};
    bottom: ${props => props.$now ? '4.5rem' : 'unset'}; 
    left: 0;
    width: 100%;
  }
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding-left: 1rem;
    padding-bottom: ${props => props.$then ? '2rem' : 'unset'};
  }
  color: ${props => props.theme.text.body + '99'};
`)

const TimelineList = styled.ol(props => css`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: -3.5rem;
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      right: unset;
      left: 0;
    }
    left: unset;
    right: calc(50% + -1px);
    width: 2px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, ${props => props.theme.interactive} 100%);
    height: 4rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    &:after {
      content: '';
      position: absolute;
      bottom: -1rem;
      @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        right: unset;
        left: 0;
      }
      left: unset;
      right: calc(50% + -1px);
      width: 2px;
      background: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, ${props => props.theme.interactive} 100%);
      height: 1rem;
    }
  }
`)

const TimelineEvent = styled.li(props => css`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    align-items: ${props => props.$index & 1 ? 'flex-end' : 'flex-start'};
  }
  margin: 0;
  padding: 0;
  color: ${props => props.theme.text.body };
  position: relative;
  box-sizing: border-box;
  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    &:after {
      width: 50%;
      left: ${props => props.$index & 1 ? 'unset' : '-1px'};
      right: ${props => props.$index & 1 ? '-1px' : 'unset'};
      border-left: ${props => props.$index & 1 ? '2px' : 0} solid ${props => props.theme.interactive};
      border-right: ${props => props.$index & 1 ? 0 : '2px'} solid ${props => props.theme.interactive};
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    border-left: 2px solid ${props => props.theme.interactive};
    padding-left: -1rem;
  }
  &:after {
    content: '';
    height: 100%;
    position: absolute;
    top: 0;
  }
  &:last-child:after {
    content: '';
    border: 0;
    position: absolute;
    bottom: -3.5rem;
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      right: unset;
      left: 0;
    }
    left: unset;
    right: calc(50% + -1px);
    width: 2px;
    @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    background: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, ${props => props.theme.interactive} 100%);
    height: 4rem;
    }
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    left: calc(50% - .5rem); 
    }
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      left: calc(-.5rem + -1px);
    }
    height: 1rem;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    box-shadow: 0px 0px 0px 4px ${props => props.theme.background};
    z-index: 999;
    background-color: ${props => props.theme.interactive};
  }
`)

const EventTitle = styled.span(props => css`
  width: 100%;
  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    margin-left: 0;
    padding-left: ${props => props.$index & 1 ? '1rem' : 0};
    width: 50%;
  }
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding-left: 1rem;
  }
  line-height: 200%;
  display: block;
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
  position: relative;
  font-size: .8rem;
  padding-top: .5rem;
  text-wrap: pretty;  
  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    padding-left: ${props => props.$index & 1 ? '1rem' : 0};
    padding-right: ${props => props.$index & 1 ? 0 : '1rem'};
    width: 50%;
  }
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding-left: 1rem;
    padding-right: 0;
    margin-bottom: 2rem;
    width: auto;
  }
  text-align: left;
`)

export const Timeline = props => {
  return (
    <TimelineContainer>
      <ThenAndNow aria-hidden="true" $then>{props.earliest}</ThenAndNow>
      <TimelineList aria-describedby='timeline-description'>
      {
        props.events.map((event, index) => (
          <TimelineEvent $index={index} key={`event-${index}`}>
          <EventTitle $index={index}>{ event.event }</EventTitle>
          <EventDescription $index={index}>
            { event.description }
          </EventDescription>
        </TimelineEvent>
        )
      )
    }
      </TimelineList>
      <ThenAndNow aria-hidden="true" $now>{props.now}</ThenAndNow>
      <ScreenReaderOnly id='timeline-description'>A timeline of my career from {props.earliest} to {props.now}.
        I think exact dates are less important than the experience gained and create an assumption of my age.</ScreenReaderOnly>
    </TimelineContainer>
  )
}