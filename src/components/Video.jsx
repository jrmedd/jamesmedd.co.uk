import styled, { css } from 'styled-components'
import { StyledFigure, StyledFigCaption } from './Figure';

const StyledVideo = styled.video(props => css`
  width: 100%;
  border-radius: .25rem;
`)

export const Video = props => (
  <StyledFigure>
    <StyledVideo playsInline autoPlay loop muted>
      <source src={props.src} type="video/webm" />
      <source src={props.src.replace('webm', 'mp4')} type="video/mp4" />
      Your browser does not support the video tag.
    </StyledVideo>
    <StyledFigCaption>{ props.caption }</StyledFigCaption>
  </StyledFigure>
);