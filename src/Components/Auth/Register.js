import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import serverRoutes from "../../Routes/serverRoutes";
import browserRoutes from "../../Routes/browserRoutes";

const Register = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(serverRoutes.USERS, formData)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data?.token));
        localStorage.setItem("user", JSON.stringify(res.data?.user));
        toast.success("Registered Successfully");
        setFormData({ email: "", password: "" });
      })
      .catch((err) => {
        console.log(err.response);
        toast.error(
          err?.response?.data?.message || err?.message || "Something happens..."
        );
      });
  };
  return (
    <div className="col-lg-6">
      <div className="card2 card border-0 px-4 py-5">
        <div className="row mb-4 px-3">
          <h6 className="mb-0 mr-4 mt-2">Register</h6>
        </div>
        <div className="row px-3 mb-4">
          <div className="line"></div>
          <small className="or text-center"></small>
          <div className="line"></div>
        </div>
        <form onSubmit={onSubmit}>
          <div className="row px-3">
            <label className="mb-1">
              <h6 className="mb-0 text-sm">Email Address</h6>
            </label>
            <input
              className="mb-4"
              type="email"
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
            <button type="submit" className="btn btn-blue text-center">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
