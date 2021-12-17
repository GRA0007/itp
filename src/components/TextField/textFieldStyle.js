import styled from '@emotion/styled'

export const Wrapper = styled.div`
  &.labelled {
    margin: .8em 0;
  }
  flex: 1;
`

export const Label = styled.label`
  display: block;
  font-size: 1em;
  margin-bottom: .2em;
`

export const Input = styled.input`
  font: inherit;
  color: inherit;
  background: ${props => props.theme.background};
  --border-color: ${props => props.theme.secondary};
  border: 2px solid var(--border-color);
  padding: .4em .6em;
  border-radius: .4em;
  margin: 0;
  box-sizing: border-box;
  width: 100%;

  &:disabled {
    --border-color: ${props => props.theme.weakGray};
    color: var(--border-color);
  }
`

export const Error = styled.span`
  display: block;
  font-size: .8em;
  margin-top: .2em;
  font-weight: 500;
  color: ${props => props.theme.secondary};
`