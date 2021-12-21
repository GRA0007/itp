import styled from '@emotion/styled'

export const Wrapper = styled.nav`
  background: ${props => props.theme.primary};
  color: ${props => props.theme.secondary};
  display: flex;
  align-items: center;
  padding: 0 1em;
  position: relative;

  @media (${props => props.theme.breakpointTablet}) {
    justify-content: space-between;
  }
`

export const Title = styled.span`
  display: block;
  font-weight: 750;
  font-size: 1.2em;
  user-select: none;
  margin: 0 .5em;
`

export const Items = styled.div`
  display: flex;
  align-items: center;
  gap: .7em;
  flex: 1;
  margin-left: 1em;

  @media (${props => props.theme.breakpointTablet}) {
    display: none;
    flex-direction: column;
    align-items: stretch;
    margin-left: 0;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: inherit;
    gap: .4em;
    z-index: 100;

    .open & {
      display: flex;
    }
  }
`

export const MenuButton = styled.button`
  font-size: 2em;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: .5em;
  height: 2em;
  width: 2em;
  text-decoration: none;
  transition: color .15s;
  position: relative;
  background: none;
  border: 0;
  margin: 0;
  padding: 0;
  display: none;
  cursor: pointer;
  color: inherit;
  gap: .2em;

  &:hover, &:focus {
    color: ${props => props.theme.theme === 'light' ? props.theme.purple : props.theme.white};
  }

  div {
    height: 4px;
    width: 1em;
    background: currentColor;
    transition: transform .15s, opacity .15s;
    position: relative;

    &:nth-of-type(2)::after {
      content: '';
      position: absolute;
      inset: 0;
      background: inherit;
      transition: transform .15s;
    }

    .open & {
      &:first-of-type, &:last-of-type {
        opacity: 0;
      }
      &:nth-of-type(2) {
        transform: rotate(45deg);
        &::after {
          transform: rotate(-90deg);
        }
      }
    }
  }

  @media (${props => props.theme.breakpointTablet}) {
    display: flex;
  }
`

export const ButtonWrapper = styled.div`
  @media (${props => props.theme.breakpointTablet}) {
    padding: 0 1em 1em;
    display: flex;
    flex-direction: column;
  }
`