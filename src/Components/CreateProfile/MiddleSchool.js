import React from "react";
import { onChange } from "./profileFunctions";

const MiddleSchool = ({ formData, setFormData }) => {
  const { middleschool } = formData;
  return (
    <div className="row mt-3 pt-2" style={{ borderTop: "1px solid #fff" }}>
      <div className="col-md-4 col-sm-6">
        <label className="labels">Middle School Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Middle School Name"
          name="middleschool.name"
          value={middleschool?.name}
          onChange={(e) => onChange(e, formData, setFormData)}
        />
      </div>
      <div className="col-md-4 col-sm-6">
        <label className="labels">Middle School Year Started</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Middle School Year Started"
          name="middleschool.yearStarted"
          value={middleschool?.yearStarted}
          onChange={(e) => onChange(e, formData, setFormData)}
        />
      </div>
      <div className="col-md-4 col-sm-6">
        <label className="labels">Middle School Year Ended</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Middle School Year Ended"
          name="middleschool.yearEnded"
          value={middleschool?.yearEnded}
          onChange={(e) => onChange(e, formData, setFormData)}
        />
      </div>
    </div>
  );
};

export default MiddleSchool;
