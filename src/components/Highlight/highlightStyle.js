import styled from '@emotion/styled'

export const Segment = styled.span`
  &.match {
    display: inline-block;
    background: ${props => props.theme.primary};
  }
`