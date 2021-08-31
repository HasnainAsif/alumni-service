import React, { Fragment, useState } from "react";
// import { onChangeArrayType } from "./profileFunctions";

const Siblings = ({ formData, setFormData }) => {
  const { siblings } = formData;

  const [countFields, setCountFields] = useState([{ count: 0 }]);
  const [lastCount, setLastCount] = useState(0);

  const onAdd = (e) => {
    e.preventDefault();
    const lastFieldCount = countFields[countFields.length - 1].count; // last Field Count Value
    setCountFields([...countFields, { count: lastFieldCount + 1 }]);
    setFormData({
      ...formData,
      siblings: [
        ...siblings,
        {
          firstname: "",
          lastname: "",
          yearCompleted: "",
          middleSchool: {
            name: "",
            yearStarted: "",
            yearEnded: "",
          },
          highSchool: {
            name: "",
            yearStarted: "",
            yearEnded: "",
          },
        },
      ],
    });
    setLastCount(lastFieldCount + 1);
  };

  const onSubtract = (e) => {
    e.preventDefault();
    const allFields = countFields;
    allFields.pop(); // delete last value
    setCountFields([...allFields]);
    formData.siblings.pop();
    setFormData({ ...formData });

    const lastFieldCount = countFields[countFields.length - 1].count; // last Field Value
    setLastCount(lastFieldCount);
  };

  const onChange = (e) => {
    let value = e.target.value;
    let newValue = [];

    newValue = siblings;
    newValue[lastCount] = {
      ...siblings[lastCount],
      [e.target.name]: value,
    };

    setFormData({
      ...formData,
      siblings: [...newValue],
    });
  };
  const onChangeMiddleschool = (e) => {
    let value = e.target.value;
    let newValue = [];

    newValue = siblings;
    newValue[lastCount] = {
      ...siblings[lastCount],
      middleSchool: {
        ...siblings[lastCount].middleSchool,
        [e.target.name]: value,
      },
    };

    setFormData({
      ...formData,
      siblings: [...newValue],
    });
  };
  const onChangeHighschool = (e) => {
    let value = e.target.value;
    let newValue = [];

    newValue = siblings;
    newValue[lastCount] = {
      ...siblings[lastCount],
      highSchool: {
        ...siblings[lastCount].highSchool,
        [e.target.name]: value,
      },
    };

    setFormData({
      ...formData,
      siblings: [...newValue],
    });
  };

  return (
    <div className="row mt-3 pt-2" style={{ borderTop: "1px solid #fff" }}>
      {countFields.map((item, index) => (
        <Fragment key={item.count}>
          <div className={`col-md-4 col-sm-6 ${item.count !== 0 && " mt-4"}`}>
            <label className="labels">Sibling's First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Sibling's First Name"
              name="firstname"
              value={siblings?.firstname}
              onChange={(e) => onChange(e, formData, setFormData)}
              disabled={item.count !== lastCount}
            />
          </div>
          <div className={`col-md-4 col-sm-6 ${item.count !== 0 && " mt-4"}`}>
            <label className="labels">Sibling's Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Sibling's Last Name"
              name="lastname"
              value={siblings?.lastname}
              onChange={(e) => onChange(e, formData, setFormData)}
              disabled={item.count !== lastCount}
            />
          </div>
          <div className={`col-md-4 col-sm-6 ${item.count !== 0 && " mt-4"}`}>
            <label className="labels">Sibling's Year Completed</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Sibling's Year Completed"
              name="yearCompleted"
              value={siblings?.yearCompleted}
              onChange={(e) => onChange(e, formData, setFormData)}
              disabled={item.count !== lastCount}
            />
          </div>
          <div className="col-md-4 col-sm-6">
            <label className="labels">Sibling's Middle School Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Sibling's Middle School Name"
              name="name"
              value={siblings?.middleSchool?.name}
              onChange={(e) => onChangeMiddleschool(e, formData, setFormData)}
              disabled={item.count !== lastCount}
            />
          </div>
          <div className="col-md-4 col-sm-6">
            <label className="labels">
              Sibling's Middle School Year Started
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Sibling's Middle School Year Started"
              name="yearStarted"
              value={siblings?.middleSchool?.yearStarted}
              onChange={(e) => onChangeMiddleschool(e, formData, setFormData)}
              disabled={item.count !== lastCount}
            />
          </div>
          <div className="col-md-4 col-sm-6">
            <label className="labels">Siblings Middle School Year Ended</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Siblings Middle School Year Ended"
              name="yearEnded"
              value={siblings?.middleSchool?.yearEnded}
              onChange={(e) => onChangeMiddleschool(e, formData, setFormData)}
              disabled={item.count !== lastCount}
            />
          </div>
          <div className="col-md-4 col-sm-6">
            <label className="labels">Sibling's High School Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Sibling's High School Name"
              name="name"
              value={siblings?.highSchool?.name}
              onChange={(e) => onChangeHighschool(e, formData, setFormData)}
              disabled={item.count !== lastCount}
            />
          </div>
          <div className="col-md-4 col-sm-6">
            <label className="labels">Siblings High School YearStarted</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Siblings High School YearStarted"
              name="yearStarted"
              value={siblings?.highSchool?.yearStarted}
              onChange={(e) => onChangeHighschool(e, formData, setFormData)}
              disabled={item.count !== lastCount}
            />
          </div>
          <div className="col-md-4 col-sm-6">
            <label className="labels">Siblings High School YearEnded</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Siblings High School YearEnded"
              name="yearEnded"
              value={siblings?.highSchool?.yearEnded}
              onChange={(e) => onChangeHighschool(e, formData, setFormData)}
              disabled={item.count !== lastCount}
            />
          </div>
          {item.count === lastCount && (
            <div className="col-12" style={{ textAlign: "center" }}>
              <button onClick={onAdd}>Add Field</button>
              {item.count !== 0 && (
                <button onClick={onSubtract}>Delete Field </button>
              )}
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Siblings;
