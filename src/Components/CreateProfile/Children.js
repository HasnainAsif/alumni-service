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
        {
          firstname: "",
          lastname: "",
          graduationYear: "",
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
    formData.children.pop();
    setFormData({ ...formData });

    const lastFieldCount = countFields[countFields.length - 1].count; // last Field Value
    setLastCount(lastFieldCount);
  };

  const onChangeArrayType = (e) => {
    let value = e.target.value;
    let newValue = [];

    newValue = children;
    newValue[lastCount] = {
      ...children[lastCount],
      [e.target.name]: value,
    };

    setFormData({
      ...formData,
      children: [...newValue],
    });
  };

  return (
    <div className="row mt-3 pt-2" style={{ borderTop: "1px solid #fff" }}>
      {countFields.map((item, index) => (
        <Fragment key={item.count}>
          <div className={`col-md-4 col-sm-6 ${item.count !== 0 && " mt-4"}`}>
            <label className="labels">children firstname</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter children firstname"
              name="firstname"
              value={children?.firstname}
              onChange={(e) => onChangeArrayType(e, formData, setFormData)}
              disabled={item.count !== lastCount}
            />
          </div>
          <div className={`col-md-4 col-sm-6 ${item.count !== 0 && " mt-4"}`}>
            <label className="labels">children lastname</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter children lastname"
              name="lastname"
              value={children?.lastname}
              onChange={(e) => onChangeArrayType(e, formData, setFormData)}
              disabled={item.count !== lastCount}
            />
          </div>
          <div className={`col-md-4 col-sm-6 ${item.count !== 0 && " mt-4"}`}>
            <label className="labels">children graduationYear</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter children graduationYear"
              name="graduationYear"
              value={children?.graduationYear}
              onChange={(e) => onChangeArrayType(e, formData, setFormData)}
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

export default Children;
