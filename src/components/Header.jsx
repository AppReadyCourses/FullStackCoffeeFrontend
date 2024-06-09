import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header_flex">
      <div className="menu_flex">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="menu_gap">
            <h4>MENU</h4>
          </div>
        </Link>
      </div>
      <div>
        <Link to="/addcoffee">
          <button className="btn">Add coffee</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
