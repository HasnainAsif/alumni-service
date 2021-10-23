import React, { Fragment, useEffect, useRef, useState } from "react";
// import { onChangeArrayType } from "./profileFunctions";

const GradSchools = ({ formData, setFormData, gradschoolFields }) => {
  const { gradSchools } = formData;

  const [countFields, setCountFields] = useState([{ count: 0 }]);
  const [lastCount, setLastCount] = useState(0);

  const prevGradSchools = useRef();

  const onAdd = (e) => {
    e.preventDefault();
    const lastGradFieldCount = countFields[countFields.length - 1].count; // last Grad School Count Value
    setCountFields([...countFields, { count: lastGradFieldCount + 1 }]);
    setFormData({
      ...formData,
      gradSchools: [
        ...gradSchools,
        // { name: "", yearStarted: "", yearEnded: "" },
      ],
    });
    setLastCount(lastGradFieldCount + 1);
  };

  const onSubtract = (e, rowCount) => {
    e.preventDefault();
    const allGradFields = countFields;
    allGradFields.pop(); // delete last value
    setCountFields([...allGradFields]);
    formData.gradSchools.pop();
    // formData.gradSchools.splice(rowCount, 1);
    setFormData({ ...formData });

    const lastGradFieldCount = countFields[countFields.length - 1].count; // last Asset Value
    setLastCount(lastGradFieldCount);
  };

  const onChangeArrayType = (e, rowCount) => {
    let value = e.target.value;
    let newValue = [];

    newValue = gradSchools;
    newValue[rowCount] = {
      ...gradSchools[rowCount],
      [e.target.name]: value,
    };

    setFormData({
      ...formData,
      gradSchools: [...newValue],
    });
  };

  // useEffect(() => {
  //   if (formData.gradSchools.length > 0) {
  //     for (const key in formData.gradSchools) {
  //       if (key !== "0") {
  //         setCountFields([...countFields, { count: +key }]); // converting key (string) into number
  //         setLastCount(+key);
  //       }
  //     }
  //   }
  // }, [gradschoolFields]);

  useEffect(() => {
    if (
      gradschoolFields.length > 0 &&
      gradschoolFields?.length !== prevGradSchools?.current?.length
    ) {
      for (const key in gradschoolFields) {
        if (key != "0") {
          // because initial value is already set on default
          setCountFields((prev) => [...prev, { count: +key }]); // converting key (string) into number
          setLastCount((prev) => prev + 1);
        }
      }
    }
    prevGradSchools.current = gradschoolFields;
  }, [gradschoolFields]);

  return (
    <div className="row mt-3 pt-2" style={{ borderTop: "1px solid #fff" }}>
      {countFields.map((item, index) => (
        <Fragment key={item.count}>
          <div className={`col-md-4 col-sm-6 ${item.count !== 0 && " mt-4"}`}>
            <label className="labels">Grad School Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Grad School Name"
              name="name"
              value={gradSchools[item.count]?.name}
              onChange={(e) => onChangeArrayType(e, item.count)}
              // disabled={item.count !== lastCount}
            />
          </div>
          <div className={`col-md-4 col-sm-6 ${item.count !== 0 && " mt-4"}`}>
            <label className="labels">Grad School Year Started</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Grad School Year Started"
              name="yearStarted"
              value={gradSchools[item.count]?.yearStarted}
              onChange={(e) => onChangeArrayType(e, item.count)}
              // disabled={item.count !== lastCount}
            />
          </div>
          <div className={`col-md-4 col-sm-6 ${item.count !== 0 && " mt-4"}`}>
            <label className="labels">Grad School Year Ended</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Grad School Year Ended"
              name="yearEnded"
              value={gradSchools[item.count]?.yearEnded}
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

export default GradSchools;
