import React, { Fragment, useState } from "react";
// import { onChangeArrayType } from "./profileFunctions";

const GradSchools = ({ formData, setFormData }) => {
  const { gradSchools } = formData;

  const [countFields, setCountFields] = useState([{ count: 0 }]);
  const [lastCount, setLastCount] = useState(0);

  const onAdd = (e) => {
    e.preventDefault();
    const lastGradFieldCount = countFields[countFields.length - 1].count; // last Grad School Count Value
    setCountFields([...countFields, { count: lastGradFieldCount + 1 }]);
    setFormData({
      ...formData,
      gradSchools: [
        ...gradSchools,
        { name: "", yearStarted: "", yearEnded: "" },
      ],
    });
    setLastCount(lastGradFieldCount + 1);
  };

  const onSubtract = (e) => {
    e.preventDefault();
    const allGradFields = countFields;
    allGradFields.pop(); // delete last value
    setCountFields([...allGradFields]);
    formData.gradSchools.pop();
    setFormData({ ...formData });

    const lastGradFieldCount = countFields[countFields.length - 1].count; // last Asset Value
    setLastCount(lastGradFieldCount);
  };

  const onChangeArrayType = (e) => {
    let value = e.target.value;
    let newValue = [];

    newValue = gradSchools;
    newValue[lastCount] = {
      ...gradSchools[lastCount],
      [e.target.name]: value,
    };

    setFormData({
      ...formData,
      gradSchools: [...newValue],
    });
  };

  return (
    <div className="row mt-3 pt-2" style={{ borderTop: "1px solid #fff" }}>
      {countFields.map((item, index) => (
        <Fragment key={item.count}>
          <div className={`col-md-4 col-sm-6 ${item.count !== 0 && " mt-4"}`}>
            <label className="labels">Grad Schools Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Grad Schools Name"
              name="name"
              value={gradSchools?.name}
              onChange={(e) => onChangeArrayType(e, formData, setFormData)}
              disabled={item.count !== lastCount}
            />
          </div>
          <div className={`col-md-4 col-sm-6 ${item.count !== 0 && " mt-4"}`}>
            <label className="labels">Grad Schools Year Started</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Grad Schools Year Started"
              name="yearStarted"
              value={gradSchools?.yearStarted}
              onChange={(e) => onChangeArrayType(e, formData, setFormData)}
              disabled={item.count !== lastCount}
            />
          </div>
          <div className={`col-md-4 col-sm-6 ${item.count !== 0 && " mt-4"}`}>
            <label className="labels">Grad Schools Year Ended</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Grad Schools Year Ended"
              name="yearEnded"
              value={gradSchools?.yearEnded}
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

export default GradSchools;
