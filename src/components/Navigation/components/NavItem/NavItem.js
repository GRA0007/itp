import { NavLink } from 'react-router-dom'

import {
  Wrapper,
} from './navItemStyle'

const NavItem = ({
  label,
  to,
  icon,
}) => (
  <Wrapper
    to={to}
    aria-label={label}
    as={NavLink}
  >
    {icon}
    <span>{label}</span>
  </Wrapper>
)

export default NavItem