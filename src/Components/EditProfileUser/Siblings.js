import React, { Fragment, useEffect, useState } from "react";
// import { onChangeArrayType } from "./profileFunctions";

const Siblings = ({ formData, setFormData, siblingsFields }) => {
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

  useEffect(() => {
    if (formData.siblings.length > 0) {
      for (const key in formData.siblings) {
        if (key !== "0") {
          setCountFields([...countFields, { count: +key }]); // converting key (string) into number
          setLastCount(+key);
        }
      }
    }
  }, [siblingsFields]);

  return (
    <div className="row mt-3 pt-2" style={{ borderTop: "1px solid #fff" }}>
      {countFields.map((item, index) => (
        <Fragment key={item.count}>
          <div className={`col-md-4 col-sm-6 ${item.count !== 0 && " mt-4"}`}>
            <label className="labels">siblings firstname</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter siblings firstname"
              name="firstname"
              value={siblings[item.count]?.firstname}
              onChange={(e) => onChange(e, formData, setFormData)}
              disabled={item.count !== lastCount}
            />
          </div>
          <div className={`col-md-4 col-sm-6 ${item.count !== 0 && " mt-4"}`}>
            <label className="labels">siblings lastname</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter siblings lastname"
              name="lastname"
              value={siblings[item.count]?.lastname}
              onChange={(e) => onChange(e, formData, setFormData)}
              disabled={item.count !== lastCount}
            />
          </div>
          <div className={`col-md-4 col-sm-6 ${item.count !== 0 && " mt-4"}`}>
            <label className="labels">siblings yearCompleted</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter siblings yearCompleted"
              name="yearCompleted"
              value={siblings[item.count]?.yearCompleted}
              onChange={(e) => onChange(e, formData, setFormData)}
              disabled={item.count !== lastCount}
            />
          </div>
          <div className="col-md-4 col-sm-6">
            <label className="labels">siblings middleSchool name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter siblings middleSchool name"
              name="name"
              value={siblings[item.count]?.middleSchool?.name}
              onChange={(e) => onChangeMiddleschool(e, formData, setFormData)}
              disabled={item.count !== lastCount}
            />
          </div>
          <div className="col-md-4 col-sm-6">
            <label className="labels">siblings middleSchool yearStarted</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter siblings middleSchool yearStarted"
              name="yearStarted"
              value={siblings[item.count]?.middleSchool?.yearStarted}
              onChange={(e) => onChangeMiddleschool(e, formData, setFormData)}
              disabled={item.count !== lastCount}
            />
          </div>
          <div className="col-md-4 col-sm-6">
            <label className="labels">siblings middleSchool yearEnded</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter siblings middleSchool yearEnded"
              name="yearEnded"
              value={siblings[item.count]?.middleSchool?.yearEnded}
              onChange={(e) => onChangeMiddleschool(e, formData, setFormData)}
              disabled={item.count !== lastCount}
            />
          </div>
          <div className="col-md-4 col-sm-6">
            <label className="labels">siblings highSchool name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter siblings highSchool name"
              name="name"
              value={siblings[item.count]?.highSchool?.name}
              onChange={(e) => onChangeHighschool(e, formData, setFormData)}
              disabled={item.count !== lastCount}
            />
          </div>
          <div className="col-md-4 col-sm-6">
            <label className="labels">siblings highSchool yearStarted</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter siblings highSchool yearStarted"
              name="yearStarted"
              value={siblings[item.count]?.highSchool?.yearStarted}
              onChange={(e) => onChangeHighschool(e, formData, setFormData)}
              disabled={item.count !== lastCount}
            />
          </div>
          <div className="col-md-4 col-sm-6">
            <label className="labels">siblings highSchool yearEnded</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter siblings highSchool yearEnded"
              name="yearEnded"
              value={siblings[item.count]?.highSchool?.yearEnded}
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
