import styled from '@emotion/styled'

const Main = styled.main`
  flex: 1;
  padding: 2em 0;

  ${props => props.center && `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`

export default Main