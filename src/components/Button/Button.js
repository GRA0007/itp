import {
  Wrapper,
} from './buttonStyle'

const Button = ({
  type = 'button',
  secondary,
  ...props
}) => (
  <Wrapper
    type={type}
    data-secondary={secondary}
    {...props}
  />
)

export default Button