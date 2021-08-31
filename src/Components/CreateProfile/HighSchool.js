import React from "react";
import { onChange } from "./profileFunctions";

const HighSchool = ({ formData, setFormData }) => {
  const { highschool } = formData;
  return (
    <div className="row mt-3 pt-2" style={{ borderTop: "1px solid #fff" }}>
      <div className="col-md-4 col-sm-6">
        <label className="labels">High School Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter High School Name"
          name="highschool.name"
          value={highschool?.name}
          onChange={(e) => onChange(e, formData, setFormData)}
        />
      </div>
      <div className="col-md-4 col-sm-6">
        <label className="labels">High School Year Started</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter High School Year Started"
          name="highschool.yearStarted"
          value={highschool?.yearStarted}
          onChange={(e) => onChange(e, formData, setFormData)}
        />
      </div>
      <div className="col-md-4 col-sm-6">
        <label className="labels">High School Year Ended</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter High School Year Ended"
          name="highschool.yearEnded"
          value={highschool?.yearEnded}
          onChange={(e) => onChange(e, formData, setFormData)}
        />
      </div>
    </div>
  );
};

export default HighSchool;
