import React, { Fragment, useEffect, useRef, useState } from "react";
// import { onChangeArrayType } from "./profileFunctions";

const Siblings = ({ formData, setFormData, siblingsFields }) => {
  const { siblings } = formData;

  const [countFields, setCountFields] = useState([{ count: 0 }]);
  const [lastCount, setLastCount] = useState(0);

  const prevSiblings = useRef();

  const onAdd = (e) => {
    e.preventDefault();
    const lastFieldCount = countFields[countFields.length - 1].count; // last Field Count Value
    setCountFields([...countFields, { count: lastFieldCount + 1 }]);
    setFormData({
      ...formData,
      siblings: [
        ...siblings,
        // {
        //   firstname: "",
        //   lastname: "",
        //   yearCompleted: "",
        //   middleSchool: {
        //     name: "",
        //     yearStarted: "",
        //     yearEnded: "",
        //   },
        //   highSchool: {
        //     name: "",
        //     yearStarted: "",
        //     yearEnded: "",
        //   },
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
  const onChangeHighschool = (e, rowCount) => {
    let value = e.target.value;
    let newValue = [];

    newValue = siblings;
    newValue[rowCount] = {
      ...siblings[rowCount],
      highSchool: {
        ...siblings[rowCount].highSchool,
        [e.target.name]: value,
      },
    };

    setFormData({
      ...formData,
      siblings: [...newValue],
    });
  };

  // useEffect(() => {
  //   if (formData.siblings.length > 0) {
  //     for (const key in formData.siblings) {
  //       if (key !== "0") {
  //         setCountFields([...countFields, { count: +key }]); // converting key (string) into number
  //         setLastCount(+key);
  //       }
  //     }
  //   }
  // }, [siblingsFields]);

  useEffect(() => {
    if (
      siblingsFields.length > 0 &&
      siblingsFields?.length !== prevSiblings?.current?.length
    ) {
      for (const key in siblingsFields) {
        if (key != "0") {
          // because initial value is already set on default
          setCountFields((prev) => [...prev, { count: +key }]); // converting key (string) into number
          setLastCount((prev) => prev + 1);
        }
      }
    }
    prevSiblings.current = siblingsFields;
  }, [siblingsFields]);

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
              value={siblings[item.count]?.firstname}
              onChange={(e) => onChange(e, item.count)}
              // disabled={item.count !== lastCount}
            />
          </div>
          <div className={`col-md-4 col-sm-6 ${item.count !== 0 && " mt-4"}`}>
            <label className="labels">Sibling's Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Sibling's Last Name"
              name="lastname"
              value={siblings[item.count]?.lastname}
              onChange={(e) => onChange(e, item.count)}
              // disabled={item.count !== lastCount}
            />
          </div>
          <div className={`col-md-4 col-sm-6 ${item.count !== 0 && " mt-4"}`}>
            <label className="labels">Sibling's Year Completed</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Sibling's Year Completed"
              name="yearCompleted"
              value={siblings[item.count]?.yearCompleted}
              onChange={(e) => onChange(e, item.count)}
              // disabled={item.count !== lastCount}
            />
          </div>
          <div className="col-md-4 col-sm-6">
            <label className="labels">Sibling's Middle School Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Sibling's Middle School Name"
              name="name"
              value={siblings[item.count]?.middleSchool?.name}
              onChange={(e) => onChangeMiddleschool(e, item.count)}
              // disabled={item.count !== lastCount}
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
              value={siblings[item.count]?.middleSchool?.yearStarted}
              onChange={(e) => onChangeMiddleschool(e, item.count)}
              // disabled={item.count !== lastCount}
            />
          </div>
          <div className="col-md-4 col-sm-6">
            <label className="labels">Siblings Middle School Year Ended</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Siblings Middle School Year Ended"
              name="yearEnded"
              value={siblings[item.count]?.middleSchool?.yearEnded}
              onChange={(e) => onChangeMiddleschool(e, item.count)}
              // disabled={item.count !== lastCount}
            />
          </div>
          <div className="col-md-4 col-sm-6">
            <label className="labels">Sibling's High School Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Sibling's High School Name"
              name="name"
              value={siblings[item.count]?.highSchool?.name}
              onChange={(e) => onChangeHighschool(e, item.count)}
              // disabled={item.count !== lastCount}
            />
          </div>
          <div className="col-md-4 col-sm-6">
            <label className="labels">Siblings High School YearStarted</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Siblings High School YearStarted"
              name="yearStarted"
              value={siblings[item.count]?.highSchool?.yearStarted}
              onChange={(e) => onChangeHighschool(e, item.count)}
              // disabled={item.count !== lastCount}
            />
          </div>
          <div className="col-md-4 col-sm-6">
            <label className="labels">Siblings High School YearEnded</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Siblings High School YearEnded"
              name="yearEnded"
              value={siblings[item.count]?.highSchool?.yearEnded}
              onChange={(e) => onChangeHighschool(e, item.count)}
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

export default Siblings;
