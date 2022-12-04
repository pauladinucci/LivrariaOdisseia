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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Criar Conta</Link>
          </li>
          <li>
            <Link to="/">Entrar</Link>
          </li>
          <li>
            <img
            src={Cart}
            />
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;