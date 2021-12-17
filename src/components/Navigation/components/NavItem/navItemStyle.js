import styled from '@emotion/styled'

export const Wrapper = styled.a`
  font-size: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 2em;
  min-width: 2em;
  text-decoration: none;
  transition: background .15s, color .15s;
  position: relative;

  span {
    font-size: .8rem;
    display: block;
    max-height: 0;
    overflow: hidden;
    transition: max-height .15s;
    padding: 0 .5em;
  }

  &.active {
    background: ${props => props.theme.surface};
    color: ${props => props.theme.primary};

    span {
      max-height: 3ex;
    }
  }
  
  &:hover, &:focus {
    color: ${props => props.theme.theme === 'light' ? props.theme.purple : props.theme.white};

    &.active {
      color: ${props => props.theme.primary};
    }
    span {
      max-height: 3ex;
    }
  }

  @media (${props => props.theme.breakpointTablet}) {
    width: auto;
    padding: 0 .5em;
    justify-content: flex-start;
    flex-direction: row;
    gap: .5em;

    span {
      max-height: initial;
      font-size: 1rem;
    }
  }
`