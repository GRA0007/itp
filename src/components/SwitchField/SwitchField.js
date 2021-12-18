import { useTranslation } from 'react-i18next'

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
}) => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Switch
        type="button"
        onClick={() => onChange(!value)}
        role="switch"
        title={value ? t('controls.switch.on') : t('controls.switch.off')}
        aria-checked={value}
        {...props}
      />

      {label && <Label htmlFor={props.id}>{label}</Label>}
    </Wrapper>
  )
}

export default SwitchField