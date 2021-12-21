import styled from '@emotion/styled'

const Wrapper = styled.div`
  width: ${props => props.theme.columnWidth};
  margin: 0 auto;
  max-width: 100%;
  padding: 0 1.5em;
  box-sizing: border-box;

  ${props => props.flex && `
    display: flex;
    flex-direction: column;
    gap: 1em;
  `}
`

export default Wrapper