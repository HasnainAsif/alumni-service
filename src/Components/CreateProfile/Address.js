import React from "react";
import { onChange } from "./profileFunctions";

const Address = ({ formData, setFormData }) => {
  const { address } = formData;

  return (
    <div className="row mt-3 pt-2" style={{ borderTop: "1px solid #fff" }}>
      {/* <hr className="" /> */}
      <div className="col-md-4 col-sm-6">
        <label className="labels">Address Line 1</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Address Line 1"
          name="address.line1"
          value={address?.line1}
          onChange={(e) => onChange(e, formData, setFormData)}
        />
      </div>
      <div className="col-md-4 col-sm-6">
        <label className="labels">Address Line 2</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Address Line 2"
          name="address.line2"
          value={address?.line2}
          onChange={(e) => onChange(e, formData, setFormData)}
        />
      </div>
      <div className="col-md-4 col-sm-6">
        <label className="labels">Address City</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Address City"
          name="address.city"
          value={address?.city}
          onChange={(e) => onChange(e, formData, setFormData)}
        />
      </div>
      <div className="col-md-4 col-sm-6">
        <label className="labels">Address State</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Address State"
          name="address.state"
          value={address?.state}
          onChange={(e) => onChange(e, formData, setFormData)}
        />
      </div>
      <div className="col-md-4 col-sm-6">
        <label className="labels">Address Zip</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Address Zip"
          name="address.zip"
          value={address?.zip}
          onChange={(e) => onChange(e, formData, setFormData)}
        />
      </div>
      <div className="col-md-4 col-sm-6">
        <label className="labels">Address Country</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Address Country"
          name="address.country"
          value={address?.country}
          onChange={(e) => onChange(e, formData, setFormData)}
        />
      </div>
    </div>
  );
};

export default Address;
