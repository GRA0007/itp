import styled from '@emotion/styled'

export const Wrapper = styled.footer`
  background: ${props => props.theme.primary};
  color: ${props => props.theme.secondary};
  display: flex;
  align-items: center;
  padding: .7em 1.5em;

  @media (${props => props.theme.breakpointTablet}) {
    flex-direction: column;
    align-items: flex-end;
    gap: .8em;
  }
  @media (${props => props.theme.breakpointMobile}) {
    align-items: stretch;
    padding: 1em 1.5em 1.5em;
    
    select {
      width: 100%;
    }
  }
`

export const Links = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: .8em 1.5em;
  flex-wrap: wrap;

  @media (${props => props.theme.breakpointTablet}) {
    align-self: stretch;
  }
`
