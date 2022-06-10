import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <nav>
      <ul>
        <Link to='/'>
          <li>
            Home
          </li>
        </Link>
        <Link to='/about'>
          <li>
            About
          </li>
        </Link>
        <Link to='/subs'>
          <li>
            Subs
          </li>
        </Link>
      </ul>
    </nav>
  </>
)

export default Navbar;