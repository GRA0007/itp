import styled from '@emotion/styled'

export const Wrapper = styled.div`
  &.labelled {
    margin: .8em 0;
  }
`

export const Label = styled.label`
  display: block;
  font-size: 1em;
  margin-bottom: .2em;
`

export const Select = styled.select`
  font: inherit;
  color: inherit;
  background: ${props => props.theme.background};
  --border-color: ${props => props.theme.secondary};
  border: 2px solid var(--border-color);
  padding: .4em .6em;
  border-radius: .4em;
  margin: 0;
  box-sizing: border-box;

  appearance: none;
  padding-right: 2em;
  background-image: url("data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><foreignObject width=%22100px%22 height=%22100px%22><div xmlns=%22http://www.w3.org/1999/xhtml%22 style=%22color:${props => encodeURIComponent(props.theme.secondary)};font-size:60px;display:flex;align-items:center;justify-content:center;height:100%25;width:100%25%22>▾</div></foreignObject></svg>");
  background-repeat: no-repeat;
  background-position: right .4em center;
  background-size: 1.4em;

  .labelled & {
    width: 100%;
  }

  &:disabled {
    --border-color: ${props => props.theme.theme === 'light' ? props.theme.lightGray : props.theme.darkGray};
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