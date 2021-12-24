import styled from '@emotion/styled'

export const Container = styled.a`
  margin: 0;
  color: inherit;
  padding: .5em;
  border: 2px solid ${props => props.theme.gray};
  background: ${props => props.theme.background};
  border-radius: 1em;
  box-sizing: border-box;
  color: ${props => props.theme.secondary};
  min-height: 5rem;
  min-width: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  overflow: hidden;
  box-shadow: 0 .2rem 0 0 ${props => props.theme.gray};
  transition: transform .15s, box-shadow .15s;
  transform: translateY(0);
  gap: .2em;

  &:active {
    transform: translateY(.2rem);
    box-shadow: 0 0 0 0 ${props => props.theme.gray};
  }

  span {
    font-size: 3.5em;
    font-family: ${props => props['data-font']}, 'linja-pona';
    line-height: 1em;
  }
  label {
    font-size: .8em;
    font-weight: 500;
    color: ${props => props.theme.strongGray};
    text-align: center;
  }
`
