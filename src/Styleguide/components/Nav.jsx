import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="styleguide__nav">
        <h2>Style Nav</h2>
        <Link to="./colors">Colors</Link>
        <Link to="./typography">Typography</Link>
        <Link to="./buttons">Buttons</Link>
        <Link to="./icons">Icons</Link>
      </nav>
    </>
  )
}