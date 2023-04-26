import { Outlet, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import './Styleguide.scss';
import Buttons from "./views/Buttons";

export default function Styleguide() {

  return (
    <>
      <section className="styleguide">
        <Nav/>
        <Buttons />
      </section>
    </>
  )
}