import React from "react";
import { onChange } from "./profileFunctions";

const Phones = ({ formData, setFormData }) => {
  const { homePhone, cellPhone, workPhone, emailAddress } = formData;
  return (
    <div className="row mt-3 pt-2" style={{ borderTop: "1px solid #fff" }}>
      <div className="col-md-4 col-sm-6">
        <label className="labels">Home Phone</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Home Phone"
          name="homePhone"
          value={homePhone}
          onChange={(e) => onChange(e, formData, setFormData)}
        />
      </div>
      <div className="col-md-4 col-sm-6">
        <label className="labels">Cell Phone</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Cell Phone"
          name="cellPhone"
          value={cellPhone}
          onChange={(e) => onChange(e, formData, setFormData)}
        />
      </div>
      <div className="col-md-4 col-sm-6">
        <label className="labels">Work Phone</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Work Phone"
          name="workPhone"
          value={workPhone}
          onChange={(e) => onChange(e, formData, setFormData)}
        />
      </div>
      <div className="col-md-4 col-sm-6">
        <label className="labels">Email Address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter Email Address"
          name="emailAddress"
          value={emailAddress}
          onChange={(e) => onChange(e, formData, setFormData)}
        />
      </div>
    </div>
  );
};

export default Phones;
