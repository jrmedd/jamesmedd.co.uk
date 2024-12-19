import { useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { StyledFigure, StyledFigCaption } from './Figure';

const StyledVideo = styled.video(props => css`
  width: 100%;
  border-radius: .25rem;
`)

const AudioToggle = styled.button(props => css`
  outline: 0;
  display: block;
  font-family: ${props => props.theme.fonts.body};
`)

export const Video = props => {
  const audioControl = useRef(null)
  const [muted, setMuted] = useState(true)
  const toggleAudio = event => {
    event.preventDefault()
    if (audioControl.current !== null) {
      const newState = !audioControl.current.muted
      setMuted(!audioControl.current.muted)
      audioControl.current.muted = newState
      console.log(newState)
    }
  }
  return (
    <StyledFigure>
      <StyledVideo ref={audioControl} playsInline autoPlay loop muted>
        <source src={props.src} type="video/webm" />
        <source src={props.src.replace('webm', 'mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </StyledVideo>
      <StyledFigCaption>
        { props.caption }
        {props.hasAudio && <AudioToggle onClick={toggleAudio}>Turn for the video above { muted ? 'on' : 'off'}</AudioToggle>}
      </StyledFigCaption>
    </StyledFigure>
  )
}