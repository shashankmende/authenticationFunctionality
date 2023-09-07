import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <>
    <Link to="/" className="link-item">
      <li>Home</li>
    </Link>
    <Link to="/about" className="link-item">
      <li>About</li>
    </Link>
  </>
)

export default Header
