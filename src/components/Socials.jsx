import styled, { css } from 'styled-components'
import { LinkedIn } from './socialIcons/LinkedIn'
import { NPM } from './socialIcons/NPM'
import { Instagram } from './socialIcons/Instagram'
import { GitHub } from './socialIcons/GitHub'
import { YouTube } from './socialIcons/YouTube'

const FlexList = styled.ul(props => css`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
`)

const SocialItem = styled.li(props => css`
  margin: 0;
  padding: 0;
`)

export const Socials = props => (
  <FlexList>
    <SocialItem>
      <LinkedIn />
    </SocialItem>
    <SocialItem>
      <YouTube />
    </SocialItem>
    <SocialItem>
      <Instagram />
    </SocialItem>
    <SocialItem>
      <GitHub />
    </SocialItem>
    <SocialItem>
      <NPM />
    </SocialItem>
  </FlexList>
)
