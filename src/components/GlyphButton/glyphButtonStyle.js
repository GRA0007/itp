import styled from '@emotion/styled'

export const Container = styled.a`
  margin: 0;
  color: inherit;
  padding: 0;
  border: 2px solid ${props => props.theme.gray};
  background: ${props => props.theme.background};
  border-radius: .3em;
  box-sizing: border-box;
  color: ${props => props.theme.secondary};
  min-height: 5rem;
  min-width: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 3.5em;
  overflow: hidden;
  box-shadow: 0 .2rem 0 0 ${props => props.theme.gray};
  transition: transform .15s, box-shadow .15s;
  transform: translateY(0);
  font-family: ${props => props['data-font']}, 'linja-pona';

  &:active {
    transform: translateY(.2rem);
    box-shadow: 0 0 0 0 ${props => props.theme.gray};
  }
`
