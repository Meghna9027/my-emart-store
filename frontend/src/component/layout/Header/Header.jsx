import { Link } from "react-router-dom";
import { BsSearch, BsCart3 } from "react-icons/bs";
import { CgProfile} from "react-icons/cg";
import { useSelector } from "react-redux";
import UserOptions from "./UserOptions";
import "./Header.css";

function Header() {
  const {isAuthenticated, user } = useSelector((state) => state.userReducer);
  return (
    <header>
      <Link to="/" className="heading">EMart</Link>
      <nav>
        <ul className="navlist">
          <li>
            <Link to="/" className="text">Home</Link>
          </li>
          <li>
            <Link to="/products" className="text">Products</Link>
          </li>
          <li>
            <Link to="/about" className="text">About</Link>
          </li>
        </ul>
        <ul className="navlist">
          <li>
            <Link to="/search" className="text">
              <BsSearch />
            </Link>
          </li>
          <li>
            <Link to="/cart" className="text">
              <BsCart3 />
            </Link>
          </li>
          <li>
            <Link to="/login" className="text">
              <CgProfile />
            </Link>
          </li>
        </ul>
        <ul>
        {isAuthenticated && <UserOptions user={user} /> }  
        </ul>
      </nav>
    </header>
  );
}

export default Header;
