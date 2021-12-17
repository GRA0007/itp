import styled from '@emotion/styled'

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1.4em;
`

export const Label = styled.label`
  display: block;
`

export const Switch = styled.button`
  font: inherit;
  color: inherit;
  width: 3em;
  min-width: 3em;
  height: 1em;
  box-sizing: border-box;
  background: ${props => props.theme.strongGray};
  border: 0;
  margin: .5em 0;
  padding: 0;
  position: relative;
  border-radius: 10em;
  cursor: pointer;
  transition: background .15s;

  &::after {
    content: '';
    position: absolute;
    height: 2em;
    width: 2em;
    background: ${props => props.theme.background};
    border-radius: .7em;
    top: -.5em;
    left: 0;
    border: 2px solid ${props => props.theme.strongGray};
    box-sizing: border-box;
    transition: left .15s, border-color .15s;
  }

  &[aria-checked=true] {
    background: ${props => props.theme.surface};

    &::after {
      border-color: ${props => props.theme.surface};
      left: 1em;
    }
  }

  &:disabled {
    cursor: default;
    background: ${props => props.theme.weakGray};

    &::after {
      border-color: ${props => props.theme.weakGray};
    }

    &[aria-checked=true] {
      background: ${props => props.theme.gray};

      &::after {
        border-color: ${props => props.theme.gray};
      }
    }
  }
`