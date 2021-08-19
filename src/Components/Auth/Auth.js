import React from "react";
import Login from "./Login";
import Register from "./Register";

const Auth = () => {
  return (
    <div className="container">
      <nav className="navbar">
        {/* <img style={{ width: "50%" }} src="images/logo.png" alt="..." /> */}
        <img width="200px" src="images/fake-logo.png" alt="..." />
        <div className="d-flex">
          <button className="btn selectwalletbutton my-2 my-sm-0">
            Log in / Sign up
          </button>
        </div>
      </nav>
      <div className="container">
        <div className="card card0 border-0">
          <div className="row d-flex">
            <Login />
            <Register />
          </div>
          <div className="bg-blue py-4">
            <div className="row px-3">
              <small className="ml-4 ml-sm-5 mb-2">
                Copyright &copy; 2019. All rights reserved.
              </small>
              <div className="social-contact ml-4 ml-sm-auto">
                <span className="fa fa-facebook mr-4 text-sm"></span>
                <span className="fa fa-google-plus mr-4 text-sm"></span>
                <span className="fa fa-linkedin mr-4 text-sm"></span>
                <span className="fa fa-twitter mr-4 mr-sm-5 text-sm"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
