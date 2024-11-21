import styled, { css, keyframes } from 'styled-components'
import { HeadingM } from './Typography'

String.prototype.camel = function() {
  return this
      .toLowerCase()
      .split(' ')
      .map((word, index) =>
          index === 0
              ? word
              : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join('')
}

const StyledList = styled.ul(props => css`
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: 100%;
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  outline: none;
  border: 0;
`)

const TagOutline = styled.li(props => css`
  position: relative;
  display: block;
  border-radius: .5rem;
  border: 1px solid ${props => props.theme.interactive};
  background-color: ${props => props.theme.background};
  margin: 0;
  padding: .5rem 1rem;
  color: ${props => props.theme.interactive};
  font-size: .8rem;
`)


const StyledCheckbox = styled.input(props => css`
  appearance: none;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  margin: 0;
  &:checked:before {
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    margin: 0;
    width: 1rem,;
    height: 1rem;
    margin-right: 1px;
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8px' height='8px' fill='none' viewBox='0 0 12 12'%3E%3Cpath stroke='${props => props.theme.interactive.replace('#', '%23')}' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m1.5 6 3.4 3.8 5.6-7.6'/%3E%3C/svg%3E")
  }
`)

const StyledLabel = styled.label(props => css`
  position: relative;
`)

export const TagList = props => (
  <StyledList as={props.interactive ? 'fieldset' : 'ul'}>
    {props.interactive ?? <HeadingM as='legend'>{props.name}</HeadingM>}
    {
      props.tags.map((tag, index) => <Tag name={props.name} interactive={props.interactive} key={`tag-${index}`} text={tag} />)
    }
  </StyledList>
)

export const Tag = props => {
  return (
  <TagOutline for={props.text.camel()} as={props.interactive ? 'label' : 'li'}>
    { props.text }
    { props.interactive  && <StyledCheckbox id={props.text.camel()} type='checkbox' />}
  </TagOutline>
)
}

