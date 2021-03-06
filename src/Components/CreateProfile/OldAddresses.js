import React, { Fragment, useState } from "react";
// import { onChangeArrayType } from "./profileFunctions";

const OldAddresses = ({ formData, setFormData }) => {
  const { oldAddresses } = formData;

  const [countFields, setCountFields] = useState([{ count: 0 }]);
  const [lastCount, setLastCount] = useState(0);

  const onAdd = (e) => {
    e.preventDefault();
    const lastFieldCount = countFields[countFields.length - 1].count; // last Field Count Value
    setCountFields([...countFields, { count: lastFieldCount + 1 }]);
    setFormData({
      ...formData,
      oldAddresses: [
        ...oldAddresses,
        // {
        //   line1: "",
        //   line2: "",
        //   city: "",
        //   state: "",
        //   zip: "",
        //   country: "",
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
    formData.oldAddresses.pop();
    setFormData({ ...formData });

    const lastFieldCount = countFields[countFields.length - 1].count; // last Field Value
    setLastCount(lastFieldCount);
  };

  const onChangeArrayType = (e, rowCount) => {
    let value = e.target.value;
    let newValue = [];

    newValue = oldAddresses;
    newValue[rowCount] = {
      ...oldAddresses[rowCount],
      [e.target.name]: value,
    };

    setFormData({
      ...formData,
      oldAddresses: [...newValue],
    });
  };

  return (
    <div className="row mt-3 pt-2" style={{ borderTop: "1px solid #fff" }}>
      {countFields.map((item, index) => (
        <Fragment key={item.count}>
          <div className={`col-md-4 col-sm-6 ${item.count !== 0 && " mt-4"}`}>
            <label className="labels">Previous Addresses Line1</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Previous Addresses Line1"
              name="line1"
              value={oldAddresses?.line1}
              onChange={(e) => onChangeArrayType(e, item.count)}
              // disabled={item.count !== lastCount}
            />
          </div>
          <div className={`col-md-4 col-sm-6 ${item.count !== 0 && " mt-4"}`}>
            <label className="labels">Previous Addresses Line2</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Previous Addresses Line2"
              name="line2"
              value={oldAddresses?.line2}
              onChange={(e) => onChangeArrayType(e, item.count)}
              // disabled={item.count !== lastCount}
            />
          </div>
          <div className={`col-md-4 col-sm-6 ${item.count !== 0 && " mt-4"}`}>
            <label className="labels">Previous Addresses City</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Previous Addresses City"
              name="city"
              value={oldAddresses?.city}
              onChange={(e) => onChangeArrayType(e, item.count)}
              // disabled={item.count !== lastCount}
            />
          </div>
          <div className="col-md-4 col-sm-6">
            <label className="labels">Previous Addresses State</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Previous Addresses State"
              name="state"
              value={oldAddresses?.state}
              onChange={(e) => onChangeArrayType(e, item.count)}
              // disabled={item.count !== lastCount}
            />
          </div>
          <div className="col-md-4 col-sm-6">
            <label className="labels">Previous Addresses Zip</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Previous Addresses Zip"
              name="zip"
              value={oldAddresses?.zip}
              onChange={(e) => onChangeArrayType(e, item.count)}
              // disabled={item.count !== lastCount}
            />
          </div>
          <div className="col-md-4 col-sm-6">
            <label className="labels">Previous Addresses Country</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Previous Addresses Country"
              name="country"
              value={oldAddresses?.country}
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

export default OldAddresses;
