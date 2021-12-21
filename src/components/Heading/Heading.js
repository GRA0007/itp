import styled from '@emotion/styled'

const Heading = styled.h1`
  margin: 0 0 1em;
  font-size: 2em;
  font-weight: 600;

  ${props => props.as === 'h2' && `
    margin: 1em 0 .5em;
    font-size: 1.4em;
  `}

  ${props => props.as === 'h3' && `
    margin: .5em 0 0;
    font-size: 1.1em;
  `}

  &[data-inline=true] {
    margin: 0;
  }
`

export default Heading