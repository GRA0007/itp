import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 600px;
  margin: 0 auto;
  max-width: 100%;
  padding: 0 1em;
  box-sizing: border-box;
`

export const GlyphWrapper = styled.div`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: repeat(auto-fill, 6rem);
  justify-content: space-between;
  gap: 1em .8em;
  padding: 0 1.5em;
  margin-top: 1em;
`