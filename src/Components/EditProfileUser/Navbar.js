import React from "react";
import { Link, useHistory } from "react-router-dom";
import browserRoutes from "../../Routes/browserRoutes";
import { UserContext } from "../../App";

const Navbar = () => {
  const [user, setUser] = React.useContext(UserContext);
  const history = useHistory();

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    setUser(null);
    history.push(browserRoutes.AUTH);
  };

  const toAdminCenter = (e) => {
    e.preventDefault();
    history.push(browserRoutes.ALL_PROFILES);
  };

  const toYourProfile = (e) => {
    e.preventDefault();
    history.push(browserRoutes.PROFILE_DETAIL);
  };

  return (
    <nav className="navbar">
      {/* <img style={{ width: "50%" }} src="images/logo.png" alt="..." /> */}
      <img width="200px" src="images/fake-logo.png" alt="..." />

      <div className="d-flex">
        {user?.admin ? (
          <button
            // className="btn selectwalletbutton my-2 my-sm-0"
            className="nav-link mr-2"
            onClick={toAdminCenter}
          >
            Admin Center
          </button>
        ) : (
          <button className="nav-link mr-2" onClick={toYourProfile}>
            Your Profile
          </button>
        )}
        <button className="btn selectwalletbutton" onClick={logout}>
          Log out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
