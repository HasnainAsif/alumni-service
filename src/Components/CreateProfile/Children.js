import React, { Fragment, useState } from "react";
// import { onChangeArrayType } from "./profileFunctions";

const Children = ({ formData, setFormData }) => {
  const { children } = formData;

  const [countFields, setCountFields] = useState([{ count: 0 }]);
  const [lastCount, setLastCount] = useState(0);

  const onAdd = (e) => {
    e.preventDefault();
    const lastFieldCount = countFields[countFields.length - 1].count; // last Field Count Value
    setCountFields([...countFields, { count: lastFieldCount + 1 }]);
    setFormData({
      ...formData,
      children: [
        ...children,
        // {
        //   firstname: "",
        //   lastname: "",
        //   graduationYear: "",
        // },
      ],
    });
    setLastCount(lastFieldCount + 1);
  };

  const onSubtract = (e) => {
    e.preventDefault();
    const allFields = countFields;
    allFields.pop(); // delete last value
    setCountFields([...allFields]);
    formData.children.pop();
    setFormData({ ...formData });

    const lastFieldCount = countFields[countFields.length - 1].count; // last Field Value
    setLastCount(lastFieldCount);
  };

  const onChangeArrayType = (e, rowCount) => {
    let value = e.target.value;
    let newValue = [];

    newValue = children;
    newValue[rowCount] = {
      ...children[rowCount],
      [e.target.name]: value,
    };

    setFormData({
      ...formData,
      children: [...newValue],
    });
  };
  console.log(children);

  return (
    <div className="row mt-3 pt-2" style={{ borderTop: "1px solid #fff" }}>
      {countFields.map((item, index) => (
        <Fragment key={item.count}>
          <div className={`col-md-4 col-sm-6 ${item.count !== 0 && " mt-4"}`}>
            <label className="labels">Child's First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Child's First Name"
              name="firstname"
              value={children?.firstname}
              onChange={(e) => onChangeArrayType(e, item.count)}
              // disabled={item.count !== lastCount}
            />
          </div>
          <div className={`col-md-4 col-sm-6 ${item.count !== 0 && " mt-4"}`}>
            <label className="labels">Child's Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Child's Last Name"
              name="lastname"
              value={children?.lastname}
              onChange={(e) => onChangeArrayType(e, item.count)}
              // disabled={item.count !== lastCount}
            />
          </div>
          <div className={`col-md-4 col-sm-6 ${item.count !== 0 && " mt-4"}`}>
            <label className="labels">Child's Graduation Year</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Child's Graduation Year"
              name="graduationYear"
              value={children?.graduationYear}
              onChange={(e) => onChangeArrayType(e, item.count)}
              // disabled={item.count !== lastCount}
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

export default Children;
