import styled from '@emotion/styled'

export const Wrapper = styled.div`
  padding: .5em .5em .7em;
  background: ${props => props.theme.background};
  border-radius: 1.3em;
  position: fixed;
  bottom: 4em;
  right: 4em;
  opacity: 0;
  pointer-events: none;
  transform: translateY(.2em);
  transition: opacity .15s, transform .15s;

  &.visible {
    opacity: 1;
    pointer-events: all;
    transform: translateY(0);
  }
`

export const Button = styled.button`
  margin: 0;
  font: inherit;
  color: ${props => props.theme.secondary};
  padding: 0;
  border: 2px solid ${props => props.theme.secondary};
  background: ${props => props.theme.background};
  border-radius: 1em;
  box-sizing: border-box;
  height: 3em;
  width: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 .2rem 0 0 ${props => props.theme.secondary};
  transition: transform .15s, box-shadow .15s;
  transform: translateY(0);

  &:active {
    transform: translateY(.2rem);
    box-shadow: 0 0 0 0 ${props => props.theme.secondary};
  }
`
