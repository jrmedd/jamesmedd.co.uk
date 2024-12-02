import styled, { css } from 'styled-components'
import { Button } from './Button'

export const SkipLink = styled(Button)(props => css`
  position:absolute;  
  left:-10000px;
  top:auto;
  width:1px;
  height:1px;
  overflow:hidden; 
  &:focus {
    left: 0;
    width: unset;
    height: unset;
  }
`)