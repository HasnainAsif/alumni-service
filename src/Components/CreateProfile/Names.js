import React from "react";
import { onChange } from "./profileFunctions";

const Names = ({ formData, setFormData }) => {
  const {
    title,
    firstname,
    middlename,
    lastname,
    marriedName,
    motherName,
    fatherName,
    spouseName,
  } = formData;

  return (
    <div className="row mt-3">
      <div className="col-md-4 col-sm-6">
        <label className="labels">Title</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Title"
          name="title"
          value={title}
          onChange={(e) => onChange(e, formData, setFormData)}
          aaa="aaa"
        />
      </div>
      <div className="col-md-4 col-sm-6">
        <label className="labels">First Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter First Name"
          name="firstname"
          value={firstname}
          onChange={(e) => onChange(e, formData, setFormData)}
        />
      </div>
      <div className="col-md-4 col-sm-6">
        <label className="labels">Middle Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Middle Name"
          name="middlename"
          value={middlename}
          onChange={(e) => onChange(e, formData, setFormData)}
        />
      </div>
      <div className="col-md-4 col-sm-6">
        <label className="labels">Last Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Email Address"
          name="lastname"
          value={lastname}
          onChange={(e) => onChange(e, formData, setFormData)}
        />
      </div>

      <div className="col-md-4 col-sm-6">
        <label className="labels">Married Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Married Name"
          name="marriedName"
          value={marriedName}
          onChange={(e) => onChange(e, formData, setFormData)}
        />
      </div>
      <div className="col-md-4 col-sm-6">
        <label className="labels">Mother Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Mother Name"
          name="motherName"
          value={motherName}
          onChange={(e) => onChange(e, formData, setFormData)}
        />
      </div>
      <div className="col-md-4 col-sm-6">
        <label className="labels">Father Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Father Name"
          name="fatherName"
          value={fatherName}
          onChange={(e) => onChange(e, formData, setFormData)}
        />
      </div>
      <div className="col-md-4 col-sm-6">
        <label className="labels">Spouse Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Spouse Name"
          name="spouseName"
          value={spouseName}
          onChange={(e) => onChange(e, formData, setFormData)}
        />
      </div>
    </div>
  );
};

export default Names;
