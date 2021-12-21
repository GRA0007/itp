import { NavLink } from 'react-router-dom'

import {
  Wrapper,
} from './navItemStyle'

const NavItem = ({
  label,
  to,
  icon,
  active, // override NavLink
}) => (
  <Wrapper
    to={to}
    aria-label={label}
    as={NavLink}
    className={active ? 'active' : ''}
  >
    {icon}
    <span>{label}</span>
  </Wrapper>
)

export default NavItem