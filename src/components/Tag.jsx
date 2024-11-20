import styled, { css } from 'styled-components'

const StyledList = styled.ul(props => css`
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: 100%;
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
`)

const TagOutline = styled.div(props => css`
  display: block;
  border-radius: .5rem;
  border: 1px solid ${props => props.theme.interactive};
  background-color: ${props => props.theme.background};
  margin: 0;
  padding: .5rem 1rem;
  color: ${props => props.theme.interactive};
  font-size: .8rem;
`)

export const TagList = props => (
  <StyledList>
    {
      props.tags.map((tag, index) => <Tag key={`tag-${index}`} text={tag} />)
    }
  </StyledList>
)

export const Tag = props => (
  <TagOutline as={props.interactive ? 'div' : 'li'}>
    { props.text }
  </TagOutline>
)

