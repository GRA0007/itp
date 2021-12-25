import styled from '@emotion/styled'

export const Wrapper = styled.button`
  margin: 0;
  color: inherit;
  font: inherit;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
  color: ${props => props.theme.secondary};
  height: 1.4em;
  width: 1.4em;
  display: flex;
  font-size: 1em;
  align-items: center;
  justify-content: center;
`