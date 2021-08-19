import React from "react";
import { onChange } from "./profileFunctions";

const MiddleSchool = ({ formData, setFormData }) => {
  const { middleschool } = formData;
  return (
    <div className="row mt-3 pt-2" style={{ borderTop: "1px solid #fff" }}>
      <div className="col-md-4 col-sm-6">
        <label className="labels">Middleschool name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Middleschool name"
          name="middleschool.name"
          value={middleschool?.name}
          onChange={(e) => onChange(e, formData, setFormData)}
        />
      </div>
      <div className="col-md-4 col-sm-6">
        <label className="labels">Middleschool Year Started</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Middleschool Year Started"
          name="middleschool.yearStarted"
          value={middleschool?.yearStarted}
          onChange={(e) => onChange(e, formData, setFormData)}
        />
      </div>
      <div className="col-md-4 col-sm-6">
        <label className="labels">Middleschool Year Ended</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Middleschool Year Ended"
          name="middleschool.yearEnded"
          value={middleschool?.yearEnded}
          onChange={(e) => onChange(e, formData, setFormData)}
        />
      </div>
    </div>
  );
};

export default MiddleSchool;
