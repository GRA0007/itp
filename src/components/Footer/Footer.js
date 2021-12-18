import { SelectField } from 'components'

import {
  Wrapper,
} from './footerStyle'

const Footer = () => (
  <Wrapper>
    <a href="https://bengrant.dev">Created by jan Benji</a>

    <div style={{ flex: 1 }} />

    <SelectField
      title="Language"
      options={{
        en: 'English',
        //toki: 'toki pona',
      }}
    />
  </Wrapper>
)

export default Footer