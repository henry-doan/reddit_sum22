import { Link } from 'react-router-dom';

const Nomatch = () => (
  <>
    <h1>Looks like you are in the wrong place</h1>
    <h3>404 - Page Not Found</h3>
    <Link to='/'>
      Return Home
    </Link>
  </>
) 

export default Nomatch;