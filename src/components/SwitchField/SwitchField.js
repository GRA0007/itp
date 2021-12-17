import {
  Wrapper,
  Label,
  Switch,
} from './switchFieldStyle'

const SwitchField = ({
  label,
  onChange,
  value,
  ...props
}) => (
  <Wrapper>
    <Switch
      type="button"
      onClick={() => onChange(!value)}
      role="switch"
      title={value ? 'On' : 'Off'}
      aria-checked={value}
      {...props}
    />

    {label && <Label htmlFor={props.id}>{label}</Label>}
  </Wrapper>
)

export default SwitchField