import { Link } from "react-router-dom";

import './Topbar.scss';

export default function Topbar() {
  return (
    <>
      <header className="topbar">
        <h1>Styleguide</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/styleguide">Styleguide</Link>
        </nav>
        
      </header>
    </>
  )
}