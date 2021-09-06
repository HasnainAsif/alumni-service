import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import serverRoutes from "../../Routes/serverRoutes";
import browserRoutes from "../../Routes/browserRoutes";
import setAuthToken from "../../utils/setAuthToken";

import { UserContext } from "../../App";

const Login = () => {
  const [user, setUser] = React.useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios
      .post(serverRoutes.LOGIN, formData)
      .then((res) => {
        setUser({ ...res.data?.user });
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data?.user));
        setAuthToken(res.data?.token);
        toast.success("Login Successfully");
        setFormData({ email: "", password: "" });
        if (res.data?.user?.admin) {
          history.push(browserRoutes.ALL_PROFILES);
        } else if (res.data?.user?.alumniId) {
          history.push(browserRoutes.PROFILE_DETAIL);
        } else {
          history.push(browserRoutes.CREATE_PROFILES);
        }
      })
      .catch((err) => {
        toast.error(
          err?.response?.data?.message || err?.message || "Something happens..."
        );
      });
    setLoading(false);
  };

  return (
    <div className="col-lg-6">
      <div className="card2 card border-0 px-4 py-5">
        <div className="row mb-4 px-3">
          <h6 className="mb-0 mr-4 mt-2">Login</h6>
        </div>
        <div className="row px-3 mb-4">
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <form onSubmit={onSubmit}>
          <div className="row px-3">
            <label className="mb-1">
              <h6 className="mb-0 text-sm">Email Address</h6>
            </label>
            <input
              className="mb-4"
              type="text"
              placeholder="Enter Email Address"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="row px-3">
            <label className="mb-1">
              <h6 className="mb-0 text-sm">Password</h6>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="row mb-3 px-3">
            <button
              type="submit"
              className="btn btn-blue text-center"
              disabled={loading}
            >
              {loading && (
                <div
                  className="spinner-border"
                  role="status"
                  style={{ width: "1.5rem", height: "1.5rem" }}
                >
                  <span className="sr-only">Loading...</span>
                </div>
              )}{" "}
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
