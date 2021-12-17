import { useEffect, useState } from 'react'

import { Segment } from './highlightStyle'

const Highlight = ({
  text,
  search,
}) => {
  const [result, setResult] = useState(text)

  useEffect(() => {
    setResult(text.split(new RegExp(`(${search})`, 'gi')).map((segment, i) => (
      <Segment
        key={i}
        className={segment.toLocaleLowerCase() === search.toLocaleLowerCase() ? 'match' : ''}
      >{segment}</Segment>
    )))
  }, [text, search])

  return result
}

export default Highlight