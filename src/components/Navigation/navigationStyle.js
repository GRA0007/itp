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
  font-weight: 600;
  font-size: 1.2em;
  user-select: none;
  margin: 0 .5em;
`

export const StyledItem = styled.a`
  font-size: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5em;
  height: 2em;
  width: 2em;
  text-decoration: none;
  transition: background .15s;
  position: relative;

  span {
    font-size: 1rem;
    display: none;
  }

  &.active {
    width: auto;
    padding: 0 .5em;
    background: ${props => props.theme.highlight};

    span {
      display: block;
    }
  }

  &:not(.active)::after {
    content: attr(aria-label);
    font-size: 1rem;
    display: block;
    background: ${props => props.theme.primary};
    padding: .3em .5em;
    border-radius: .4em;
    position: absolute;
    top: calc(100% + 1em);
    pointer-events: none;
    border: .15em solid ${props => props.theme.highlight};
    box-sizing: border-box;
    opacity: 0;
    transform: translateY(-.1em);
    transition: transform .15s, opacity .15s;
  }
  
  &:hover, &:focus {
    background: ${props => props.theme.highlight};

    &:not(.active)::after {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (${props => props.theme.breakpointTablet}) {
    width: auto;
    padding: 0 .5em;
    justify-content: flex-start;

    span {
      display: block;
    }

    &:hover, &:focus {
      &:not(.active)::after {
        content: none;
      }
    }
  }
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
  transition: background .15s;
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
    background: ${props => props.theme.highlight};
    outline: none;
  }

  div {
    height: 4px;
    width: 1em;
    background: currentColor;
  }

  @media (${props => props.theme.breakpointTablet}) {
    display: flex;
  }
`

export const LanguageSelect = styled.select`
  font: inherit;
  color: inherit;
  background: ${props => props.theme.highlight};
  border: 0;
  padding: .4em .6em;
  border-radius: .4em;
  margin: 0;
  appearance: none;
  font-size: .9em;
  padding-right: 2em;
  background-image: url("data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><foreignObject width=%22100px%22 height=%22100px%22><div xmlns=%22http://www.w3.org/1999/xhtml%22 style=%22color:${props => encodeURIComponent(props.theme.secondary)};font-size:60px;display:flex;align-items:center;justify-content:center;height:100%25;width:100%25%22>▾</div></foreignObject></svg>");
  background-repeat: no-repeat;
  background-position: right .4em center;
  background-size: 1.4em;
  max-width: 15ch;
`