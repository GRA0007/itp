import { forwardRef } from 'react'

import {
  Error,
  Select,
  Label,
  Wrapper,
} from './selectFieldStyle'

const SelectField = forwardRef(({
  label,
  error,
  options,
  ...props
}, ref) => (
  <Wrapper className={label ? 'labelled' : ''}>
    {label && <Label htmlFor={props.id}>{label}</Label>}

    <Select
      ref={ref}
      {...props}
    >
      {Object.keys(options).map(option => (
        <option key={option} value={option}>{options[option]}</option>
      ))}
    </Select>

  {error && <Error>{error}</Error>}
  </Wrapper>
))

export default SelectField