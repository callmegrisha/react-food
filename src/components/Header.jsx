import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <div className="nav-wrapper indigo darken-2">
        <div className="container">
          <Link className="brand-logo" to="/">
            React Food
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export { Header };
