import { Outlet, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
const Header = () => {
  const navigate = useNavigate();
  const LogoutHandler = () => {
    navigate("/");
  };
  return (
    <>
      <header className={classes.header}>
        <h1>Redux Auth</h1>

        <nav>
          <ul>
            <li>
              <Link to="/">My Products</Link>
            </li>
            <li>
              <Link to="/">My Sales</Link>
            </li>
            <li>
              <button onClick={LogoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
