import styled from '@emotion/styled'

export const Wrapper = styled.div`
  border: 2px solid ${props => props.theme.gray};
  background: ${props => props.theme.background};
  border-radius: 1em;
  box-sizing: border-box;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: .4em;
  padding: .8em .6em 0 1.5em;
`

export const Content = styled.div`
  padding: 0 1.5em 1.2em;
`

export const Word = styled.h2`
  font-weight: 600;
  font-size: 1.4em;
  margin: 0;
`

export const Category = styled.h3`
  font-weight: 700;
  font-style: italic;
  font-size: .8em;
  margin: .5em 0 0;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: ${props => props.theme.secondary};
`

export const Def = styled.span`
  display: block;
  margin-left: 2em;
  font-weight: 400;
`

export const Example = styled.span`
  display: block;
  margin-left: 2em;
  color: ${props => props.theme.strongGray};
`