import React from "react";
import { onChange } from "./profileFunctions";

const IsraelSchool = ({ formData, setFormData }) => {
  const { israelSchool } = formData;
  return (
    <div className="row mt-3 pt-2" style={{ borderTop: "1px solid #fff" }}>
      <div className="col-md-4 col-sm-6">
        <label className="labels">Israel School Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Israel School Name"
          name="israelSchool.name"
          value={israelSchool?.name}
          onChange={(e) => onChange(e, formData, setFormData)}
        />
      </div>
      <div className="col-md-4 col-sm-6">
        <label className="labels">Israel School Year Started</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Israel School Year Started"
          name="israelSchool.yearStarted"
          value={israelSchool?.yearStarted}
          onChange={(e) => onChange(e, formData, setFormData)}
        />
      </div>
      <div className="col-md-4 col-sm-6">
        <label className="labels">Israel School Year Ended</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Israel School Year Ended"
          name="israelSchool.yearEnded"
          value={israelSchool?.yearEnded}
          onChange={(e) => onChange(e, formData, setFormData)}
        />
      </div>
    </div>
  );
};

export default IsraelSchool;
