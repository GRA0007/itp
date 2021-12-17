import { SelectField } from 'components'

import {
  Wrapper,
} from './footerStyle'

const Footer = () => (
  <Wrapper>
    <SelectField
      title="Language"
      options={{
        en: 'English',
        toki: 'toki pona',
      }}
    />
  </Wrapper>
)

export default Footer