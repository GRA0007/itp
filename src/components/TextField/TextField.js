import { forwardRef } from 'react'

import {
  Error,
  Input,
  Label,
  Wrapper,
} from './textFieldStyle'

const TextField = forwardRef(({
  label,
  type = 'text',
  error,
  ...props
}, ref) => (
  <Wrapper className={label ? 'labelled' : ''}>
    {label && <Label htmlFor={props.id}>{label}</Label>}

    <Input
      as={type === 'textarea' ? 'textarea' : 'input'}
      type={type}
      ref={ref}
      {...props}
    />

  {error && <Error>{error}</Error>}
  </Wrapper>
))

export default TextField