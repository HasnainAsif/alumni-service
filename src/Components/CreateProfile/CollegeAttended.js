import React from "react";
import { onChange } from "./profileFunctions";

const CollegeAttended = ({ formData, setFormData }) => {
  const { collegeAttended } = formData;
  return (
    <div className="row mt-3 pt-2" style={{ borderTop: "1px solid #fff" }}>
      <div className="col-md-4 col-sm-6">
        <label className="labels">College Attended Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter College Attended Name"
          name="collegeAttended.name"
          value={collegeAttended?.name}
          onChange={(e) => onChange(e, formData, setFormData)}
        />
      </div>
      <div className="col-md-4 col-sm-6">
        <label className="labels">College Attended Year Started</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter College Attended Year Started"
          name="collegeAttended.yearStarted"
          value={collegeAttended?.yearStarted}
          onChange={(e) => onChange(e, formData, setFormData)}
        />
      </div>
      <div className="col-md-4 col-sm-6">
        <label className="labels">College Attended Year Ended</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter College Attended Year Ended"
          name="collegeAttended.yearEnded"
          value={collegeAttended?.yearEnded}
          onChange={(e) => onChange(e, formData, setFormData)}
        />
      </div>
    </div>
  );
};

export default CollegeAttended;
