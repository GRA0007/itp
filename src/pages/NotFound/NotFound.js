import { useNavigate } from 'react-router-dom'

import {
  Button,
  Main,
} from 'components'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <Main center>
      <h1 style={{margin: 0}}>Not found</h1>
      <p style={{margin: '1rem 0 2rem'}}>There's nothing here.</p>
      <Button secondary onClick={() => navigate(-1)}>Go back</Button>
    </Main>
  )
}

export default NotFound