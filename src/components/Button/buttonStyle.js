import styled from '@emotion/styled'

export const Wrapper = styled.button`
  margin: 0;
  font: inherit;
  --border-color: ${props => props.theme.theme === 'light' ? props.theme.blue : props.theme.darkYellow};
  border: 2px solid var(--border-color);
  color: ${props => props.theme.primary};
  background: ${props => props.theme.surface};
  box-shadow: 0 .2em 0 0 var(--border-color);
  padding: .5em 1.2em;
  border-radius: .5em;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transform: translateY(-.2em);
  transition: transform .15s, box-shadow .15s, background .15s, color .15s, border .15s;

  &:active {
    transform: translateY(0);
    box-shadow: 0 0 0 0 var(--border-color);
  }

  &[data-secondary=true] {
    --border-color: ${props => props.theme.secondary};
    color: ${props => props.theme.secondary};
    background: ${props => props.theme.background};
  }

  ${props => props.inline && `
    transform: translateY(0);
    padding: .3em 1.2em;
    margin-bottom: .2em;

    &:active {
      transform: translateY(.2em);
    }
  `}

  &:disabled {
    background: ${props => props.theme.lightGray};
    color: ${props => props.theme.darkGray};
    --border-color: ${props => props.theme.gray};
    cursor: default;

    &[data-secondary=true] {
      background: ${props => props.theme.background};
      color: ${props => props.theme.gray};
    }
  }
`