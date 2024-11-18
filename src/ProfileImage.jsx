import styled, { css } from 'styled-components'
import profilePicJpg from '/headshotbw.jpg?url'
import profilePicWebp from '/headshotbw.webp?url'

const CircularImage = styled.picture(props => css`
 & img {
   aspect-ratio: 1 / 1;
   height: 8.5rem;
   border-radius: 50%;
   box-shadow: -0.25rem 0.5rem 0 0.5rem ${props => props.theme.interactive };
 }
`)

const ProfileImage = props => (
  <CircularImage>
    <source srcSet={profilePicWebp} type='image/webp' />
    <source srcSet={profilePicJpg} type='image/jpg' />
    <img src={profilePicJpg} alt={props.alt} />
  </CircularImage>
)

export { ProfileImage }
