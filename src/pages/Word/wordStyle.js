import styled from '@emotion/styled'

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: .4em;
  font-size: 1.8em;

  h1 {
    font-weight: 750;
    font-size: 1.6em;
    margin: 0;
  }
`

export const IPA = styled.span`
  font-weight: 600;
  font-size: 1.5em;
  display: block;
  color: ${props => props.theme.strongGray};
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

export const Example = styled.div`
  margin: .6em 0;

  span {
    display: flex;
    align-items: center;
    gap: .4em;
  }

  .translation {
    font-style: italic;
    color: ${props => props.theme.strongGray};
  }
`

export const Etymology = styled.div`
  margin: .3em 0;
`

export const Glyphs = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
  gap: 1em .8em;
  margin: 1em 0;
`

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em .8em;
  margin: 1em 0;
`