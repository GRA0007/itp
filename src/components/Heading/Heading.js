import styled from '@emotion/styled'

const Heading = styled.h1`
  margin: 0 0 1em;
  font-size: 2em;
  font-weight: 600;

  ${props => props.as === 'h2' && `
    margin: 1em 0 .5em;
    font-size: 1.4em;
    font-weight: 600;
  `}

  &[data-inline=true] {
    margin: 0;
  }
`

export default Heading