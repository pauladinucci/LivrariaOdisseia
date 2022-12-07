import { Outlet, Link } from "react-router-dom";
import ImgSearch from "../images/search.png";
import ImgArrow from "../images/arrow.png";
import Logo from "../images/logo.png";
import "./Layout.css";
import Cart from "../images/cart.png";

const Layout = () => {
  return (
    <>
      <nav>
        <img
          src={Logo}
          width="100"
        />
        <div className="search">
          <img
            src={ImgSearch}
          />
          <input text="" />
          <img
            src={ImgArrow}
          />
        </div>
        <ul>
          <li>
            <a className="color" href="/">Home&nbsp;&nbsp;</a>|
          </li>
          <li>
            <a className="color" href="/">Criar Conta &nbsp;&nbsp;</a>|
          </li>
          <li>
            <a className="color" href="/">Entrar</a>
          </li>
          <li>
            <a href="/">
              <img
                src={Cart}
                width="21px"
              />
            </a>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;